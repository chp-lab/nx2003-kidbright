module.exports = function(Blockly){
	'use strict';
	Blockly.JavaScript['led_blink'] = function(block) {
		var delay = block.getFieldValue('delay');
		var code = `
		#SETUP
		int led_pin = 13;
		pinMode(led_pin, OUTPUT);
		#END
		digitalWrite(led_pin, HIGH);
		delay(${delay});
		digitalWrite(led_pin, LOW);
		delay(${delay});
		`;
		return code;
	}
};
