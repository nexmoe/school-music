<template>
	<div>
		<van-nav-bar left-arrow @click-left="useRouter().push('/')">
			<template #right>
				<van-icon name="paid" size="18" />
			</template>
		</van-nav-bar>

		<div class="user">
			<van-image
				round
				fit="cover"
				width="8rem"
				height="8rem"
				class="avatar"
				src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
			/>
			<div class="name">Nexmoe</div>
		</div>

		<div style="margin: 16px">
			<van-button
				round
				block
				type="primary"
				@click="goTo('/user/create')"
			>
				发布作品
			</van-button>
		</div>

		<div class="songs">
			<van-cell-group title="My Music">
				<van-grid :column-num="3" :gutter="12">
					<van-grid-item v-for="image in images" :key="image">
						<img :src="image" />
					</van-grid-item>
				</van-grid>
			</van-cell-group>
		</div>
		<van-cell-group inset>
			<van-cell title="设置" is-link />
			<van-cell title="关于" is-link />
		</van-cell-group>

		<van-cell-group inset>
			<van-cell title="注销登录" is-link @click="logout()" />
		</van-cell-group>
	</div>
</template>

<script setup>
onMounted(() => {
	const isLogin = localStorage.getItem("isLogin");

	if (isLogin !== "true") {
		useRouter().push("/user/login");
	}
});
const logout = () => {
	localStorage.setItem("isLogin", false);
	useRouter().push("/");
};
const goTo = (path) => {
	useRouter().push(path);
};
const images = [
	"http://p2.music.126.net/5noTd4FquUnhtz4aYQ5KaA==/109951165959985549.jpg",
	"http://p2.music.126.net/QCchd5jB0pZv7WirzbeYow==/109951167812655288.jpg",
	"http://p1.music.126.net/Tyt081Wmy3C10UZ88Pda-Q==/18575149441122813.jpg",
	"http://p2.music.126.net/GLmuPSdXsyvwO_RfbaVeYQ==/109951164512005176.jpg",
	"http://p2.music.126.net/2RYI9redJfjoD7j1VBtwbQ==/109951164971949483.jpg",
	"http://p2.music.126.net/zUmHQmaRmxKqj97MXoP_8A==/109951163051106498.jpg",
];
</script>

<style scoped>
img {
	width: 100%;
	border-radius: 6px;
}
.user {
	margin-top: 32px;
	margin-bottom: 42px;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #fff;
}
.avatar {
	border: 5px solid #fff;
}
.user > * {
	margin-top: 12px;
}
.songs {
	padding: 24px 6px;
}
.songs :deep(.van-grid-item__content) {
	background-color: transparent;
	padding: 0;
	border: none;
	overflow: hidden;
}
.songs :deep(.van-cell-group) {
	background-color: transparent;
}
</style>
