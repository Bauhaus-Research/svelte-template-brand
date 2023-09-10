<script>

	import { brandName } from "$lib/stores/brandStore";

</script>

<section class="flex flex-col h-screen">
    <section class="bg-neutral-900 px-20 flex flex-col justify-center h-full">
        <div class="flex flex-row justify-center">
            <div>
                <h1 class="text-white font-bold text-3xl mb-4">
                    {brandName}
                </h1>
                <p class="text-white my-6 font-light md:text-xl text-lg">
                    See our blog page for our latest thoughts
                </p>
                <a
                    href="/newsroom"
                    class="rounded-full duration-300 transition-all hover:bg-blue-800 bg-black text-white font-bold text-center py-3 px-6"
                >
                    Visit our Blog
                </a>
            </div>
        </div>
    </section>
</section>