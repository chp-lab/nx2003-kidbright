#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <NX2003Thermistor.h>

NX2003Thermistor thermistor;
		float c_temp;
		float f_temp;



void setup()
{
  Serial.begin(115200);
  
}
void loop()
{
  		c_temp = thermistor.readTemperatureCelsius();
		f_temp = thermistor.readTemperatureFahrenheit();
		Serial.println("Temperature celsius = " + String(c_temp));
	  Serial.println("Temperature fahrenheit = " + String(f_temp));
	;

  
}
