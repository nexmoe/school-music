<template>
	<div>
		<van-nav-bar title="Enjoy Music">
			<template #left>
				<van-icon name="search" size="18" />
			</template>
			<template #right>
				<van-icon @click="goTo('/user')" name="user-o" size="18" />
			</template>
		</van-nav-bar>

		<van-swipe :autoplay="3000" lazy-render>
			<van-swipe-item v-for="image in images" :key="image">
				<img :src="image" />
			</van-swipe-item>
		</van-swipe>
		<van-grid :column-num="3">
			<van-grid-item
				v-for="value in 6"
				:key="value"
				icon="photo-o"
				text="文字"
			/>
		</van-grid>
	</div>
</template>
<script setup>
const images = [
	"https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
	"https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
];
const goTo = (path) => {
	useRouter().push(path);
};
</script>

<style scoped>
img {
	width: 100%;
}
</style>
