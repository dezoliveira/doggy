<template>
    <div>
        <button class="button">{{ text }}</button>
    </div>
</template>
<script setup>
import { ref, onUpdated } from 'vue';
const props = defineProps(['text'])
const text = ref('')

text.value = props.text

onUpdated(() => {
    text.value = props.text
})
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