<template>
    <div>
      <div class="px-16 py-4">
        <ul class="flex">
          <li :class="{'bg-gray-200 px-4 py-2 rounded-md text-left': currentPage === 'articles','hover:bg-gray-200 px-4 py-2 rounded-md text-left': currentPage !== 'articles'}" @click="changePage('articles'), fetchMetadata()"> Articles </li>
          <li :class="{'bg-gray-200 px-4 py-2 rounded-md text-left': currentPage === 'threads','hover:bg-gray-200 px-4 py-2 rounded-md text-left': currentPage !== 'threads'}" @click="changePage('threads')"> Twitter Threads </li>
          <li :class="{'bg-gray-200 px-4 py-2 rounded-md text-left': currentPage === 'books','hover:bg-gray-200 px-4 py-2 rounded-md text-left': currentPage !== 'books'}" @click="changePage('books')"> Books </li>
          <li :class="{'bg-gray-200 px-4 py-2 rounded-md text-left': currentPage === 'videos','hover:bg-gray-200 px-4 py-2 rounded-md text-left': currentPage !== 'videos'}" @click="changePage('videos')"> Youtube Videos </li>
        </ul>
      </div>
  
      <!-- Display different content based on the selected page -->

      <div v-if="currentPage === 'articles'">
        <div class="px-16 py-4">
            <div class="w-3/5 h-30 border border-gray-300 rounded-xl flex">
                <div class="w-1/4 flex items-center justify-center">
                    <img :src="data.images" alt="image" class="rounded-tl-xl rounded-bl-xl">
                </div>
                <div class="w-3/4 px-4">
                    <p class="font-bold text-gray-500 pt-2 pb-4"> {{data.title}}</p>
                    <a class="hover:underline" :href="data.url"> {{data.url}} </a>
                </div>
            </div>
        </div>
      </div>
      <div v-if="currentPage === 'threads'">
        <div class="px-16 py-4">
            <div class="w-3/5 h-30 border border-gray-300 rounded-xl flex">
                <div class="w-1/4 flex items-center justify-center">
                    <img :src="data.images" alt="image" class="rounded-tl-xl rounded-bl-xl">
                </div>
                <div class="w-3/4 px-4">
                    <p class="font-bold text-gray-500 pt-2 pb-4"> {{data.title}}</p>
                    <a class="hover:underline" :href="data.url"> {{data.url}} </a>
                </div>
            </div>
        </div>
      </div>
      <div v-if="currentPage === 'books'">
        <div class="px-16 py-4">
            <div class="w-3/5 h-30 border border-gray-300 rounded-xl flex">
                <div class="w-1/4 flex items-center justify-center">
                    <img :src="data.images" alt="image" class="rounded-tl-xl rounded-bl-xl">
                </div>
                <div class="w-3/4 px-4">
                    <p class="font-bold text-gray-500 pt-2 pb-4"> {{data.title}}</p>
                    <a class="hover:underline" :href="data.url"> {{data.url}} </a>
                </div>
            </div>
        </div>
      </div>
      <div v-if="currentPage === 'videos'">
        <div class="px-16 py-4">
            <div class="w-3/5 h-30 border border-gray-300 rounded-xl flex">
                <div class="w-1/4 flex items-center justify-center">
                    <img :src="data.images" alt="image" class="rounded-tl-xl rounded-bl-xl">
                </div>
                <div class="w-3/4 px-4">
                    <p class="font-bold text-gray-500 pt-2 pb-4"> {{data.title}}</p>
                    <a class="hover:underline" :href="data.url"> {{data.url}} </a>
                </div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
export default {
  data() {
    return {
      currentPage: 'articles', // Default selected page
      data: [],
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    async fetchMetadata() {
      try {
        const url1 = 'https://twitter.com/WatcherGuru/status/1715071895261827128';
        const response = await fetch(`https://jsonlink.io/api/extract?url=${url1}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const fetchedData = await response.json();
        this.data.url = url1;
        this.data.images = fetchedData.images || 'Image Not Available';
        this.data.title = fetchedData.title || 'Title Not Available';
        this.data.description = fetchedData.description || 'Description Not Available';
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
  