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
  
}
void loop()
{
    music.song((std::vector<int>{262,523,220,440,233,466,-1,-1,175,349,147,294,156,311,-1,-1,175,349,147,294,156,311,-1,-1,175,349,147,294,156,311,-1,-1,311,277,294,277,311,311,208,196,277,262,370,349,165,466,440,415,311,247,233,220,208}),250);

  
}
