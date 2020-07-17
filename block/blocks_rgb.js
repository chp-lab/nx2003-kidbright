module.exports = function (Blockly) {
	'use strict';
	
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
}