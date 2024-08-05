<template>
    <div class="px-4 py-4 lg:px-20 lg:py-20">
        <h1 class="font-bold text-2xl lg:text-3xl"> Resume 📄 </h1>
        <div class="hidden lg:block py-4 lg:py-8">
            <iframe :src="pdf" type="application/pdf" width="100%" height="1000px"/>
        </div>
        
        <p class="lg:hidden py-4 text-gray-500"> Your web browser doesn't have a PDF plugin 🥲.
        Instead you can click <a :href="pdf" class="hover:underline"> 📌 here  </a> to download the resume. </p>
        <img class="lg:hidden py-4" src="../assets/doge-smile.png" alt="doge"/>
        
    </div>
</template>

<script setup lang="ts">
    import pdf from '../assets/resume.pdf';
    useHead({
        title: 'Resume',
    });
</script>