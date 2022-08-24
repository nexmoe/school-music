<template>
	<div>
		<Header />

		<van-form @submit="onSubmit" class="form">
			<h1>登录</h1>
			<van-cell-group style="margin: 16px" inset>
				<van-field
					v-model="email"
					name="邮箱"
					label="邮箱"
					placeholder="邮箱"
					:rules="[{ required: true, message: '请填写邮箱' }]"
				/>
				<van-field
					v-model="password"
					type="password"
					name="密码"
					label="密码"
					placeholder="密码"
					:rules="[{ required: true, message: '请填写密码' }]"
				/>
			</van-cell-group>
			<div style="margin: 16px">
				<van-button round block type="primary" native-type="submit">
					立即登录
				</van-button>
			</div>
			<div style="margin: 16px">
				<van-button @click="useRouter().push('/user/register')" round block> 注册 </van-button>
			</div>
		</van-form>
	</div>
</template>

<script setup>
const email = ref("test@mail.com");
const password = ref("test");
const onSubmit = (values) => {
	localStorage.setItem("isLogin", "true");
	useRouter().push("/user");
};
</script>

<style scoped>
h1 {
	text-align: center;
	margin-bottom: 32px;
	color: #fff;
}
.form {
	margin-top: 50vh;
	transform: translateY(-70%);
}
</style>
