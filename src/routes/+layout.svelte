<script>
	import '../app.css';
	import NovidadesScreen from "../screens/NovidadesScreen.svelte";
	import Icon from "heroicons-for-svelte";
	import { Home as SolidHome } from "heroicons-for-svelte/icons/solid";
	import { BookOpen as SolidBookOpen } from "heroicons-for-svelte/icons/solid";
	let { children } = $props();
</script>



<div class="text-s bg-p border border-[5px] font-body text-2xl shadow-[0_0_10px_red_inset] bg-p">
	<header class="p-10 border flex flex-wrap justify-around items-center">
		<ul class="flex flex-wrap text-t gap-5">
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
		<a href="/" class="img translate-y-[5px] rounded-full">
			<img src="https://res.cloudinary.com/dncs4zash/image/upload/v1733449220/sm_profile-nobg_hv0stw.png" alt="not found" class="w-20"/>
		</a>
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
	</main>
	<NovidadesScreen title="Como a cultura envolve o conhecimento e quais elementos da cultura influencia no mesmo" src="" description="Publicado em: 08/12/2024; Esse vídeo aborda conceitos sobre cultura e conhecimento buscando o viés da influência um do outro. Definição de Cultura; Contexto Cultural; Cultura e Aprendizagem;" />
	<footer class="my-20 w-full flex flex-col items-center justify-center">
		<p class="mb-10 px-20 text-center">Siga nossas redes para acessar mais conteúdo:</p>
		<a href="/descobrir" class="text-p text-xl bg-gradient-to-r from-s to-t p-5 rounded-xl">Descobrir</a>
	</footer>
</div>



<style>

:global(.icon) {
		color:white;
}



</style>