module.exports = function (Blockly) {
  'use strict';
  const ORDER_ATOMIC = Blockly.JavaScript.ORDER_ATOMIC;
  const valueToCode = (a, b) => Blockly.JavaScript.valueToCode(a, b);

  Blockly.JavaScript['block_game_squid'] = function (block) {
    var code = `
		#EXTINC	
          #include <Wire.h> 
          #include "SSD1306Wire.h" 

          #include "images.h"
          #include "fontovi.h"
		#END
		#VARIABLE
            SSD1306Wire  display(0x3c, 4, 22);

            #define DEMO_DURATION 3000
            #define SWITHCH 35
            typedef void (*Demo)(void);
            
            float zidx[4];
            int prazan[4];
            int razmak=32;
            int sirinaProlaza=30;
            int score=0;
            int stis=0;
            float fx=30.00;
            float fy=22.00;
            int smjer=0;
            unsigned long trenutno=0;

            int igra=0;
            int frame=0;
            int sviraj=0;
            unsigned long ton=0;
		#END
		#FUNCTION

		#END
		#SETUP
			   
            Serial.println();
            Serial.println();

            pinMode(2,OUTPUT);
            pinMode(23,OUTPUT);
            pinMode(SWITHCH,INPUT); 
            display.init();

            for(int i=0;i<4;i++)
            {
                zidx[i]=128+((i+1)*razmak);
                {prazan[i]=random(8,32);}
    }

            display.flipScreenVertically();
            display.setFont(ArialMT_Plain_10);
        #END
        
        display.clear();

        if(igra==0)
        {
         display.setFont(ArialMT_Plain_16);
         display.drawString(0,4,"Let's go Squid !!");
         display.drawXbm(0, 0, 128, 64, pozadina);
         
         display.drawXbm(16, 28, 7, 12, ptica);
         display.drawXbm(26, 24, 7, 12, ptica);
         display.drawXbm(36, 28, 7, 12, ptica);
        display.setFont(ArialMT_Plain_10);
        display.drawString(0,44,"press to start");
         if(digitalRead(SWITHCH)==1)
         igra=1;
         }
     
        if(igra==1)
        {
        display.setFont(ArialMT_Plain_10);
        display.drawString(3,0,String(score));
        
        if(digitalRead(SWITHCH)==1)
        {
         if(stis==0)
           {
             trenutno=millis();
             smjer=1;
             sviraj=1;
             stis=1;
             ton=millis();
            
             }
         
         }else{stis=0;}
     
        
         for(int j=0;j<4;j++){
            display.setColor(WHITE);
         display.fillRect(zidx[j],0,4,64);
          display.setColor(BLACK);
           display.fillRect(zidx[j],prazan[j],4,sirinaProlaza);
        
         }
     
       display.setColor(WHITE);
      //  display.fillCircle(fx, fy, 4); // igrac
       display.drawXbm(fx, fy, 7, 12, ptica);
       
         for(int j=0;j<4;j++)
         {
         zidx[j]=zidx[j]-0.01;
         if(zidx[j]<-7){
           score=score+1;
           
           
            digitalWrite(23,1);
           prazan[j]=random(8,32);
          
         zidx[j]=128;
         }
         }
       if((trenutno+185)<millis())
       smjer=0;
     
         if((ton+40)<millis())
       sviraj=0;
     
     if(smjer==0)
      fy=fy+0.01;
     else
      fy=fy-0.03;
     
     
      if(sviraj==1)
      digitalWrite(23,1);
      else
      digitalWrite(23,0);
     
     if(fy>63 || fy<0){
     igra=0;
     fy=22;
     score=0;
      digitalWrite(23,1);
       delay(500);
        digitalWrite(23,0); 
     for(int i=0;i<4;i++)
       {
         zidx[i]=128+((i+1)*razmak);
         {prazan[i]=random(4,30);}
         }
     }
     
     for(int m=0;m<4;m++)
     if(zidx[m]<=fx+7 && fx+7<=zidx[m]+6)
     {
       
      
       if(fy<prazan[m] || fy+8>prazan[m]+sirinaProlaza){
       igra=0;
       fy=22;
       score=0;
       digitalWrite(23,1);
       delay(500);
        digitalWrite(23,0);
       for(int i=0;i<4;i++)
       {
         zidx[i]=128+((i+1)*razmak);
         {prazan[i]=random(8,32);}
         }
       }}
        display.drawRect(0,0,128,64);
        }
       
        display.display();   
        
		`;
    return code;
  };
};