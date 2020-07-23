
const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
	"use strict";
	// >>>>>>>>>>>>>>>LED Blink>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>	
	Blockly.Blocks['led_blink'] = {
		init: function () {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/led-icon.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
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
	// ######################################################################
};
