#include "NX2003BUZZER.h"

void NX2003BUZZER::begin(void) {
    // ledcSetup(TONE_CHANNEL, 5000, 13);
}

void NX2003BUZZER::tone(unsigned int frequency, unsigned long duration)
{
    if (ledcRead(TONE_CHANNEL)) {
        log_e("Tone channel %d is already in use", ledcRead(TONE_CHANNEL));
        return;
    }
    ledcAttachPin(NX2003_BUZZER, TONE_CHANNEL);
    ledcWriteTone(TONE_CHANNEL, frequency);
    if (duration) {
        float x = duration * this->tempo;
        delay(x);
        noTone();
    }
}
void NX2003BUZZER::setTempo(int tempo) {
   float ratio = 60.0 / tempo;
   this->tempo = ratio;
  }

void NX2003BUZZER::noTone()
{
    ledcDetachPin(NX2003_BUZZER);
    ledcWrite(TONE_CHANNEL, 0);
}

void NX2003BUZZER::song(std::vector<int>notes,int duration)
{
    for(int freq : notes){
        if(freq == -1){
            noTone();
            delay(duration);
        }else{
            tone(freq,duration);
        }
    }
}
