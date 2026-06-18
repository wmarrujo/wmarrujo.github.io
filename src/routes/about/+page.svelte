<script lang="ts">
	import logo from "$lib/images/logos/logo.svg"
	import EmailLink from "$lib/components/EmailLink.svelte"
</script>

<nav class="flex items-center gap-4 p-3">
	<a href="/"><img src={logo} alt="Logo" class="w-6 min-w-6"></a>
	<a href="/about" class="underline">About</a>
	<a href="/projects" class="hover:underline">Projects</a>
	<a href="/notes" class="hover:underline">Notes</a>
	<a href="/recommendations" class="hover:underline">Recommendations</a>
</nav>
<main class="container">
	<article class="prose prose-invert my-24">
		<h1>About Me</h1>
		<p>Software and Aerospace Engineer, 10+ years programming</p>
		<p>I strive to be impactful and effective in my life merging the technical and philosophical to see and bring about a vision for a wise and secure future. I do this by being disciplined and reflective.</p>
		
		<h2>Focuses</h2>
		<ul>
			<li>True “engineering” - figuring out what is actually needed, then solving that</li>
			<li>Application Development, user-facing, any stack (with a strong preference towards functional programming and a good developer experience)</li>
			<li>Enabling effective communication of difficult topics</li>
		</ul>
		
		<!-- <h2>Principles</h2> -->
		<!-- TODO: principles -->
		
		<!-- <h2>Experience & Accomplishments</h2> -->
		<!-- TODO: link to resume -->
		
		<h2>Over the years I've accumulated many principles of good engineering, and software engineering in particular:</h2>
		<ul>
			<li>The single hardest part of building a system is deciding precisely what to build.</li>
			<li>Work backwards from user pain.</li>
			<li>Productivity is not measured by you, it is measured by your customers. Did they find what you did valuable?</li>
			<li>Test your ideas as soon as possible. Building a product is a science. Everyone thinks they're aligned until it's too late.</li>
			<li>If you don't have a specification, then all you have is a vague idea. Code is just a lossy projection of your specification.</li>
			<li>Quality in software is defined by our ability to change it.</li>
			<li>Code is not an asset - it's a liability.</li>
			<li>Your data model is your destiny - ask what the atomic unit of work is in your domain</li>
			<li>Dependency is the key problem in engineering development, at all scales.</li>
			<li>First make it work, then make it right, then make it fast.</li>
			<li>It is almost always impossible to implement a technical solution to a social problem.</li>
			<li>The devil is in the defaults, choose them wisely.</li>
			<li>No one will remember if you're 2 weeks late, but they will remember if you ship a bad product.</li>
			<li>You can't inspect quality into a product, you must build it in.</li>
			<li>Make the simple things easy, and the complicated things possible.</li>
			<li>Cutting scope isn't lowering quality - there's always more work than time. Shipping on time means shipping something imperfect.</li>
			<li>The first response to a new idea should be “Maybe Later”. Maybe, because it must be evaluated. Later, because it shouldn't disrupt current work.</li>
			<li>Favor people over processes. Don't just embrace entire systems, use the components that work for your situation.</li>
			<li>When a measure becomes a target, it ceases to be a good measure.</li>
			<li>Think in trade-offs and bets, not right vs wrong</li>
			<!-- Candidates for more principles:
			- AI Models are extremely intelligent, but they comprehend nothing
			- Code is inventory & Data is Radioactive
			- only ever use a maximum of 1 new technology to a product if you want it to succeed
			-->
		</ul>
		
		<!-- <h2>Here are some more on the practices themselves</h2> -->
		<!-- TODO: link to the list items which are how to do it, not principles, organized by category -->
		
		<h2>Some of my favorite long-term problems to work on are:</h2>
		<ul>
			<li>How to best track an idea for its whole lifecycle.</li>
			<li>How to distribute the benefits of the future (technology, philosophy) with the places of the world where it hasn’t yet reached</li>
			<li>How to evaluate what the most effective use of my time is across my life.</li>
			<li>How to build a moral system, from first principles. And can it even exist?</li>
			<li>How to make a company where everyone wins, build that culture and system.</li>
			<li>Designing a programming language which is both useful for building real applications and rigorous mathematically.</li>
			<li>How to get people talking politics with each other in a constructive way again, finding a way out of high conflict</li>
		</ul>
		
		<h2 id="contact">How to contact</h2>
		<div class="not-prose flex flex-wrap gap-4 my-6">
			<div class="flex flex-col gap-2 rounded-lg bg-secondary p-4 flex-1 min-w-60">
				<p class="text-sm text-white/60">
					Have something interesting to share with me?
				</p>
				<EmailLink
					user="interesting"
					domain="wmarrujo.com"
					class="text-accent font-medium hover:underline"
				/>
			</div>
			<div class="flex flex-col gap-2 rounded-lg bg-secondary p-4 flex-1 min-w-60">
				<p class="text-sm text-white/60">
					Is there an opportunity I should know about?
				</p>
				<EmailLink
					user="opportunity"
					domain="wmarrujo.com"
					class="text-accent font-medium hover:underline"
				/>
			</div>
			<div class="flex flex-col gap-2 rounded-lg bg-secondary p-4 flex-1 min-w-60">
				<p class="text-sm text-white/60">
					Something wrong with the website?
				</p>
				<EmailLink
					user="admin"
					domain="wmarrujo.com"
					class="text-accent font-medium hover:underline"
				/>
			</div>
			<div class="flex flex-col gap-2 rounded-lg bg-secondary p-4 flex-1 min-w-60">
				<p class="text-sm text-white/60">Anything else</p>
				<EmailLink
					user="contact"
					domain="wmarrujo.com"
					class="text-accent font-medium hover:underline"
				/>
			</div>
		</div>
		<p>In order for me to not think it's spam, please help me by telling me:</p>
		<ol>
			<li>who you are (&amp; how I can verify that)</li>
			<li>why you're contacting me</li>
		</ol>
	</article>
</main>
