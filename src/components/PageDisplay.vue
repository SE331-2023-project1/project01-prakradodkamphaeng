<template>
    <RouterLink :to="{ name: 'home', query: { page } }"
        class="w-8 h-8 hover:bg-[#ffffff33] flex items-center justify-center transition-colors duration-300">
        <p>{{ page }}</p>
    </RouterLink>
</template>

<script setup lang="ts">
defineProps({
    page: {
        type: Number,
        required: true
    }
})
</script>
