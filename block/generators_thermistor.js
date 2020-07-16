module.exports = function (Blockly) {
	'use strict';
	
	Blockly.JavaScript['thermistorCelsius'] = function (block) {
		var code = `
			#EXTINC
				#include <NX2003Thermistor.h>
			#END

			thermistor.readTemperatureCelsius()
		`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};
	Blockly.JavaScript['thermistorFahrenheit'] = function (block) {
		var code = `
			#EXTINC
				#include <NX2003Thermistor.h>
			#END

			thermistor.readTemperatureFahrenheit()
		`;
		return [code, Blockly.JavaScript.ORDER_ATOMIC];
	};
	Blockly.JavaScript['setup_thermitorpin'] = function (block) {
		var text_thermistor_pin = block.getFieldValue('THERMISTOR_PIN');
		var code = `
			#EXTINC
				#include <NX2003Thermistor.h>
			#END
			#VARIABLE
				int THERMISTOR_PIN = ${text_thermistor_pin};
				#define VOLTAGE_INPUT 3.30
				#define NOMINAL_TEMP 25
				#define NOMINAL_RESISTANCE 100000
				#define REFERENCE_RESISTANCE 100000 // external RESISTANCE
				#define B_VALUE 3950
				#define ADC_RESOLUTION 4095


				NX2003Thermistor thermistor(THERMISTOR_PIN, VOLTAGE_INPUT, REFERENCE_RESISTANCE, NOMINAL_RESISTANCE, NOMINAL_TEMP, B_VALUE, ADC_RESOLUTION);
			#END
		`;
		return code;
    };
};