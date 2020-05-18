module.exports = function(Blockly){
	'use strict';
	Blockly.Blocks['led_blink'] = {
		init: function() {
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
	}
};