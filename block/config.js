const dirIcon = Vue.prototype.$global.board.board_info.dir;
let spi_sdcard = require("./menu/config.group.spi_sdcard");
let buzzer = require("./menu/config.group.buzzer");
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
            name : 'Display',
			color : '230',
			index: 1,
			icon: `file:///${dirIcon}/static/icons/pngegg.png`,
            blocks : [
			    {
					xml:
						`<block type="i2c128x64_display_begin">
							<value name="SDA">
								<shadow type="math_number">
									<field name="NUM">4</field>
								</shadow>
							</value>
							<value name="SCL">
								<shadow type="math_number">
									<field name="NUM">22</field>
								</shadow>
							</value>
						</block>`
				},
				{
					xml: `<block type="variables_set">
									<field name="VAR">img1</field>
									<value name="VALUE">
										<block type="i2c128x64_create_image" inline="false"></block>
									</value>
						 </block>`
				},
				{
					xml:
						`<block type="i2c128x64_display_image">
							<value name="img">
								<block type="variables_get">
									<field name="VAR">img1</field>
								</block>
							</value>
							<value name="x">
								<shadow type="math_number">
									<field name="NUM">0</field>
								</shadow>
							</value>
							<value name="x">
								<shadow type="math_number">
									<field name="NUM">0</field>
								</shadow>
							</value>
							<value name="y">
								<shadow type="math_number">
									<field name="NUM">0</field>
								</shadow>
							</value>
							<value name="width">
								<shadow type="math_number">
									<field name="NUM">10</field>
								</shadow>
							</value>
							<value name="height">
								<shadow type="math_number">
									<field name="NUM">10</field>
								</shadow>
							</value>
						</block>`
				},
				"i2c128x64_display_clear",
				"i2c128x64_display_display",
				{
					xml:
						`<block type="i2c128x64_display_print">
									  <value name="text">
										  <shadow type="basic_string">
											  <field name="VALUE">Hello world!</field>
										  </shadow>
									  </value>
									  <value name="x">
										  <shadow type="math_number">
											  <field name="NUM">0</field>
										  </shadow>
									  </value>
									  <value name="y">
										  <shadow type="math_number">
											  <field name="NUM">0</field>
										  </shadow>
									  </value>
								  </block>`
				},
				{
					xml:
						`<block type="i2c128x64_display_draw_line">
									  <value name="x0">
										  <shadow type="math_number">
											  <field name="NUM">10</field>
										  </shadow>
									  </value>
									  <value name="y0">
										  <shadow type="math_number">
											  <field name="NUM">10</field>
										  </shadow>
									  </value>
									  <value name="x1">
										  <shadow type="math_number">
											  <field name="NUM">100</field>
										  </shadow>
									  </value>
									  <value name="y1">
										  <shadow type="math_number">
											  <field name="NUM">50</field>
										  </shadow>
									  </value>
								  </block>`
				},
				{
					xml:
						`<block type="i2c128x64_display_draw_rect">
									  <value name="x">
										  <shadow type="math_number">
											  <field name="NUM">10</field>
										  </shadow>
									  </value>
									  <value name="y">
										  <shadow type="math_number">
											  <field name="NUM">10</field>
										  </shadow>
									  </value>
									  <value name="width">
										  <shadow type="math_number">
											  <field name="NUM">50</field>
										  </shadow>
									  </value>
									  <value name="height">
										  <shadow type="math_number">
											  <field name="NUM">30</field>
										  </shadow>
									  </value>
								  </block>`
				},
				{
					xml:
						`<block type="i2c128x64_display_draw_circle">
									  <value name="x">
										  <shadow type="math_number">
											  <field name="NUM">64</field>
										  </shadow>
									  </value>
									  <value name="y">
										  <shadow type="math_number">
											  <field name="NUM">32</field>
										  </shadow>
									  </value>
									  <value name="r">
										  <shadow type="math_number">
											  <field name="NUM">20</field>
										  </shadow>
									  </value>
								  </block>`
				},
				{
					xml:
						`<block type="i2c128x64_display_draw_progress_bar">
									  <value name="x">
										  <shadow type="math_number">
											  <field name="NUM">0</field>
										  </shadow>
									  </value>
									  <value name="y">
										  <shadow type="math_number">
											  <field name="NUM">32</field>
										  </shadow>
									  </value>
									  <value name="width">
										  <shadow type="math_number">
											  <field name="NUM">120</field>
										  </shadow>
									  </value>
									  <value name="height">
										  <shadow type="math_number">
											  <field name="NUM">30</field>
										  </shadow>
									  </value>
									  <value name="progress">
										  <shadow type="math_number">
											  <field name="NUM">50</field>
										  </shadow>
									  </value>
								  </block>`
				},
				{
					xml:
						`<block type="i2c128x64_display_draw_pixel">
									  <value name="x">
										  <shadow type="math_number">
											  <field name="NUM">64</field>
										  </shadow>
									  </value>
									  <value name="y">
										  <shadow type="math_number">
											  <field name="NUM">32</field>
										  </shadow>
									  </value>    
								  </block>`
				},
				"i2c128x64_display_width",
				"i2c128x64_display_height",
				"basic_string"
            ]
		},
		buzzer,
		{
			name: 'Button',
			icon: `file:///${dirIcon}/static/icons/button1.png`,
			index: 2,
			color: "230",
			blocks:['button']
		},
		{
			name: 'Thermistor',
			icon: `file:///${dirIcon}/static/icons/icon_sensor.png`,
			index: 3,
			color: "230",
			blocks:['setup_thermitorpin','thermistorCelsius', 'thermistorFahrenheit']
		},
		{
			name: 'I2C',
			icon: `file:///${dirIcon}/static/icons/I2C-Logo.png`,
			index: 4,
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
