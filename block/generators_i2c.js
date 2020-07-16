module.exports = function (Blockly) {
	'use strict';
	
	Blockly.JavaScript['setup_i2c'] = function (block) {
		var code = `
		#EXTINC	
			#include <NX2003I2C.h>
			
		#END
		#VARIABLE
			NX2003I2C i2cOnBoard;
		#END
		#SETUP
			i2cOnBoard.begin();
		#END
		`;
		return code;
	};
	Blockly.JavaScript['scan_i2c'] = function (block) {
		var code = `
		#EXTINC	
			#include <NX2003I2C.h>
		#END
		#VARIABLE
		#END
		#SETUP
		#END
			int nDevice = i2cOnBoard.scanI2CDevice();
			Serial.println("I2C connected !");
		`;
		return code;
	};
	Blockly.JavaScript['show_i2c'] = function (block) {
		var code = `
		#EXTINC	
			#include <NX2003I2C.h>
		#END
		#VARIABLE
		#END
		#SETUP
		#END
		Serial.println("----- List I2C Devices Address -----");
		if (nDevice == 0){
		  Serial.println("No I2C device is connected");
		} else {
		  for(byte address = 1; address < 127; address++){
			if(i2cOnBoard.hasDeviceAddress(address)){
			  Serial.print("- Address 0x");
			  if (address < 16) {
				Serial.print("0");
			  }
			  Serial.println(address, HEX);
			}
		  }
		}
	  
		`;
		return code;
	};
	Blockly.JavaScript['scanlistdevice_i2c'] = function(block) {
		var code = `
		#EXTINC	
			#include <NX2003I2C.h>
		#END
		#VARIABLE
		#END
		#SETUP
		#END
  			nDevice
		`;
		return [code, Blockly.JavaScript.ORDER_NONE];
      };
      
};