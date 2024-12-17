<script>
    import Icon from "heroicons-for-svelte";
    import { GlobeAlt, Users as SolidUsers } from "heroicons-for-svelte/icons/solid";
    
</script>

<div class="text-center">
    <h1 class="title text-6xl font-title mb-10">Recursos</h1>
    <ul class="content flex flex-wrap gap-10 justify-center aitems-center">
        <li class="bg-t rounded-xl p-5">
            <a href="/descobrir/redes" class="flex justify-center items-center text-p gap-5 text-xl">
                <Icon icon={SolidUsers} class="icon text-3xl " />
                <p>Redes Sociais</p>
            </a>
        </li>
        <li class="bg-t rounded-xl p-5">
            <a href="/descobrir/web" class="flex justify-center items-center text-p gap-5 text-xl">
                <Icon icon={GlobeAlt} class="icon text-3xl " />
                <p>Website</p>
            </a>
        </li>
    </ul>
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

