var toolboxDefinition = [
  {
    name: "Logic",
    colour: "210",
    blocks: [
      { type: "controls_if" },
      { type: "logic_compare" },
      { type: "logic_operation" },
    ],
  },
  {
    name: "Math",
    colour: "230",
    blocks: [
      { type: "math_number" },
      { type: "math_arithmetic" },
      { type: "math_random_int" },  
      { type: "math_random_float" },
    ],
  },
  {
    name:"movement",
    colour: "315", 
    blocks:[
      {type:'moveForward'},
      {type:'turnRight'},
      {type:'turnLeft'}
    ],
    
  },
  [{
    "type": "move",
    "message0": "%1 Move %2 for %3 %4 %5",
    "args0": [
      {
        "type": "field_image",
        "src": "https://www.gstatic.com/codesite/ph/images/star_on.gif",
        "width": 15,
        "height": 15,
        "alt": "*",
        "flipRtl": false
      },
      {
        "type": "field_dropdown",
        "name": "Direction",
        "options": [
          [
            "forward",
            "forward"
          ],
          [
            "backward",
            "backward"
          ],
          [
            "",
            ""
          ]
        ]
      },
      {
        "type": "field_number",
        "name": "",
        "value": 0,
        "min": 0,
        "max": 9999,
        "precision": 0.5
      },
      {
        "type": "field_dropdown",
        "name": "method",
        "options": [
          [
            "rotations",
            "rotations"
          ],
          [
            "degrees",
            "degrees"
          ],
          [
            "seconds",
            "seconds"
          ]
        ]
      },
      {
        "type": "input_value",
        "name": "move"
      }
    ],
    "previousStatement": null,
    "nextStatement": null,
    "colour": 316,
    "tooltip": "Move block. Forward or backward",
    "helpUrl": ""
  }],
];

var workspace;

function initializeBlockly() {
  workspace = Blockly.inject('blocklyDiv', {
    toolbox: createToolboxXml(toolboxDefinition),
  });
}

function createToolboxXml(toolboxDef) {
  var toolboxXml = '<xml id="toolbox" style="display: none;">';
  toolboxDef.forEach(category => {
    toolboxXml += '<category name="' + category.name + '" colour="' + category.colour + '">';
    category.blocks.forEach(block => {
      toolboxXml += '<block type="' + block.type + '"></block>';
    });
    toolboxXml += '</category>';
  });
  toolboxXml += '</xml>';
  return toolboxXml;
}

function runCode() {
  console.log('Run Code button clicked.'); // Debugging log

  workspace.getAllBlocks().forEach(block => {
    if (block.type === 'math_number') {
      var value = block.getFieldValue('NUM');
      console.log('Math Number Value:', value);
    }
  });

  var outputElement = document.getElementById('output');
  outputElement.innerHTML = '';

  var originalConsoleLog = console.log;
  var outputBuffer = '';
  console.log = function (message) {
    outputBuffer += message + '<br>'
  };

  var code = Blockly.JavaScript.workspaceToCode(workspace);
  try {
    console.log('Executing code: ' + code); // Debugging log
    eval(code);
    outputElement.innerHTML = outputBuffer;
  } catch (error) {
    outputElement.innerHTML = 'Error: ' + error.message;
  }
  console.log = originalConsoleLog;
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('runCodeButton').addEventListener('click', runCode);
});

window.onload = initializeBlockly;