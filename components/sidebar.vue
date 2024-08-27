<template>
    <div class="hidden lg:block lg:min-h-screen font-medium px-4 lg:px-8 lg:py-20">
        <nav>
            <ul class="flex flex-col">
                <li v-for="(item, index) in items" :key="index" :class="['mb-2 hover:bg-gray-200 px-4 py-2 my-2 rounded-md', { 'bg-gray-200': selectedItem === index }]" @click="selectedItem = index">
                    <NuxtLink :to="item.path" class="flex items-center">
                        <div v-html="item.svg"></div>
                        <p class="px-4"> {{ item.name }} </p>
                    </NuxtLink>
                </li>
            </ul>
        </nav>  
    </div>
    <div class="lg:hidden fixed bottom-4 inset-x-4 z-50 bg-gray-300 shadow-md rounded-full">
        <nav class="flex justify-around items-center h-16">
            <ul class="flex gap-6 sm:gap-12 md:gap-24">
                <li v-for="(item, index) in items" :key="index" :class="['hover:bg-gray-200 px-2 py-2 rounded-full text-lg text-left', { 'bg-gray-200': selectedItem === index }]" @click="selectedItem = index">
                    <NuxtLink :to="item.path" class="flex items-center">
                        <div v-html="item.svg"></div>
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                selectedItem: null,
                items: [
                    { name: 'Home', path: '/', svg: '<svg style="min-width: 10px; min-height: 24px;" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' },
                    { name: 'Projects', path: '/projects', svg: '<svg style="min-width: 24px; min-height: 24px;" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>' },
                    { name: 'Articles', path: '/articles', svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-notebook-pen"><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"/><path d="M2 6h4"/><path d="M2 10h4"/><path d="M2 14h4"/><path d="M2 18h4"/><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"/></svg>' },
                    { name: 'Resume', path: '/resume', svg: '<svg style="min-width: 24px; min-height: 24px;" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>'},
                    { name: 'Contact', path: '/contact', svg: '<svg style="min-width: 24px; min-height: 24px;" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-user"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/></svg>' }
                ]
            } 
        },
        created() {
            this.setSelectedItem();
        },
        middleware: 'setSelectedItem',
        methods: {
            setSelectedItem() {
                this.selectedItem = this.items.findIndex(item => item.path === this.$route.path);
            }
        }
    }
</script>