<template>
	<div>
		<van-cell-group inset>
			<van-cell title="单元格" value="内容" />
			<van-cell title="单元格" value="内容" label="描述信息" />
		</van-cell-group>

		<van-cell-group inset>
			<van-form @submit="onSubmit">
				<van-cell-group inset>
					<van-field
						v-model="username"
						name="用户名"
						label="用户名"
						placeholder="用户名"
						:rules="[{ required: true, message: '请填写用户名' }]"
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
		</van-cell-group>
	</div>
</template>

<script setup>
const username = ref("");
const password = ref("");
const onSubmit = (values) => {
	console.log("submit", values);
};
</script>
