module.exports = function (Blockly) {
	'use strict';
	const ORDER_ATOMIC = Blockly.JavaScript.ORDER_ATOMIC;
    const valueToCode = (a, b) => Blockly.JavaScript.valueToCode(a, b);

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
    var value_data = valueToCode(block, "DATA", ORDER_ATOMIC);
 
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
					String file_name = "/${value_data}.txt";
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
		var value_data = valueToCode(block, "DATA", ORDER_ATOMIC);
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
					String file_name = "/${value_data}.txt";
					mount_flag = true;

					read(file_name);
				}
				`;
		return code;
	};
};
