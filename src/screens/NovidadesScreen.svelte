<script>
    let props = $props();
</script>

<div id="novidades">
    <section class="w-full justify-center flex flex-col p-20">    
        <h3 class="text-3xl font-title text-center">{props.title}</h3>
        <div class="flex w-full h-auto justify-center items-center mt-10">
            <iframe src="{props.src}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="bg-t rounded-xl aspect-auto hover:scale-[1.1]"></iframe>
        </div>
        <p class="text-xl text-center p-10" >{props.description}</p>
    </section>
    
</div>