const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
  "use strict";
  var music_colour = Blockly.Msg.MUSIC_HUE;
  var music_colour = "165";
  // ############################   DHT11 ##################################
  Blockly.Blocks['dhtesp_setup'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/DHT11.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldVariable("DhtSensor1", null, ["Plugin.DHTesp"], ["Plugin.DHTesp"]), "instance")
        .appendField("Setup")
        .appendField(new Blockly.FieldDropdown([["DHT11", "DHTesp::DHT11"], ["DHT22", "DHTesp::DHT22"], ["AM2302", "DHTesp::AM2302"], ["RHT03", "DHTesp::RHT03"]]), "dht_type")
        .appendField("pin")
        .appendField(new Blockly.FieldNumber(0, 0, 50), "pin");
      this.setInputsInline(true);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(music_colour);
      this.setTooltip("setup sensor DHT ");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['dhtesp_read_temp'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/DHT11.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldVariable("DhtSensor1", null, ["Plugin.DHTesp"], ["Plugin.DHTesp"]), "instance")
        .appendField("read temperature °C");
      this.setInputsInline(true);
      this.setOutput(true, ["float", "Number"]);
      this.setColour(music_colour);
      this.setTooltip("read temperature in Celsius");
      this.setHelpUrl("");
    }
  };

  Blockly.Blocks['dhtesp_read_humid'] = {
    init: function () {
      this.appendDummyInput()
        .appendField(new Blockly.FieldImage(`file:///${dirIcon}/static/icons/DHT11.png`, 25, 25, { alt: "*", flipRtl: "FALSE" }))
        .appendField(new Blockly.FieldVariable("DhtSensor1", null, ["Plugin.DHTesp"], ["Plugin.DHTesp"]), "instance")
        .appendField("read humidity %");
      this.setInputsInline(true);
      this.setOutput(true, ["float", "Number"]);
      this.setColour(music_colour);
      this.setTooltip("read humidity in percentage");
      this.setHelpUrl("");
    }
  };
};
