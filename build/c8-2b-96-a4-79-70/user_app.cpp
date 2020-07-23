#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>








void setup()
{
  
  Serial.begin(115200);

      const int led_blue = 18;
      WiFi.begin("Yew@","YEWyew111");

      pinMode(led_blue, OUTPUT);
      digitalWrite(led_blue, 0);

      while(WiFi.status() != WL_CONNECTED){
        digitalWrite(led_blue, 1);
        delay(200);
        digitalWrite(led_blue, 0);
        delay(200);
        digitalWrite(led_blue, 1);
        delay(200);
        digitalWrite(led_blue, 0);
        delay(200);
      }
        digitalWrite(led_blue, 0);
}
void loop()
{
    Serial.println((WiFi.localIP().toString()));

  
}
