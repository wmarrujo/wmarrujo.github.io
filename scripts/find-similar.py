#!/usr/bin/env -S uv run
# /// script
# requires-python = ">=3.11"
# dependencies = ["sentence-transformers"]
# ///
# Usage: ./scripts/find-similar.py <file> [--threshold 0.70] [--model all-MiniLM-L6-v2]

import re
from argparse import ArgumentParser

import torch
from sentence_transformers import SentenceTransformer, util

################################################################################

p = ArgumentParser()
p.add_argument("file")
p.add_argument("--threshold", type=float, default=0.70)
p.add_argument("--model", default="all-MiniLM-L6-v2")
args = p.parse_args()

entries, linenos = zip(
    *[
        (s, n)
        for n, line in enumerate(open(args.file), 1)
        if (s := re.sub(r"^[-*+]\s+", "", line).strip())
        and not s.startswith(("#", "```"))
    ]
)

model = SentenceTransformer(args.model)
embeddings = model.encode(entries, convert_to_tensor=True)
scores = util.cos_sim(embeddings, embeddings)

# upper triangle only (no self-pairs, no duplicates), filter by threshold, sort — all in tensor ops
mask = torch.triu(scores >= args.threshold, diagonal=1)
idx = mask.nonzero()
vals = scores[idx[:, 0], idx[:, 1]]
idx = idx[vals.argsort(descending=True)]

w = max(6, len(str(max(linenos))))
for i, j in idx:
    print(f"{scores[i, j]:4.0%}\t{linenos[i]:>{w}} ╽ {entries[i]}")
    print(f"    \t{linenos[j]:>{w}} ╿ {entries[j]}\n")

print(f"{len(idx)} pair(s) above threshold {args.threshold}")
