<h1 class="title font-title text-6xl mb-10">Hhmmm, parece que temos problemas</h1>


<p class="content text-4xl">Talvez essa página não exista ou ainda está em manutenção, que tal voltar para a <a href="/" class="text-t">página inicial</a> e navegar em algum conteúdo existente?</p>

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