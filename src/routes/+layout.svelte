<script>
	import '../app.css';
	import Icon from "heroicons-for-svelte";
	import { Home as SolidHome } from "heroicons-for-svelte/icons/solid";
	import { BookOpen as SolidBookOpen } from "heroicons-for-svelte/icons/solid";
	let { children } = $props();
</script>



<div class="text-s font-body text-2xl">
	<header class="p-10 border flex justify-around items-center">
		<ul class="flex text-t underline gap-5">
			<li>
				<a href="https://youtube.com/">Canal</a>
			</li>
			<li>
				<a href="https://youtube.com/">Instagram</a>
			</li>
			<li>
				<a href="https://youtube.com/">Tiktok</a>
			</li>
		</ul>
		<div class="img p-10 rounded-full">
			<img src="https://lh3.googleusercontent.com/drive-storage/AJQWtBNbPRwzp0rSwcXkHhnY_DBpZ7In-seCVdFFWRoEWEStrd_ur4-i7kmu-svQw9lHwwoMxfELl7yAWIhzcVsfw1sQIVBiQei1oT2567z0_XnHyM8=w100" alt="not found" class=""/>
		</div>
	</header>
	<main class="w-full h-auto flex" >
		<aside class="p-10 border border-s" >
			<ul class="flex flex-col flex-wrap gap-5 justify-center aitems-center">
				<li class="bg-gradient-to-r from-s to-t rounded-xl p-5">
					<a href="" class="">
						<Icon icon={SolidHome} class="icon text-3xl " />
					</a>
				</li>
				<li class="bg-gradient-to-r from-s to-t rounded-xl p-5">
					<a href="" class="">
						<Icon icon={SolidBookOpen} class="icon text-3xl " />
					</a>
				</li>
			</ul>
		</aside>
		<section class="w-[50%] border p-10">
			{@render children()}
		</section>
		<section class="w-[50%] flex flex-col p-10 border">
			<h1 class="text-6xl font-title mb-5">Novidades</h1>

			<div class="bg-s animate animate-pulse p-20 my-5 rounded-xl"></div>
			<b>Title</b>
		</section>
	</main>
	
	
</div>



<style>

:global(.icon) {
		color:white;
}

</style>