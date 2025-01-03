<script>
    import { SvelteURL } from "svelte/reactivity";

</script>
<div class="text-justify">
    <h1 class="title text-6xl font-title mb-10 text-center">Colaboradores</h1>
    <ul class="content flex flex-col gap-5 justify-around">
        <li class="p-5">
            <ul class="flex flex-col gap-5 justify-center items-center p-5 py-10 rounded-xl bg-s">
                <li class="text-xl flex flex-wrap gap-5">
                    <img src="https://res.cloudinary.com/dncs4zash/image/upload/v1735858020/francisni_jzi37e.jpg" alt="" class=" w-20 rounded-full drop-shadow-[0_0_20px_white] border border-q border-[6px]">
                    <img src="https://res.cloudinary.com/dncs4zash/image/upload/v1735857941/selodesenvolvedor_atyj2q.jpg" alt="" class=" w-20 rounded-full drop-shadow-[0_0_20px_white]">
                    <img src="https://res.cloudinary.com/dncs4zash/image/upload/v1735857937/selovip_wxbe8v.jpg" alt="" class=" w-20 rounded-full drop-shadow-[0_0_20px_white]">
                </li>
                <li class="text-xl text-q mt-5">
                    Francisní Gomes
                </li>
                <li class="text-xl text-q">
                    +2 colaborações nos últimos 365 dias
                </li>
            </ul>
        </li>
        <li class="p-5">
            <ul class="flex flex-col gap-5 justify-center items-center p-5 py-10 rounded-xl bg-s">
                <li class="text-xl flex flex-wrap gap-5">
                    <img src="https://res.cloudinary.com/dncs4zash/image/upload/v1735858001/felype_wftcjn.jpg" alt="" class=" w-20 rounded-full drop-shadow-[0_0_20px_white] border border-q border-[6px]">
                    <img src="https://res.cloudinary.com/dncs4zash/image/upload/v1735857941/selodesenvolvedor_atyj2q.jpg" alt="" class=" w-20 rounded-full drop-shadow-[0_0_20px_white]">
                    <img src="https://res.cloudinary.com/dncs4zash/image/upload/v1735857937/selovip_wxbe8v.jpg" alt="" class=" w-20 rounded-full drop-shadow-[0_0_20px_white]">
                </li>
                <li class="text-xl text-q mt-5">
                    Felype Emanuel
                </li>
                <li class="text-xl text-q">
                    +2 colaborações nos últimos 365 dias
                </li>
            </ul>
        </li>
        <li class="p-5">
            <ul class="flex flex-col gap-5 justify-center items-center p-5 py-10 rounded-xl bg-s">
                <li class="text-xl flex flex-wrap gap-5">
                    <img src="https://res.cloudinary.com/dncs4zash/image/upload/v1735858026/yury_whhzcg.jpg" alt="" class=" w-20 rounded-full drop-shadow-[0_0_20px_white] border border-q border-[6px]">
                    <img src="https://res.cloudinary.com/dncs4zash/image/upload/v1735857937/selovip_wxbe8v.jpg" alt="" class=" w-20 rounded-full drop-shadow-[0_0_20px_white]">
                </li>
                <li class="text-xl text-q mt-5">
                    Yury Pereira
                </li>
                <li class="text-xl text-q">
                    +1 colaboração nos últimos 365 dias
                </li>
            </ul>
        </li>
    </ul>
    <div class="content">
        <h2 class="title text-6xl font-title mb-10 text-center mt-20">Selos</h2>
    <p>Cada selo representa um significado em si, a quantidade de selos pode fazer alguém tirar vantagem no pódio ou ter acesso especial a recursos específicos.</p>
    <img src="https://res.cloudinary.com/dncs4zash/image/upload/v1735857937/selovip_wxbe8v.jpg" alt="" class="mx-auto mt-20 mb-10 w-20 rounded-full drop-shadow-[0_0_20px_white]">
    <p>O selo acima é o selo V. I. P. , ele proporciona acesso a recursos específicos. Dentre esses estão cota de parte da renda do projeto, se houver.</p>
    <img src="https://res.cloudinary.com/dncs4zash/image/upload/v1735857941/selodesenvolvedor_atyj2q.jpg" alt="" class="mx-auto mt-20 mb-10 w-20 rounded-full drop-shadow-[0_0_20px_white]">
    <p class="content mb-20" >O selo acima é o selo Desenvolvedor. Ele é o selo disponível apenas para os criadores iniciais do projeto. Eles administram e ordenam o projeto desde sua criação, também são responsáveis pela manutenção desse ranking.</p>
    </div>
    <div class="content text-center">
        <a href="/descobrir/colaborar/scsm" class="text-center text-t">Veja como funciona o SSCM ( Sistema de Colaboradores do Saber o Mundo)</a>
    </div>
</div>   

<style>


.title {
    animation: scaledown 1s ease-out;
    animation-iteration-count: 1;
}

.content {
    animation: blur 1s ease-out;
    animation-iteration-count: 1;
}

@keyframes scaledown {
    from {
        transform: scale(1.2);
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