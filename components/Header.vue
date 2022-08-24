<template>
	<div>
		<van-nav-bar left-arrow @click-left="onClickLeft"> </van-nav-bar>
	</div>
</template>

<script setup>
const onClickLeft = () => useRouter().push("/");
</script>
