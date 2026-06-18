<script lang="ts">
	import { onMount } from 'svelte'

	interface Props {
		user: string
		domain: string
		class?: string
	}

	let { user, domain, class: className = '' }: Props = $props()

	let anchor: HTMLAnchorElement
	let wrapper: HTMLSpanElement
	let revealed = $state(false)

	function reveal() {
		if (revealed) return
		revealed = true
		anchor.href = `mailto:${user}@${domain}`
	}

	// Entity-encode every character and scatter display:none decoy spans every 4 chars.
	// Bots reading raw HTML see neither a valid mailto href nor a parseable email string.
	// Browsers render and copy the text correctly; display:none nodes are excluded from
	// the layout and from clipboard selection.
	function obfuscate(email: string): string {
		let result = ''
		for (let i = 0; i < email.length; i++) {
			if (i > 0 && i % 4 === 0) {
				result += '<span aria-hidden="true" style="display:none">x</span>'
			}
			result += `&#${email.charCodeAt(i)};`
		}
		return result
	}

	// Computed once at render time (SSR-safe). The email address is encoded in the HTML
	// output as numeric entities + decoy spans — never as a raw address string.
	const emailHtml = obfuscate(`${user}@${domain}`)

	onMount(() => {
		// Reveal when the element scrolls into view (touch-friendly).
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					reveal()
					observer.disconnect()
				}
			},
			{ threshold: 0.5 }
		)
		observer.observe(wrapper)

		// Also reveal on explicit mouse/keyboard intent.
		wrapper.addEventListener('mouseenter', reveal, { once: true })
		anchor.addEventListener('focus', reveal, { once: true })

		return () => observer.disconnect()
	})
</script>

<!--
	Layer 1 (text):  HTML entity encoding + display:none decoy spans via obfuscate()
	Layer 2 (href):  href starts as "#contact" — no mailto in source HTML.
	                 onMount sets the real mailto:user@domain on first interaction.
	Layer 3 (link):  rel="nofollow noindex" discourages crawlers from following/indexing.
	Layer 4 (UX):    CSS blur is removed on scroll-into-view, mouseenter, or focus.
	                 Text remains selectable and copy-pasteable throughout.
-->
<span bind:this={wrapper} class="inline-block">
	<a
		bind:this={anchor}
		rel="nofollow noindex"
		href="#contact"
		class="cursor-pointer {className}"
		style:filter={revealed ? 'blur(0)' : 'blur(4px)'}
	>
		{@html emailHtml}
	</a>
</span>

<style>
	a {
		transition: filter 0.5s ease;
	}
</style>
