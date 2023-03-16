<script setup>
defineProps({
    msg: {
        type: String,
        required: true,
    },
});
</script>
<template>
    <div class="greetings">
        <h1>Hello world</h1>
        <h3>
            you have succesfully created project with
        </h3>
    </div>
</template>

<style scoped>
.greetings {
    background-color: rgb(228, 197, 244);
    padding: 20px;
}

h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}
