<div class="loader fixed top-0 left-0 w-full h-full bg-p z-[40000000000] flex flex-col justify-center animate-pulse items-center">
        <p class="text-4xl animate-pulse font-title text-s " >AGUARDE...</p>
</div>




<style>

.loader {
    animation: out 2s ease-out forwards;
    animation-iteration-count: 1;
}


@keyframes out {
    0% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        opacity: 0;
        display: none;
    }
}


</style>