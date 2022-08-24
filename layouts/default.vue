<template>
	<div>
		<slot />
	</div>
</template>

<style>
body,
.van-nav-bar {
	background-color: #261d27;
}
.van-nav-bar::after {
	border: none
}
.van-cell-group {
	margin-top: 16px;
	margin-bottom: 16px;
}
.van-nav-bar__title {
	color: #fff;
}
</style>
