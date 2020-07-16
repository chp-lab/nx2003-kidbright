module.exports = function (Blockly) {
	'use strict';
	
	Blockly.JavaScript['button'] = function (block) {
		var code = `
		#EXTINC
			#include <NX2003BTN.h>
		#END
		#VARIABLE
			NX2003BTN BTN;
		#END
        #SETUP
			BTN.init();		
		#END
			if(BTN.pressed())
				{
					Serial.println("Button pressed!");
				}
		`;
		return [code, Blockly.JavaScript.ORDER_NONE];
    };
};