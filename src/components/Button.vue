<template>
    <div>
        <button class="button" @click="getDog">New Dog</button>
    </div>
</template>
<script setup>

</script>
<style scoped>
    .button {
        padding: 8px 15px;
        background-color: #1e1b4b;
        color: #fff;
        border: 0;
    }

    .button:hover {
        opacity: .9;
        cursor: pointer;
    }
</style>