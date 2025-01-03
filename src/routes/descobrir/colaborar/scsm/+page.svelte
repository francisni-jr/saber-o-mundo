<script>
    import { SvelteURL } from "svelte/reactivity";

</script>
<div class="text-justify">
    <h1 class="title text-6xl font-title mb-20 text-center">SCSI ( Sistema de Colaboradores do Saber o Mundo)</h1>
    <h3 class="title text-5xl text-center font-title">Como funciona?</h3>
    <div class="content mt-10">
        <p >Em uma página específica do site estará todas as informações em um ranking de colaboradores com um selo V. I. P especial para os que atendem aos requisitos V. I. P. Essa página é monitorada pelos 2 desenvolvedores principais do projeto e ninguém mais têm acesso para modifica-la além deles, ao colaborar, +1 ponto será adicionado nessa página. A distribuição de renda se baseia nesse ranking, sendo 50% dela para os 2 desenvolvedores principais e os outros 50% divididos matematicamente através do calculo de colaborações totalizadas. Se um indivíduo x tiver 10 pontos e o indivíduo y 12 pontos, 100% da renda deles equivale a 22 pontos, como um têm 2 a mais, ganhará aproximadamente 10% a mais de renda. O pagamento é efetuado pelos desenvolvedores pessoalmente sem necessidade de intermediários.</p>
        <ul class="flex flex-col text-center gap-5 mt-10">
            <li class="">1. A pessoa escolhe como quer colaborar, atendendo os requisitos necessários para isso.</li>
            <li>2. A pessoa segue o passo a passo de como colaborar disponível no site</li>
            <li>3. Após colaborar marcaremos a rede social da pessoa nas descrições ou legendas onde a colaboração for publicada.</li>
            <li>4. Após 100 colaborações, se feitas no prazo de 365 dias, a pessoa se tornará um colaborador V. I. P</li>
            <li>5. Depois de se tornar um V. I. P. a pessoa irá ter acesso a um grupo especial no whatsapp onde terá acesso aos recursos, para manter-se um V. I. P. é necessário que continue colaborando na mesma intensidade de 100 por 365 e assim se manter no pódio do ranking de colaboradores.</li>
        </ul>
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