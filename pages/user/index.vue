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

		<van-cell-group inset title="我的作品">
			<van-grid :border="false" :column-num="2">
				<van-grid-item>
					<van-image
						src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg"
					/>
				</van-grid-item>
				<van-grid-item>
					<van-image
						src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg"
					/>
				</van-grid-item>
				<van-grid-item>
					<van-image
						src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg"
					/>
				</van-grid-item>
			</van-grid>
		</van-cell-group>

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
</script>

<style scoped>
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
</style>
