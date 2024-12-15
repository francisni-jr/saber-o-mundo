<script>
    let props = $props();
</script>

<div id="novidades">
    <section class="w-full justify-center flex flex-col p-20">    
        <h3 class="title text-3xl font-title text-center">{props.title}</h3>
        <div class="content flex w-full h-auto justify-center items-center mt-10">
            <iframe src="{props.src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="bg-t rounded-xl aspect-auto hover:scale-[1.5] border"></iframe>
        </div>
        <p class="content text-xl text-center p-10" >{props.description}</p>
    </section>
    
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