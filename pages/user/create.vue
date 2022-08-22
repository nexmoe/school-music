<template>
	<div>
		<Header/>
		<van-form>
			<van-cell-group inset>
				<van-field label="封面">
					<template #input>
						<van-uploader v-model="value" />
					</template>
				</van-field>
			</van-cell-group>
			<van-cell-group inset>
				<van-field v-model="title" label="标题" />
				<van-field label="副标题" />
				<van-field label="作者" />
			</van-cell-group>
			<van-cell-group inset>
				<van-field
					v-model="result"
					is-link
					readonly
					name="calendar"
					label="日历"
					placeholder="点击选择日期"
					@click="showCalendar = true"
				/>
				<van-calendar
					v-model:show="showCalendar"
					@confirm="onConfirm"
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
const value = ref([
	{ url: "https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg" },
]);
const title = ref("测试标题");
const result = ref("");
const showCalendar = ref(false);
const onConfirm = (date) => {
	result.value = `${date.getMonth() + 1}/${date.getDate()}`;
	showCalendar.value = false;
};
</script>
