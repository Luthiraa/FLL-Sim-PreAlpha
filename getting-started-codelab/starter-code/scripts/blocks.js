Blockly.Blocks['move'] = {
    init: function() {
      this.appendDummyInput()
          .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, { alt: "*", flipRtl: "FALSE" }))
          .appendField("Move")
          .appendField(new Blockly.FieldDropdown([["forward","forward"], ["backward","backward"], ["",""]]), "Direction")
          .appendField("for")
          .appendField(new Blockly.FieldNumber(0, 0, 9999, 0.5), "")
          .appendField(new Blockly.FieldDropdown([["rotations","rotations"], ["degrees","degrees"], ["seconds","seconds"]]), "method");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(316);
   this.setTooltip("Move block. Forward or backward");
   this.setHelpUrl("");
    }
  };

Blockly.JavaScript('move') = function(block){
  var dropdown_direction = block.getFieldValue('Direction');
    var dropdown_method = block.getFieldValue('method');
// put functionality here
    var code = '...\n';
    return code;
  };