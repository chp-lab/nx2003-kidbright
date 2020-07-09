#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <NX2003I2C.h>

NX2003I2C i2cOnBoard;




void setup()
{
  i2cOnBoard.begin();

  Serial.begin(115200);
}
void loop()
{
    			int nDevice = i2cOnBoard.scanI2CDevice();
  			Serial.print("I2C connected !");
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
  		Serial.println((
    			nDevice
  		));
  delay(5000);

  
}
