<script lang="ts">
	import {AppShell} from "@skeletonlabs/skeleton"
	import {AppBar} from "@skeletonlabs/skeleton"
	import logo from "$lib/images/logos/logo.svg"
</script>

<AppShell>
	<AppBar>
		<svelte:fragment slot="lead">
			<a href="/"><img src={logo} alt="Logo" class="w-5 mr-3"></a>
			<a href="/about" class="mx-2 hover:underline">About</a>
			<a href="/notes" class="mx-2 underline">Notes</a>
			<a href="/projects" class="mx-2 hover:underline">Projects</a>
			<a href="/recommendations" class="mx-2 hover:underline">Recommendations</a>
		</svelte:fragment>
	</AppBar>
	<div class="flex justify-center">
		<article class="prose lg:prose-xl prose-invert shadow-lg p-10">
			<h1 class="h1 text-center">Notes</h1>
			<ul class="text-2xl">
				<li>Engineering
					<ul>
						<li><a href="https://drive.google.com/file/d/1doYLopcwT0dWmhyOpV39Z57Jy_4iJRrx/view?usp=sharing">Introduction to Aeronautics & Astronautics</a></li>
						<li><a href="https://drive.google.com/file/d/1wv71SEp84QhQ5_nHYs3fHtnzxQhkllg7/view?usp=sharing">Aircraft Dynamics</a></li>
						<li><a href="https://drive.google.com/file/d/1acut6KNo8RVlIkqRSencc888LkxpGzyE/view?usp=sharing">Aerodynamics</a></li>
						<li><a href="https://drive.google.com/file/d/1mRniwq5B1nagJHYNwaUuiwODGX3I6XvE/view?usp=sharing">Computational Fluid Dynamics</a></li>
						<li><a href="https://drive.google.com/file/d/1fKDLaJK0UPb-g16VYHBPonUjMazd1ZPV/view?usp=sharing">Propulsion</a></li>
						<li><a href="https://drive.google.com/file/d/1_z-zwS3Yj9vd-zjLHyz2dPu1xm6622MG/view?usp=sharing">Controls Analysis</a></li>
						<li><a href="https://drive.google.com/file/d/1LVwuEfsGyIxe4T29zorvn4puXDtF3hUn/view?usp=sharing">Structures</a></li>
						<li><a href="https://drive.google.com/file/d/1SFIQOHXM5luO01K4OhSuZekTw4deiYIU/view?usp=sharing">Structures 2</a></li>
						<li><a href="https://drive.google.com/file/d/15sc-D9rlGfQQfCyia1vPYsISzrd-I8wQ/view?usp=sharing">Dynamics & Vibrations</a></li>
						<li><a href="https://drive.google.com/file/d/1aDoEDQmaifTSCToHkeVsgCZufE2xHiJ6/view?usp=sharing">Signals</a></li>
						<li><a href="https://drive.google.com/file/d/1m8oQGt25CoWAzJPgWOhWNsd4KBzrbV8z/view?usp=sharing">Statistics & Systems Engineering</a></li>
					</ul>
				</li>
				<li>Math
					<ul>
						<li><a href="https://drive.google.com/file/d/1bejAbdcPLCzlb7_pZDSbT6wu5x2UutOr/view?usp=sharing">Multivariable Calculus</a></li>
						<li><a href="https://drive.google.com/file/d/1tsBoKoIAP0MZCh-bAD-kO4wCOHxPhL67/view?usp=sharing">Linear Algebra</a></li>
						<li><a href="https://drive.google.com/file/d/1oFINcZIJbObtDMsc8uKJ9V9YB1MF6UbJ/view?usp=sharing">Differential Equations</a></li>
						<li><a href="https://drive.google.com/file/d/1pCCm9mScmUPl81UzEem-Q8JyykA5R0ob/view?usp=sharing">Partial Differential Equations</a></li>
						<li><a href="https://drive.google.com/file/d/1mrfXfRPYmIHNv1ozxbOYpc18U9yXbmBT/view?usp=sharing">Category Theory</a></li>
						<li><a href="https://drive.google.com/file/d/1WUUTOO7kFogdVr7wFSGT3eij-cU3Dlmf/view?usp=sharing">Simplex Algorithm</a></li>
						
					</ul>
				</li>
				<li>Physics
					<ul>
						<li><a href="https://drive.google.com/file/d/18YNcfikqrjZSTcbq0ScowxbrKHpnlMLM/view?usp=sharing">Introductory Physics</a></li>
						<li><a href="https://drive.google.com/file/d/1OufU7yy7Li4lWXxzglXOzvUQv8kgEoNu/view?usp=sharing">Electromagnetism</a></li>
						<li><a href="https://drive.google.com/file/d/1TuHKtXpk4XNj9xXYhf78tBmE_y6jrhfn/view?usp=sharing">Fluid Mechanics</a></li>
						<li><a href="https://drive.google.com/file/d/1lv21uIxHbvp6_JxLfq11XHyQIL0UkUDi/view?usp=sharing">Thermodynamics</a></li>
						<li><a href="https://drive.google.com/file/d/1y92HQxbxvJkc7nWtqdPD9_ypugW9MWrv/view?usp=sharing">Zero-G Fluids</a></li>
					</ul>
				</li>
				<li>Entrepreneurship
					<ul>
						<li><a href="https://drive.google.com/file/d/1kkyzRLd0_L3k82-nPqm3_jDbRIppTRBL/view?usp=sharing">Profit First Percentages</a></li>
						<li><a href="https://drive.google.com/file/d/1YUOWi7VyzYNKoLbuoMqGdYsgXYCpMe7z/view?usp=sharing">Profit First Steps</a></li>
					</ul>
				</li>
				<li><a href="https://drive.google.com/file/d/1ktN506dc0XhouyoASqJlFMpCZ4qC7BVC/view?usp=sharing">Biology</a></li>
				<li><a href="https://drive.google.com/file/d/157NC_OZU6LhkbhrFp2lZ18Ag2kwvDpED/view?usp=sharing">Overview of Linguistics</a></li>
			</ul>
		</article>
	</div>
</AppShell>
