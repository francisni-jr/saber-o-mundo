<script>
	import '../app.css';
	import NovidadesScreen from "../screens/NovidadesScreen.svelte";
	import Icon from "heroicons-for-svelte";
	import { Home as SolidHome } from "heroicons-for-svelte/icons/solid";
	import { BookOpen as SolidBookOpen } from "heroicons-for-svelte/icons/solid";
	let { children } = $props();
</script>



<div class="text-s border font-body text-2xl">
	<header class="p-10 border flex flex-wrap justify-around items-center">
		<ul class="flex text-t underline gap-5">
			<li>
				<a href="https://youtube.com/">Youtube</a>
			</li>
			<li>
				<a href="https://instagram.com/">Instagram</a>
			</li>
			<li>
				<a href="https://tiktok.com/">Tiktok</a>
			</li>
		</ul>
		<div class="img p-10 rounded-full">
			<img src="https://res.cloudinary.com/dncs4zash/image/upload/v1732583516/logo_gigotl.png" alt="not found" class="w-20"/>
		</div>
	</header>
	<main class="w-full h-auto flex flex-col" >
		<aside class="p-10 border border-s" >
			<ul class="flex flex-wrap gap-10 justify-center aitems-center">
				<li class="bg-gradient-to-r from-s to-t rounded-xl p-5">
					<a href="/" class="flex justify-center items-center text-p gap-5 text-xl">
						<Icon icon={SolidHome} class="icon text-3xl " />
						<p>Início</p>
					</a>
				</li>
				<li class="bg-gradient-to-r from-s to-t rounded-xl p-5">
					<a href="/descobrir" class="flex justify-center items-center text-p gap-5 text-xl">
						<Icon icon={SolidBookOpen} class="icon text-3xl " />
						<p>Descobrir</p>
					</a>
				</li>
			</ul>
		</aside>
		<section class="w-full border p-20">
			{@render children()}
		</section>
		<NovidadesScreen/>
	</main>
	
	
</div>



<style>

:global(.icon) {
		color:white;
}

</style>