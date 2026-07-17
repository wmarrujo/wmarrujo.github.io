import {tick} from "svelte"

// FLIP (First, Last, Invert, Play) for smooth grid reflows.
// Captures the "first" position of each selected element, lets the caller
// mutate state, then after the DOM updates animates each element from its
// new ("last") position back to its first position and releases — so the
// movement glides instead of snapping.
function captureAndFlip(container: HTMLElement, selector: string) {
	const items = Array.from(container.querySelectorAll<HTMLElement>(selector))
	const first = items.map((el) => el.getBoundingClientRect())
	return () => {
		for (let i = 0; i < items.length; i++) {
			const el = items[i]
			const last = el.getBoundingClientRect()
			const dx = first[i].left - last.left
			const dy = first[i].top - last.top
			if (dx === 0 && dy === 0) continue
			el.style.transition = "none"
			el.style.transform = `translate(${dx}px, ${dy}px)`
			el.offsetHeight // force reflow
			el.style.transition = "transform 300ms ease-out"
			el.style.transform = ""
			const cleanup = () => {
				el.style.transition = ""
				el.style.transform = ""
				el.removeEventListener("transitionend", cleanup)
			}
			el.addEventListener("transitionend", cleanup)
		}
	}
}

export async function withFlip(
	container: HTMLElement | null,
	selector: string,
	mutate: () => void
) {
	if (!container) {
		mutate()
		return
	}
	const play = captureAndFlip(container, selector)
	mutate()
	await tick()
	play()
}