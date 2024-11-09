<script lang="ts">
	import logo from "$lib/images/logos/logo.svg"
	import PaperAirplane from "$lib/images/notes/paper-airplane.webp"
	import Aerobatics from "$lib/images/notes/aerobatics.webp"
	import WindTunnel from "$lib/images/notes/wind-tunnel.webp"
	import Dots from "$lib/images/notes/dots.webp"
	import Rocket from "$lib/images/notes/rocket.webp"
	import Circuit from "$lib/images/notes/circuit.webp"
	import Structure from "$lib/images/notes/structure.webp"
	import Cracks from "$lib/images/notes/cracks.webp"
	import Orbits from "$lib/images/notes/orbits.webp"
	import RadarDish from "$lib/images/notes/radar-dish.webp"
	import Dice from "$lib/images/notes/dice.webp"
	import Spheres from "$lib/images/notes/spheres.webp"
	import Tiles from "$lib/images/notes/tiles.webp"
	import Rotation from "$lib/images/notes/rotation.webp"
	import Twist from "$lib/images/notes/twist.webp"
	import Leaves from "$lib/images/notes/leaves.webp"
	import Lattice from "$lib/images/notes/lattice.webp"
	import Comet from "$lib/images/notes/comet.webp"
	import Sand from "$lib/images/notes/sand.webp"
	import Waves from "$lib/images/notes/waves.webp"
	import Fire from "$lib/images/notes/fire.webp"
	import Pipette from "$lib/images/notes/pipette.webp"
	import Stocks from "$lib/images/notes/stocks.webp"
	import Cells from "$lib/images/notes/cells.webp"
	import Conversation from "$lib/images/notes/conversation.webp"
	
	////////////////////////////////////////////////////////////////////////////////
	
	const notes = [
		{title: "Introduction to Aeronautics & Astronautics", 	category: "engineering", 		image: PaperAirplane, 	link: "https://drive.google.com/file/d/1doYLopcwT0dWmhyOpV39Z57Jy_4iJRrx/view?usp=sharing"},
		{title: "Aircraft Dynamics", 							category: "engineering", 		image: Aerobatics, 		link: "https://drive.google.com/file/d/1wv71SEp84QhQ5_nHYs3fHtnzxQhkllg7/view?usp=sharing"},
		{title: "Aerodynamics", 								category: "engineering", 		image: WindTunnel, 		link: "https://drive.google.com/file/d/1acut6KNo8RVlIkqRSencc888LkxpGzyE/view?usp=sharing"},
		{title: "Computational Fluid Dynamics", 				category: "engineering", 		image: Dots, 			link: "https://drive.google.com/file/d/1mRniwq5B1nagJHYNwaUuiwODGX3I6XvE/view?usp=sharing"},
		{title: "Propulsion", 									category: "engineering", 		image: Rocket, 			link: "https://drive.google.com/file/d/1fKDLaJK0UPb-g16VYHBPonUjMazd1ZPV/view?usp=sharing"},
		{title: "Controls Analysis", 							category: "engineering", 		image: Circuit, 		link: "https://drive.google.com/file/d/1_z-zwS3Yj9vd-zjLHyz2dPu1xm6622MG/view?usp=sharing"},
		{title: "Structures", 									category: "engineering", 		image: Structure, 		link: "https://drive.google.com/file/d/1LVwuEfsGyIxe4T29zorvn4puXDtF3hUn/view?usp=sharing"},
		{title: "Structures 2", 								category: "engineering", 		image: Cracks, 			link: "https://drive.google.com/file/d/1SFIQOHXM5luO01K4OhSuZekTw4deiYIU/view?usp=sharing"},
		{title: "Dynamics & Vibrations", 						category: "engineering", 		image: Orbits, 			link: "https://drive.google.com/file/d/15sc-D9rlGfQQfCyia1vPYsISzrd-I8wQ/view?usp=sharing"},
		{title: "Signals", 										category: "engineering", 		image: RadarDish, 		link: "https://drive.google.com/file/d/1aDoEDQmaifTSCToHkeVsgCZufE2xHiJ6/view?usp=sharing"},
		{title: "Statistics & Systems Engineering", 			category: "engineering", 		image: Dice, 			link: "https://drive.google.com/file/d/1m8oQGt25CoWAzJPgWOhWNsd4KBzrbV8z/view?usp=sharing"},
		{title: "Multivariable Calculus", 						category: "math", 				image: Spheres, 		link: "https://drive.google.com/file/d/1bejAbdcPLCzlb7_pZDSbT6wu5x2UutOr/view?usp=sharing"},
		{title: "Linear Algebra", 								category: "math", 				image: Tiles, 			link: "https://drive.google.com/file/d/1tsBoKoIAP0MZCh-bAD-kO4wCOHxPhL67/view?usp=sharing"},
		{title: "Differential Equations", 						category: "math", 				image: Rotation, 		link: "https://drive.google.com/file/d/1oFINcZIJbObtDMsc8uKJ9V9YB1MF6UbJ/view?usp=sharing"},
		{title: "Partial Differential Equations", 				category: "math", 				image: Twist, 			link: "https://drive.google.com/file/d/1pCCm9mScmUPl81UzEem-Q8JyykA5R0ob/view?usp=sharing"},
		{title: "Category Theory", 								category: "math", 				image: Leaves, 			link: "https://drive.google.com/file/d/1mrfXfRPYmIHNv1ozxbOYpc18U9yXbmBT/view?usp=sharing"},
		{title: "Simplex Algorithm", 							category: "math", 				image: Lattice, 		link: "https://drive.google.com/file/d/1WUUTOO7kFogdVr7wFSGT3eij-cU3Dlmf/view?usp=sharing"},
		{title: "Introductory Physics", 						category: "physics", 			image: Comet, 			link: "https://drive.google.com/file/d/18YNcfikqrjZSTcbq0ScowxbrKHpnlMLM/view?usp=sharing"},
		{title: "Electromagnetism", 							category: "physics", 			image: Sand, 			link: "https://drive.google.com/file/d/1OufU7yy7Li4lWXxzglXOzvUQv8kgEoNu/view?usp=sharing"},
		{title: "Fluid Mechanics", 								category: "physics", 			image: Waves, 			link: "https://drive.google.com/file/d/1TuHKtXpk4XNj9xXYhf78tBmE_y6jrhfn/view?usp=sharing"},
		{title: "Thermodynamics", 								category: "physics", 			image: Fire, 			link: "https://drive.google.com/file/d/1lv21uIxHbvp6_JxLfq11XHyQIL0UkUDi/view?usp=sharing"},
		{title: "Zero-G Fluids", 								category: "physics", 			image: Pipette, 		link: "https://drive.google.com/file/d/1y92HQxbxvJkc7nWtqdPD9_ypugW9MWrv/view?usp=sharing"},
		{title: "Profit First", 								category: "entrepreneurship", 	image: Stocks, 			link: "https://docs.google.com/document/d/1ewrYQszKqs97QgWy_roSCKbaxAbLce9cdlBDD7D4Kvo/view?usp=sharing"},
		{title: "Biology", 										category: "biology", 			image: Cells, 			link: "https://drive.google.com/file/d/1ktN506dc0XhouyoASqJlFMpCZ4qC7BVC/view?usp=sharing"},
		{title: "Overview of Linguistics", 						category: "linguistics", 		image: Conversation, 	link: "https://drive.google.com/file/d/157NC_OZU6LhkbhrFp2lZ18Ag2kwvDpED/view?usp=sharing"},
	]
</script>

<nav class="flex items-center gap-4 p-3">
	<a href="/"><img src={logo} alt="Logo" class="w-6"></a>
	<a href="/#about" class="hover:underline">About</a>
	<a href="/projects" class="hover:underline">Projects</a>
	<a href="/notes" class="underline">Notes</a>
	<a href="/recommendations" class="hover:underline">Recommendations</a>
</nav>
<main class="flex justify-between flex-wrap gap-6 p-6">
	{#each notes as note, index (index)}
		<a href={note.link} class="bg-slate-800 flex items-center shadow-lg">
			<img src={note.image} alt="icon" class="h-16">
			<span class="text-white text-lg px-6">{note.title}</span>
		</a>
	{/each}
</main>
