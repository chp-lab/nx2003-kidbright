module.exports = function (Blockly) {
	'use strict';
	Blockly.JavaScript['led'] = function (block) {
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
	};
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
	Blockly.JavaScript['thermistorCelsius'] = function (block) {
		var code = `
			#EXTINC
				#include <NX2003Thermistor.h>
			#END

			thermistor.readTemperatureCelsius()
		`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};
	Blockly.JavaScript['thermistorFahrenheit'] = function (block) {
		var code = `
			#EXTINC
				#include <NX2003Thermistor.h>
			#END

			thermistor.readTemperatureFahrenheit()
		`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};
	Blockly.JavaScript['setup_thermitorpin'] = function (block) {
		var text_thermistor_pin = block.getFieldValue('THERMISTOR_PIN');
		var code = `
			#EXTINC
				#include <NX2003Thermistor.h>
			#END
			#VARIABLE
				int THERMISTOR_PIN = ${text_thermistor_pin};
				#define VOLTAGE_INPUT 3.30
				#define NOMINAL_TEMP 25
				#define NOMINAL_RESISTANCE 100000
				#define REFERENCE_RESISTANCE 100000 // external RESISTANCE
				#define B_VALUE 3950
				#define ADC_RESOLUTION 4095


				NX2003Thermistor thermistor(THERMISTOR_PIN, VOLTAGE_INPUT, REFERENCE_RESISTANCE, NOMINAL_RESISTANCE, NOMINAL_TEMP, B_VALUE, ADC_RESOLUTION);
			#END
		`;
		return code;
	};
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
	Blockly.JavaScript['spi__sdcard'] = function (block) {
		var code = `
		#EXTINC	
			#include <NX2003SPI.h>
			
		#END
		#VARIABLE
			#define A_IN_1 25

			NX2003SPI nx2003spi;
			File myFile;
			bool mount_flag = false;
					 
		#END
		#FUNCTION
			void write(String file_name, String data)
				{
				/* sample usage with SD card */
				myFile = SD.open(file_name, FILE_APPEND);
				if(myFile)
				{
					Serial.println("Writing to test.txt...");

					myFile.println(data);
					myFile.close();
					Serial.println("Done");
				}
				else
				{
					Serial.println("Error opening file!");
				}
				}

			void read(String file_name)
				{
				myFile = SD.open(file_name, FILE_READ);
				if(myFile)
				{
					while(myFile.available())
					{
					Serial.write(myFile.read());
					}
					myFile.close();
				}
				else
				{
					Serial.println("Error opening file!");
				}
				}
		
		#END
		#SETUP
			randomSeed(analogRead(A_IN_1));
			nx2003spi.init();
		#END
	`;
		return code;
	};
	Blockly.JavaScript['create_file'] = function (block) {
		var var_filename = block.getFieldValue('var_filename');
		// TODO: Assemble JavaScript into code variable.
		var code = `
		#EXTINC	
			#include <NX2003SPI.h>
			
		#END
		#VARIABLE

		#END
		#FUNCTION

		#END
		#SETUP
			
		#END
			if(!mount_flag)
				{
					String file_name = "/${var_filename}";
					mount_flag = true;

					if(!nx2003spi.mount()) {
						Serial.println("Cannot mount SD card!");
						esp_deep_sleep_start();
					}
					else
					{
						Serial.println("SD card mounted");
					}
					write(file_name, String(random(0,10)));
				}

	`;
		return code;
	};
	Blockly.JavaScript['read_file'] = function (block) {
		var text_value_file = block.getFieldValue('value_file');
		// TODO: Assemble JavaScript into code variable.
		var code = `
		#EXTINC	
			#include <NX2003SPI.h>
			
		#END
		#VARIABLE

		#END
		#FUNCTION

		#END
		#SETUP
			
		#END
			if(!mount_flag)
				{
					String file_name = "/${text_value_file}";
					mount_flag = true;

					read(file_name);
				}
				`;
		return code;
	};
};
