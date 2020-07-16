module.exports = function (Blockly) {
	'use strict';
	
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
}