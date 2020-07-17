module.exports = function (Blockly) {
	'use strict';
	
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
		init: function() {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldImage("https://lh3.googleusercontent.com/A_7Zr8meE62ikBNHdLFTqO99vHV02z_mBtPaxIy1TXk13LHl43INaCRqvTR2L_GfFa5z", 20, 20, { alt: "*", flipRtl: "FALSE" }))
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
		init: function() {
		  this.appendDummyInput()
			  .appendField(new Blockly.FieldImage("https://www.megapk.it/wp-content/uploads/2017/04/Come-partizionare-la-scheda-SD-per-Link2SD-dalla-TWRP-Recovery-GUIDA.png", 20, 20, { alt: "*", flipRtl: "FALSE" }))
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