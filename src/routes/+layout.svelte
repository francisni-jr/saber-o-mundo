<script>
	import '../app.css';
	import NovidadesScreen from "../screens/NovidadesScreen.svelte";
	import Icon from "heroicons-for-svelte";
	import { Home as SolidHome } from "heroicons-for-svelte/icons/solid";
	import { BookOpen as SolidBookOpen } from "heroicons-for-svelte/icons/solid";
	let { children } = $props();
	
</script> 

<div class="scroll-smooth text-s bg-p font-body text-2xl h-full relative">
	<div>
		<script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
		<script src="https://files.bpcontent.cloud/2024/12/09/21/20241209215359-S1KBOM9K.js"></script>
	</div>

	<main class="w-full h-auto flex flex-col" >
		<aside class="mt-20" >
			<ul class="flex flex-wrap gap-10 justify-center aitems-center">
				<li class="bg-t drop-shadow-[0_0_20px_orange] rounded-xl p-5">
					<a href="/" class="flex justify-center items-center text-p gap-5 text-xl">
						<Icon icon={SolidHome} class="icon text-3xl " />
						<p>Início</p>
					</a>
				</li>
				<li class="bg-t drop-shadow-[0_0_20px_orange] rounded-xl p-5">
					<a href="/descobrir" class="flex justify-center items-center text-p gap-5 text-xl">
						<Icon icon={SolidBookOpen} class="icon text-3xl " />
						<p>Descobrir</p>
					</a>
				</li>
			</ul>
		</aside>
		<section class="w-full p-20">
			{@render children()}
		</section>
	</main>

	<!-- Novidades -->

	<NovidadesScreen title="Como o conhecimento envolve a cultura" src="https://www.youtube.com/embed/kIQt14laO80?si=4vvcWC23a2ucVUWz" description="Publicado em: 22/12/2024; Esse vídeo aborda conceitos sobre cultura e conhecimento buscando o viés da influência um do outro. Definição de Cultura; Contexto Cultural; Cultura e Aprendizagem;" />
	
	<!-- Novidades -->

	<div class="my-20 w-full flex flex-col items-center justify-center">
		<p class="mb-10 px-20 text-center">Continue navegando:</p>
		<a href="/descobrir" class="text-p text-xl bg-t p-5 rounded-xl mb-10 drop-shadow-[0_0_20px_orange]">Descobrir</a>
	</div>
	<footer class="p-10 pt-40 flex flex-wrap justify-center items-center w-full relative gap-10">
		<div class="wave w-full h-full bottom-0 absolute"></div>
		<ul class="underline flex text-xl flex-wrap text-p gap-5">
			<li >
				<a class="menuitem drop-shadow-[0_0_5px_white]" href="https://youtube.com/">Youtube</a>
			</li>
			<li>
				<a class="menuitem drop-shadow-[0_0_5px_white]" href="https://instagram.com/">Instagram</a>
			</li>
			<li>
				<a class="menuitem drop-shadow-[0_0_5px_white]" href="https://tiktok.com/">Tiktok</a>
			</li>
		</ul>
		<ul class="underline flex text-xl flex-wrap text-p gap-5">
			<li >
				<a class="menuitem drop-shadow-[0_0_5px_white]" href="/sobre/politica-de-privacidade">Política de provacidade</a>
			</li>
			<li>
				<a class="menuitem drop-shadow-[0_0_5px_white]" href="/sobre/duretrizes-de-conteudo">Diretrizes de conteúdo</a>
			</li>
		</ul>
		<b class="drop-shadow-[0_0_5px_white] text-center text-xl text-p" >
			&copy Saber o Mundo
		</b>

	</footer>
</div>

<style>


:global(.icon) {
		color:white;
}
:global ::selection {
  background: blue;
  color: orange;
}

.wave { 
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
  background-image: url("data:image/svg+xml;utf8,%3Csvg width=%221200%22 height=%22675%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3ClinearGradient id=%22a%22 gradientTransform=%22rotate(90)%22%3E%3Cstop offset=%225%25%22 stop-color=%22%23c7c0ff%22%2F%3E%3Cstop offset=%2295%25%22 stop-color=%22%23d5cfff%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id=%22b%22 gradientTransform=%22rotate(90)%22%3E%3Cstop offset=%225%25%22 stop-color=%22%238e81ff%22%2F%3E%3Cstop offset=%2295%25%22 stop-color=%22%23aaa0ff%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id=%22c%22 gradientTransform=%22rotate(90)%22%3E%3Cstop offset=%225%25%22 stop-color=%22%235642ff%22%2F%3E%3Cstop offset=%2295%25%22 stop-color=%22%238071ff%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient id=%22d%22 gradientTransform=%22rotate(90)%22%3E%3Cstop offset=%225%25%22 stop-color=%22%231d03ff%22%2F%3E%3Cstop offset=%2295%25%22 stop-color=%22%235542ff%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Cpath fill=%22%23fff%22 d=%22M0 0h1200v675H0z%22%2F%3E%3Cpath d=%22M0 135c76.895 12.067 153.79 24.133 220 29 66.21 4.867 121.736 2.533 186-11s137.267-38.267 207-46c69.733-7.733 136.197 1.533 201 8 64.803 6.467 127.944 10.133 192 13 64.056 2.867 129.028 4.933 234 7l-40 540H0Z%22 fill=%22url(%23a)%22%2F%3E%3Cpath d=%22M0 270c61.874-1.544 123.749-3.087 190 5s136.88 25.805 204 24c67.12-1.805 130.733-23.133 203-39s153.187-26.272 223-17c69.813 9.272 128.518 38.22 190 46 61.482 7.78 125.741-5.61 230-19l-40 405H0Z%22 fill=%22url(%23b)%22%2F%3E%3Cpath d=%22M0 405c55.941 1.272 111.882 2.544 184 1s160.413-5.903 226-14c65.587-8.097 108.467-19.933 171-14s144.72 29.636 215 41 128.651 10.39 194 6c65.349-4.39 137.674-12.195 250-20l-40 270H0Z%22 fill=%22url(%23c)%22%2F%3E%3Cpath d=%22M0 540c69.354-13.6 138.708-27.2 202-30 63.292-2.8 120.523 5.2 186 14s139.2 18.4 207 16c67.8-2.4 129.677-16.8 192-11 62.323 5.8 125.092 31.8 194 37 68.908 5.2 143.954-10.4 259-26l-40 135H0Z%22 fill=%22url(%23d)%22%2F%3E%3C%2Fsvg%3E");
}


footer {
	backdrop-filter: blur(20px);
}

</style>