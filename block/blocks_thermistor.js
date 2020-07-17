const dirIcon = Vue.prototype.$global.board.board_info.dir;
module.exports = function (Blockly) {
	'use strict';
	
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
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/axial-ntc-thermistor.png`, 25, 25, { alt: "", flipRtl: "FALSE" }))
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
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/axial-ntc-thermistor.png`, 25, 25, { alt: "", flipRtl: "FALSE" }))
				.appendField("Thermitor Read : Fahrenheit");
			this.setOutput(true, "Number");
			this.setColour(0);
			this.setTooltip("Thermistor");
			this.setHelpUrl("");
		}
    };
};