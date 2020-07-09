#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <NX2003SPI.h>

#define A_IN_1 25

  			NX2003SPI nx2003spi;
  			File myFile;
  			bool mount_flag = false;

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

void setup()
{
  randomSeed(analogRead(A_IN_1));
  			nx2003spi.init();
  Serial.begin(115200);

  		
  		
  		
  		
  			if(!mount_flag)
  				{
  					String file_name = "/nx2003sd.txt";
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
  					read(file_name);
  				}
}
void loop()
{
  
  
}
