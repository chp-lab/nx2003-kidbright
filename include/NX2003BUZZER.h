#ifndef NX2003BUZZER_h
#define NX2003BUZZER_h

#include <Arduino.h>
#include "vector"

#define TONE_CHANNEL 1

static const uint8_t NX2003_BUZZER = 18;

class NX2003BUZZER
{
 public:
  void begin(void);
  void tone(unsigned int frequency, unsigned long duration = 0);
  void noTone();
  void song(std::vector<int> notes,int duration);
  void setTempo(int tempo);
 protected:
  uint16_t channel;
  uint16_t bit;

 private:
   float tempo = 1.0;
};

#endif
