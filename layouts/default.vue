<template>
	<div class="layout-default">
		<Header />
			<slot />
		<TabBar />
	</div>
</template>

<style>
body {
	background-color: #f7f8fa;
}
.van-cell-group {
	margin-top: 16px;
	margin-bottom: 16px;
}
</style>
