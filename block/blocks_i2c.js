module.exports = function (Blockly) {
	'use strict';
	
    
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
};