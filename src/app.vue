<template>
    <nav class="bg-gray-800 text-white fixed top-0 w-full z-10">
        <div class="flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14">
            <router-link to="/">
                <span class="text-2xl font-bold text-white">Online Store</span>
            </router-link>

            <div class="ms-auto">
                <router-link to="/" class="mx-3">Home</router-link>
                <router-link to="/about" class="mx-3">About</router-link>
            </div>
        </div>
    </nav>
    <main>
        <router-view />
        
    </main>
</template>
