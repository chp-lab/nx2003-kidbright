#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>

#include <NX2003Thermistor.h>

int THERMISTOR_PIN = 39;
  				#define VOLTAGE_INPUT 3.30
  				#define NOMINAL_TEMP 25
  				#define NOMINAL_RESISTANCE 100000
  				#define REFERENCE_RESISTANCE 100000 // external RESISTANCE
  				#define B_VALUE 3950
  				#define ADC_RESOLUTION 4095


  				NX2003Thermistor thermistor(THERMISTOR_PIN, VOLTAGE_INPUT, REFERENCE_RESISTANCE, NOMINAL_RESISTANCE, NOMINAL_TEMP, B_VALUE, ADC_RESOLUTION);



void setup()
{
  
  Serial.begin(115200);
}
void loop()
{
    Serial.println(
  			thermistor.readTemperatureCelsius()
  		);

  
}
