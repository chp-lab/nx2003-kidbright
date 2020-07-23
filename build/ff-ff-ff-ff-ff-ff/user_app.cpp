#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>


#include "DHTesp.h"

DHTesp DhtSensor1;



void setup()
{
  
  DhtSensor1.setup(0,DHTesp::DHT11);
}
void loop()
{
    Serial.println(DhtSensor1.getTemperature());

  
}
