<template>
	<van-tabbar v-model="active" route>
		<van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
		<van-tabbar-item icon="friends-o">标签</van-tabbar-item>
		<van-tabbar-item icon="user-o" replace to="/user">用户</van-tabbar-item>
	</van-tabbar>
</template>

<script setup>
const active = ref(0);
</script>
