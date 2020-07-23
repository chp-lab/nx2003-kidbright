const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
	'use strict';

	// >>>>>>>>>>>>>>>SPI sd card>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
	Blockly.Blocks['spi__sdcard'] = {
		init: function () {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_sdcard.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
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
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_sdcard.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
				.appendField("Create file .txt file name:");
			this.appendValueInput("DATA")
				.setCheck(null)
				.setAlign(Blockly.ALIGN_RIGHT)
			this.appendDummyInput();
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(210);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
	Blockly.Blocks['read_file'] = {
		init: function () {
			this.appendDummyInput()
				.appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/icon_sdcard.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
				.appendField("Read file .txt file name:");
			this.appendValueInput("DATA")
				.setCheck(null)
				.setAlign(Blockly.ALIGN_RIGHT)
			this.appendDummyInput();
			this.setPreviousStatement(true, null);
			this.setNextStatement(true, null);
			this.setColour(210);
			this.setTooltip("");
			this.setHelpUrl("");
		}
	};
}