const dirIcon = Vue.prototype.$global.board.board_info.dir;

module.exports = function (Blockly) {
	'use strict';
    Blockly.Blocks['block_flappy_bird'] = {
        init: function() {
          this.appendDummyInput()
              .appendField(new Blockly.FieldImage("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHxJ7YZ-rFCfWgpcC3_xPskwSpASo4ZDyFVg&usqp=CAU", 25, 25, { alt: "*", flipRtl: "FALSE" }))
              .appendField("Game : Flappy Bird");
          this.appendDummyInput()
              .appendField(new Blockly.FieldImage("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHxJ7YZ-rFCfWgpcC3_xPskwSpASo4ZDyFVg&usqp=CAU", 212, 164, { alt: "*", flipRtl: "FALSE" }));
          this.setPreviousStatement(true, null);
          this.setColour(285);
       this.setTooltip("Flappy Bird");
       this.setHelpUrl("");
        }
      };
};