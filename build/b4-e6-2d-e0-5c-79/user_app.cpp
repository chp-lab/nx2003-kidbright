#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>








void setup()
{
  
  Serial.begin(115200);

      const int led = 18;
      WiFi.begin("test","test");
      pinMode(led, OUTPUT);
      digitalWrite(led, 0);

      while(WiFi.status() != WL_CONNECTED){
        digitalWrite(led, 0);
        delay(200);
        digitalWrite(led, 1);
        delay(200);
        digitalWrite(led, 0);
        delay(200);
        digitalWrite(led, 1);
        delay(200);
      }
}
void loop()
{
    Serial.println((WiFi.localIP().toString()));

  
}
