<script>
    import { SvelteURL } from "svelte/reactivity";

</script>
<div class="text-center">
    <h1 class="title text-6xl font-title mb-10">Como colaborar?</h1>

    <ul class="content flex flex-col gap-5">
        <li class="">1. Entre no <a target="_blank" href="https://whatsapp.com/channel/0029Vay4GvJ6BIEpMiwdD43i" class="text-t">canal do whatsapp</a> <br> <div class="flex w-full h-auto justify-center items-center my-10">
            <img src="https://res.cloudinary.com/dncs4zash/image/upload/v1733154979/pexels-anton-8100-46924_p5hxug.jpg" class=" w-[40%] rounded-xl aspect-auto hover:cursor-cell hover:scale-[1.5] border" />
        </div></li>
        <li class="">2. Na descrição do canal clique no link para entrar na comunidade <br> <div class="flex w-full h-auto justify-center items-center my-10">
            <img src="https://res.cloudinary.com/dncs4zash/image/upload/v1733807515/Design_sem_nome_4_sdhymy.png" class=" w-[40%] rounded-xl  aspect-auto hover:cursor-cell hover:scale-[1.5] border"/>
        </div>
        </li>
        <li class="">4. Após ser aprovado no grupo envie sua idéia de colaboração, o "@" da sua rede social preferida e em seguida peça para entrar no grupo "vídeos"</li>
        <li class="">5. Caso gostarmos da sua idéia você poderá nos ajudar na elaboração da mesma</li>
        <li class="">6. Após colaborar, o removeremos do grupo vídeos e faremos o mesmo processo novamente.</li>
    </ul>
    <h2 class="title text-6xl font-title mt-20">Vantagens</h2>
    <ul class="content flex flex-col gap-5 mt-10 font-bold">
        <li class="">
            Menção em redes sociais
        </li>
        <li class="">
            Reconhecimento mútuo
        </li>
        <li class="">
            Processo simples e bem elaborado
        </li>
    </ul>
</div>   

<style>


.title {
    animation: scaledown 4s ease-out;
    animation-iteration-count: 1;
}
.content {
    animation: blur 4s ease-in-out;
    animation-iteration-count: 1;
}

@keyframes scaledown {
    from {
        transform: scale(1.5);
    }
    to {
        transform: scale(1);
    }
}

@keyframes blur {
    from {
        filter: blur(40px);
    }
    to {
        filter: blur(0px);
    }
}

</style>