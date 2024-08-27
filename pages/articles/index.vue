<template>
    <div class="px-4 py-4 lg:px-20 lg:py-20">
        <h1 class="font-bold text-2xl lg:text-3xl"> Articles </h1>
        <p class="font-normal lg:text-xl py-4 lg:py-8 text-gray-500"> Welcome to my cryptoverse, get ready to dive into the exciting realm of digital money, where I break down complex topics like blockchain and cryptocurrencies into simple, easy-to-understand pieces. Join me as we explore the latest trends, learn how this technology works, and discover how it's changing the way we think about money and the future of online transactions.</p>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div v-for="article in articles" :key="article.slug" class="py-2 lg:py-4">
                <div class = "lg:p-8 p-4 border border-gray-200 rounded-t-xl flex items-center justify-center">
                    <img class="border border-slate-200 rounded-xl" :src="article.image" alt="article-poster"/>
                </div>
                <div class="border border-gray-200 rounded-b-xl p-4 lg:p-10 lg:h-80 overflow-y-auto">
                    <NuxtLink :to="`/articles/${article.slug}`" class="flex items-center">
                        <h1 class="font-bold lg:text-3xl hover:underline hover:opacity-70"> {{ article.title }} </h1>
                    </NuxtLink>
                    <p class="font-normal text-xs lg:text-base text-gray-500 py-4 break-words"> {{ article.description }} </p>
                    <div v-for="(type, index) in article.type" :key="index" class="inline-block">
                        <span class="bg-blue-100 text-blue-500 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"> {{ type }} </span>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script setup>

const { data: articles } = await useAsyncData('home', () => queryContent('/articles').find());

</script>
