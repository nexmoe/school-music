<template>
	<van-nav-bar left-arrow @click-left="onClickLeft"> </van-nav-bar>
</template>

<script setup>
const onClickLeft = () => useRouter().push("/");
</script>
