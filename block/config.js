const dirIcon = Vue.prototype.$global.board.board_info.dir;
let spi_sdcard = require("./menu/config.group.spi_sdcard");

module.exports = {
	blocks : [
		{
			name: 'LED Blink',
			icon: `file:///${dirIcon}/static/icons/led-icon.png`,
			index: 0,
			color: "230",
			blocks:['led_blink']
		},
		{
			name: 'Button',
			icon: `file:///${dirIcon}/static/icons/button1.png`,
			index: 1,
			color: "230",
			blocks:['button']
		},
		{
			name: 'Thermistor',
			icon: `file:///${dirIcon}/static/icons/icon_sensor.png`,
			index: 2,
			color: "230",
			blocks:['setup_thermitorpin','thermistorCelsius', 'thermistorFahrenheit']
		},
		{
			name: 'I2C',
			icon: `file:///${dirIcon}/static/icons/I2C-Logo.png`,
			index: 3,
			color: "230",
			blocks:['setup_i2c','scan_i2c','show_i2c','scanlistdevice_i2c']
		},
		spi_sdcard,
		{
			name: 'RGB',
			icon: `file:///${dirIcon}/static/icons/rgb-icon.png`,
			index: 5,
			color: "230",
			blocks:[
				'set_rgb',
				'turn_off_rgb',
				'clear_rgb',
				'rgb_red',
				'rgb_green',
				'rgb_blue',
				'rgb_yellow',
				'rgb_pink',
				'rgb_orange',
				'rgb_lightblue',
				'rgb_lightgreen',
				'rgb_white',
			]
		},
	
	]
};
