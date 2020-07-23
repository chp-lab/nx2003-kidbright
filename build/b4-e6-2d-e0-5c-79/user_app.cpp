#include <Arduino.h>
#include <WiFi.h>
#include <WiFiClient.h>
#include <WiFiAP.h>
#include <WebServer.h>


#include <NX2003BUZZER.h>

NX2003BUZZER music = NX2003BUZZER();




void setup()
{
  music.begin();

  music.setTempo(60);
}
void loop()
{
            music.tone(494, 500);
          music.tone(587, 250);
          music.tone(440, 1000);
          music.tone(659, 500);
          music.tone(784, 250);
          music.tone(523, 1000);
          music.tone(659, 250);
          music.tone(740, 250);
          music.tone(587, 250);
          music.tone(659, 250);
          music.tone(740, 250);
          music.tone(880, 250);
          music.tone(784, 1000);

  
}
