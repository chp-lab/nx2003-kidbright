const dirIcon = Vue.prototype.$global.board.board_info.dir;
module.exports = {
	blocks : [
		{
			name: 'LED Blink',
			icon: `file:///${dirIcon}/static/icon_menu.jpg`,
			index: 0,
			color: "230",
			blocks:['led_blink']
		}
	]
};