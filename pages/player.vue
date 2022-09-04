<template>
	<div class="player">
		<van-nav-bar left-arrow @click-left="useRouter().push('/')" />

		<div class="music">
			<van-image fit="cover" class="avatar" :src="song.cover" />
			<div class="major">
				<h1>{{ song.title }}</h1>
				<span>{{ song.author }}</span>
			</div>
			<van-progress :percentage="50" />
			<div class="control">
				<van-button class="text" icon="replay"> </van-button>
				<van-button class="text" icon="arrow-left"> </van-button>
				<van-button
					class="play"
					icon="play"
					type="primary"
					@click="play()"
				/>
				<van-button class="text" icon="arrow"> </van-button>
				<van-button
					class="text"
					icon="share-o"
					@click="showShare = true"
				>
				</van-button>
			</div>
		</div>

		<van-share-sheet
			v-model:show="showShare"
			title="立即分享给好友"
			:options="options"
			@select="onSelect"
		/>

		<van-cell-group title="故事简介" inset>
			<div class="des" v-html="song.des"></div>
		</van-cell-group>
	</div>
</template>

<script setup>
const song = {
    title: "The Crave",
    cover: "http://p2.music.126.net/5noTd4FquUnhtz4aYQ5KaA==/109951165959985549.jpg",
    url: "https://music.163.com/#/song?id=5027084",
    author: "Ennio Morricone - The Legend of 1900 (Original Motion Picture Soundtrack)",
    des: `《小王子》说：“真正珍贵的东西肉眼是看不见的。”
《海上钢琴师》说：“我不下船，不是因为我所看见的东西，而是因为我所看不见的东西。”
《小王子》告诉我们： 吾心即宇宙。 敢于对无形的未知用灵魂去参悟。
《海上钢琴师》告诉我们： 知足为常乐。
懂得对无形的未知无力时就止步。`
}
const showShare = ref(false);
const options = [
	{ name: "微信", icon: "wechat" },
	{ name: "微博", icon: "weibo" },
	{ name: "复制链接", icon: "link" },
	{ name: "分享海报", icon: "poster" },
	{ name: "二维码", icon: "qrcode" },
];

const play = () => {
    window.location = song.url;
}

const onSelect = (option) => {
	Toast(option.name);
	showShare.value = false;
};
</script>

<style scoped>
.player {
	padding: 0 16px;
}
.music {
	box-sizing: border-box;
	padding: 20px;
	margin-bottom: 42px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #fff;
	text-align: center;
}
.avatar {
	border-radius: 20px;
	overflow: hidden;
}
.music > * {
	margin-top: 32px;
	width: 100%;
}
h1 {
	margin: 0;
}
.des {
	padding: 16px;
	background: #100c11;
	color: #fff;
	word-break: break-all;
}
.control {
	margin-top: 64px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.play {
	border-radius: 50%;
	height: 56px;
	width: 56px;
}
.text {
	background: transparent;
	color: #fff;
	border: none;
}
</style>
