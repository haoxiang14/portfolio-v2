<template>
  <div class="px-4 py-4 lg:px-20 lg:py-20">
    <img class="w-full object-cover h-full" :src="article.image" alt="article-poster"/>
    <article class="prose lg:prose lg:max-w-none">
        <div class="flex flex-col items-center justify-center">
          <h1 class="font-bold text-2xl lg:text-5xl pt-16"> {{ article.title }} </h1>
          <div class="flex gap-4 text-gray-500">
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
              <p class="px-2"> {{ article.date }} </p>
            </div>
            <div class="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hourglass"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>
              <p class="px-2"> {{ article.readtime }} </p>
            </div>  
          </div>
        </div>
        
        <ContentRendererMarkdown :value="article" />
    </article>
  </div>
</template>

<script setup>
  
  const route = useRoute()
  const { data: article } = await useAsyncData('home', () => queryContent(`/articles/${route.params.slug}`).findOne())

</script>