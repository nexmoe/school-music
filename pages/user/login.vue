<template>
	<div>
		<van-form @submit="onSubmit">
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
					提交
				</van-button>
			</div>
		</van-form>
	</div>
</template>

<script setup>
const email = ref("");
const password = ref("");
const onSubmit = (values) => {
	console.log("submit", values);
};
</script>
