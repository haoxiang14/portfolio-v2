<template>
    <div class="px-4 py-4 lg:px-20 lg:py-20">
        <h1 class="font-bold text-2xl lg:text-3xl"> Project 📂 </h1>
        <p class="font-normal lg:text-xl py-4 lg:py-8 text-gray-500"> Welcome to my digital sanctuary, where I merge programming, creativity, and research to explore the exciting realms of web development, emerging technologies, and the future of digital innovation. </p>
    
        <div v-for="project in projects" :key="project.slug" class="py-4 lg:py-8 flex grid grid-cols-1 lg:grid-cols-5">
            <img :src="project.image" class="lg:col-span-3 rounded-t-xl lg:rounded-t-none lg:rounded-tl-xl lg:rounded-bl-xl"  alt="project-poster"/>
            <div class="lg:col-span-2 border border-gray-200 rounded-b-xl lg:rounded-b-none lg:rounded-tr-xl lg:rounded-br-xl px-10 py-10">
                <a :href="project.url" target="_blank" class="font-bold text-xl flex items-center">
                    <h1 class="font-bold text-2xl lg:text-3xl"> {{ project.title }} </h1>
                    <svg class="w-6 h-6 mx-2" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
                </a>
                <p class="font-normal text-lg lg:text-xl text-gray-500 py-4 break-words"> {{project.description}} </p>
                <p class="font-normal text-base lg:text-lg text-gray-400"> {{ project.footer }} </p>
            </div>
        </div>
    </div>
</template>

<script setup>
//query all projects from content directory

const { data: projects } = await useAsyncData('home', () => queryContent('/projects').find());

useHead({
  title: 'Project',
});

</script>
