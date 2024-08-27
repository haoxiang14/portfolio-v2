<template>
    <div class="px-4 py-4 lg:px-20 lg:py-20">
        <h1 class="font-bold text-2xl lg:text-3xl"> Projects 📂 </h1>
        <p class="font-normal lg:text-xl py-4 lg:py-8 text-gray-500"> Welcome to my digital sanctuary, where I merge programming, creativity, and research to explore the exciting realms of web development, emerging technologies, and the future of digital innovation. </p>
    
        <div v-for="project in projects" :key="project.slug" class="py-4 lg:py-8 flex grid grid-cols-1 lg:grid-cols-5">
            <div class="lg:col-span-3 lg:p-8 p-4 border border-gray-200 rounded-t-xl lg:rounded-t-none lg:rounded-tl-xl lg:rounded-bl-xl">
                <img :src="project.image" class="border border-slate-200 rounded-xl"  alt="project-poster"/>
            </div>
            <div class="lg:col-span-2 border border-gray-200 rounded-b-xl lg:rounded-b-none lg:rounded-tr-xl lg:rounded-br-xl p-4 lg:p-10">
                <a :href="project.url" target="_blank" class="flex items-center hover:underline hover:opacity-70">
                    <h1 class="font-bold lg:text-3xl"> {{ project.title }} </h1>
                </a>
                <p class="font-normal text-xs lg:text-base text-gray-500 py-4 break-words"> {{project.description}} </p>
                
                <p class="pb-4 font-medium text-xs text-gray-700"> {{ project.footer }} </p>

                <span class="bg-blue-100 text-blue-500 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full"> {{ project.type }} </span>
            </div>
        </div>
    </div>
</template>

<script setup>
//query all projects from content directory

const { data: projects } = await useAsyncData('home', () => queryContent('/projects').find());

useHead({
  title: 'Projects',
});

</script>
