const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
	'use strict';
    // >>>>>>>>>>>>>>>I2C>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    Blockly.Blocks['setup_i2c'] = {
		init: function() {
		  this.appendDummyInput()
		  .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/i2c.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
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
		  .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/i2c.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
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
		  .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/i2c.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
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
		  .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/i2c.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
			  .appendField("Show  I2C devices address");
		  this.setPreviousStatement(true, null);
		  this.setNextStatement(true, null);
		  this.setColour(300);
	   this.setTooltip("I2C  ");
	   this.setHelpUrl("");
		}
      };
};