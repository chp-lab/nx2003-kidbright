module.exports = function (Blockly) {
	'use strict';
	// >>>>>>>>>>>>>>>LED Blink>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>	
	Blockly.Blocks['led'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("LED Blink with delay ")
				.appendField(new Blockly.FieldTextInput("time"), "delay")
				.appendField(" second");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(270);
			this.setTooltip("LED Blink");
			this.setHelpUrl("");
		}
	};
	// >>>>>>>>>>>>>>>>>>button>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	Blockly.Blocks['button'] = {
		init: function () {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage("https://www.robotshop.com/media/catalog/product/cache/image/1350x/9df78eab33525d08d6e5fb8d27136e95/s/f/sfe-12mm-push-button-switch_1.jpg", 20, 20, { alt: "*", flipRtl: "FALSE" }))
				.appendField("Build in Button pressed");
				this.setOutput(true, null);
			this.setColour(120);
			this.setTooltip("Button pressed");
			this.setHelpUrl("");
		}
	};
	// >>>>>>>>>>>>>>>Thermitor>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>	
	Blockly.Blocks['setup_thermitorpin'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("set up THERMISTOR PIN ")
				.appendField(new Blockly.FieldTextInput("39"), "THERMISTOR_PIN");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(0);
			this.setTooltip(" THERMISTOR PIN ");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['thermistorCelsius'] = {
		init: function () {
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_CENTRE)
				.appendField(new Blockly.FieldImage("https://5.imimg.com/data5/VN/EE/MY-20514451/axial-ntc-thermistor-500x500.jpg", 25, 20, { alt: "", flipRtl: "FALSE" }))
				.appendField("Thermitor Read : Celsius");
			this.setOutput(true, "Number");
			this.setColour(0);
			this.setTooltip("Thermistor");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['thermistorFahrenheit'] = {
		init: function () {
			this.appendDummyInput()
				.setAlign(Blockly.ALIGN_CENTRE)
				.appendField(new Blockly.FieldImage("https://5.imimg.com/data5/VN/EE/MY-20514451/axial-ntc-thermistor-500x500.jpg", 25, 20, { alt: "", flipRtl: "FALSE" }))
				.appendField("Thermitor Read : Fahrenheit");
			this.setOutput(true, "Number");
			this.setColour(0);
			this.setTooltip("Thermistor");
			this.setHelpUrl("");
		}
	};
	// >>>>>>>>>>>>>>>I2C>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    Blockly.Blocks['setup_i2c'] = {
		init: function() {
		  this.appendDummyInput()
		  .appendField(new Blockly.FieldImage("https://icon-library.com/images/settings-icon-flat/settings-icon-flat-22.jpg", 20, 20, { alt: "*", flipRtl: "FALSE" }))
			  .appendField("Setup  I2C  : begin ");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(300);
	   this.setTooltip("I2C  ");
	   this.setHelpUrl("");
		}
	  };
	Blockly.Blocks['scan_i2c'] = {
		init: function() {
		  this.appendDummyInput()
		  .appendField(new Blockly.FieldImage("https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Circle-icons-email.svg/75px-Circle-icons-email.svg.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
			  .appendField("Scan I2C and connected I2C pin");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(300);
	   this.setTooltip("I2C  ");
	   this.setHelpUrl("");
		}
	  };
	  Blockly.Blocks['scanlistdevice_i2c'] = {
		init: function() {
		  this.appendDummyInput()
			  .appendField("Number I2C  connected");
		  this.setOutput(true, null);
		  this.setColour(300);
	   this.setTooltip("I2C  ");
	   this.setHelpUrl("");
		}
	  };

	  Blockly.Blocks['show_i2c'] = {
		init: function() {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldImage("https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Circle-icons-location.svg/1200px-Circle-icons-location.svg.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
			  .appendField("Show  I2C devices address");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(300);
	   this.setTooltip("I2C  ");
	   this.setHelpUrl("");
		}
	  };
	// >>>>>>>>>>>>>>>RGB>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>	
	Blockly.Blocks['set_rgb'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("set RGB color: ")
				.appendField("R")
				.appendField(new Blockly.FieldNumber(0, 0, 255), "R")
				.appendField("G")
				.appendField(new Blockly.FieldNumber(0, 0, 255), "G")
				.appendField("B")
				.appendField(new Blockly.FieldNumber(0, 0, 255), "B");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(240);
			this.setTooltip("RGB");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['turn_off_rgb'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("turn off RGB");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(240);
			this.setTooltip("RGB");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['clear_rgb'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("clear RGB");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(240);
			this.setTooltip("RGB to (255,255,255)");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['rgb_red'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("color : red");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(0);
			this.setTooltip("RGB");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['rgb_green'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("color : green");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(135);
			this.setTooltip("RGB");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['rgb_blue'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("color : blue");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(210);
			this.setTooltip("RGB");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['rgb_yellow'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("color : yellow");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(60);
			this.setTooltip("RGB");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['rgb_pink'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("color : pink");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(300);
			this.setTooltip("RGB");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['rgb_orange'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("color : orange");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(45);
			this.setTooltip("RGB");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['rgb_lightblue'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("color : lightblue");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(195);
			this.setTooltip("RGB");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['rgb_lightgreen'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("color : lightgreen");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(165);
			this.setTooltip("RGB");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['rgb_white'] = {
		init: function () {
			this.appendDummyInput()
				.appendField("color : white");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			//   this.setColour();
			this.setTooltip("RGB");
			this.setHelpUrl("");
		}
	};
	// >>>>>>>>>>>>>>>SPI sd card>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	Blockly.Blocks['spi__sdcard'] = {
		init: function () {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage("https://lh3.googleusercontent.com/48OtX7kJ0YYultztvdniOwe5pPaORQSRdEp91VokjCiF4idFkd7uoFjKCmEihmL7gUNp", 20, 20, { alt: "*", flipRtl: "FALSE" }))
				.appendField("Using SPI (SD Card)");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(210);
			this.setTooltip("SD Card");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['create_file'] = {
		init: function () {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage("https://lh3.googleusercontent.com/A_7Zr8meE62ikBNHdLFTqO99vHV02z_mBtPaxIy1TXk13LHl43INaCRqvTR2L_GfFa5z", 20, 20, { alt: "*", flipRtl: "FALSE" }))
				.appendField("Create .txt file name :")
				.appendField("\"")
				.appendField(new Blockly.FieldTextInput("example"), "var_filename")
				.appendField("\"");
			this.setInputsInline(true);
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(210);
			this.setTooltip("SD Card");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['read_file'] = {
		init: function () {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage("https://www.megapk.it/wp-content/uploads/2017/04/Come-partizionare-la-scheda-SD-per-Link2SD-dalla-TWRP-Recovery-GUIDA.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
				.appendField("Read .txt file name  is :")
				.appendField("\"")
				.appendField(new Blockly.FieldTextInput("example"), "value_file")
				.appendField("\"");
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(210);
			this.setTooltip("SD Card");
			this.setHelpUrl("");
		}
	};
}