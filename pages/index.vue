<template>
	<div>
		<van-nav-bar title="Supre Fans">
			<template #left>
				<van-icon name="search" size="18" />
			</template>
			<template #right>
				<van-icon @click="goTo('/user')" name="user-o" size="18" />
			</template>
		</van-nav-bar>

		<div class="center">
			<h2 style="margin-top: 48px;">The treasure belongs to us.</h2>
		</div>

		<van-cell-group @click="goTo('/player')" inset>
			<van-swipe :autoplay="3000" lazy-render style="font-size: 0">
				<van-swipe-item v-for="image in images" :key="image">
					<van-image fit="contain" :src="image" />
				</van-swipe-item>
			</van-swipe>
		</van-cell-group>

		<div class="center count">
			<h2>Season countdown</h2>
			<van-count-down :time="time">
				<template #default="timeData">
					<span class="block">{{ timeData.hours }}</span>
					<span class="colon">:</span>
					<span class="block">{{ timeData.minutes }}</span>
					<span class="colon">:</span>
					<span class="block">{{ timeData.seconds }}</span>
				</template>
			</van-count-down>
		</div>
		<div class="songs">
			<van-cell-group title="Music">
				<div class="tags">
					<van-tag
					 	class="tag"
						v-for="tag in tags"
						:key="tag"
						type="primary"
						size="medium"
						>#{{ tag }}</van-tag
					>
				</div>

				<van-grid :column-num="3" :gutter="12">
					<van-grid-item v-for="image in images" :key="image">
						<img :src="image" />
					</van-grid-item>
				</van-grid>
			</van-cell-group>
		</div>
	</div>
</template>
<script setup>
const images = [
	"http://p2.music.126.net/5noTd4FquUnhtz4aYQ5KaA==/109951165959985549.jpg",
	"http://p2.music.126.net/QCchd5jB0pZv7WirzbeYow==/109951167812655288.jpg",
	"http://p1.music.126.net/Tyt081Wmy3C10UZ88Pda-Q==/18575149441122813.jpg",
	"http://p2.music.126.net/GLmuPSdXsyvwO_RfbaVeYQ==/109951164512005176.jpg",
	"http://p2.music.126.net/2RYI9redJfjoD7j1VBtwbQ==/109951164971949483.jpg",
	"http://p2.music.126.net/zUmHQmaRmxKqj97MXoP_8A==/109951163051106498.jpg"
];
const tags = ["one", "two", "three", "four", "five", "six"];
const goTo = (path) => {
	useRouter().push(path);
};

const time = ref(30 * 60 * 60 * 1000);
</script>

<style scoped>
img {
	width: 100%;
	border-radius: 6px;
}
.home {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.colon {
	display: inline-block;
	margin: 0 4px;
	color: #fff;
	font-size: 24px;
}
.block {
	display: inline-block;
	width: 56px;
	line-height: 56px;
	border-radius: 6px;
	color: #fff;
	font-size: 24px;
	text-align: center;
	background-color: #090f1a;
}
.center {
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
}
.count {
	padding: 24px;
	color: #fff;
}
h2 {
	margin-top: 0;
	color: #fff;
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
.tags {
	padding: 12px;
	padding-top: 0;
	padding-bottom: 24px;
}
.tags .tag {
	margin-right: 12px;
}
</style>
