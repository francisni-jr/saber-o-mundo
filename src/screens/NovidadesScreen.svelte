<script>
    let props = $props();
</script>

<div id="novidades">
    <section class="z-[400] w-full justify-center flex flex-col p-20">    
        <h3 class="title text-3xl font-title text-center">{props.title}</h3>
        <div class="content flex w-full h-auto justify-center items-center mt-20">
            <iframe src="{props.src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="bg-t rounded-xl aspect-video border drop-shadow-[0_20px_20px_ orange]"></iframe>
        </div>
        <p class="content text-xl text-justify mt-10 p-10" >{props.description}</p>
    </section>
    
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