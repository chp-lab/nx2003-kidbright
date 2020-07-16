module.exports = function (Blockly) {
	'use strict';
	
	Blockly.JavaScript['turn_off_rgb'] = function (block) {
		var code = `
			#EXTINC
				#include <NX2003RGB.h>
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			#VARIABLE
				NX2003RGB RGB; 			
			#END
			RGB.off();
		`;
		return code;
	};
	Blockly.JavaScript['clear_rgb'] = function (block) {
		var code = `
			#EXTINC	
				#include <NX2003RGB.h>
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			#VARIABLE
				NX2003RGB RGB; 			
			#END

			RGB.clear();
		`;
		return code;
	};
	Blockly.JavaScript['set_rgb'] = function (block) {
		var r = block.getFieldValue('R');
		var g = block.getFieldValue('G');
		var b = block.getFieldValue('B');

		var code = `
		#EXTINC	
				#include <NX2003RGB.h>
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			#VARIABLE
				NX2003RGB rgb; 			
			#END
			rgb.setColor(${r},${g},${b});`;
		return code;
	};
	Blockly.JavaScript['rgb_red'] = function (block) {
		var code = `
			#EXTINC
				#include <NX2003RGB.h>
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			#VARIABLE
				NX2003RGB RGB; 			
			#END
			RGB.red();
		`;
		return code;
	};
	Blockly.JavaScript['rgb_green'] = function (block) {
		var code = `
			#EXTINC	
				#include <NX2003RGB.h>
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			#VARIABLE
				NX2003RGB RGB; 			
			#END

			RGB.green();
		`;
		return code;
	};
	Blockly.JavaScript['rgb_blue'] = function (block) {
		var code = `
			#EXTINC	
				#include <NX2003RGB.h>
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			#VARIABLE
				NX2003RGB RGB; 			
			#END

			RGB.blue();
		`;
		return code;
	};
	Blockly.JavaScript['rgb_yellow'] = function (block) {
		var code = `
			#EXTINC	
				#include <NX2003RGB.h>
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			#VARIABLE
				NX2003RGB RGB; 			
			#END

			RGB.yellow();
		`;
		return code;
	};
	Blockly.JavaScript['rgb_pink'] = function (block) {
		var code = `
			#EXTINC	
				#include <NX2003RGB.h>
				
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			#VARIABLE
				NX2003RGB RGB; 			
			#END

			RGB.pink();
		`;
		return code;
	};
	Blockly.JavaScript['rgb_orange'] = function (block) {
		var code = `
			#EXTINC	
				#include <NX2003RGB.h>
				
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			#VARIABLE
				NX2003RGB RGB; 			
			#END

			RGB.orange();
		`;
		return code;
	};
	Blockly.JavaScript['rgb_lightblue'] = function (block) {
		var code = `
			#EXTINC	
				#include <NX2003RGB.h>
				
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			#VARIABLE
				NX2003RGB RGB; 			
			#END

			RGB.lightblue();
		`;
		return code;
	};
	Blockly.JavaScript['rgb_lightgreen'] = function (block) {
		var code = `
			#EXTINC	
				#include <NX2003RGB.h>
				
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			#VARIABLE
				NX2003RGB RGB; 			
			#END

			RGB.lightgreen();
		`;
		return code;
	};
	Blockly.JavaScript['rgb_white'] = function (block) {
		var code = `
			#EXTINC	
				#include <NX2003RGB.h>
				
			#END
			#SETUP
				RGB.begin();
				RGB.setCommonCathode(false);
			#END
			#VARIABLE
				NX2003RGB RGB; 			
			#END

			RGB.white();
		`;
		return code;
    };
};