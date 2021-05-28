/**
 * @license
 * 
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Define custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on defining blocks:
// https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks


import * as Blockly from 'blockly/core';

// Since we're using json to initialize the field, we'll need to import it.
import '../fields/BlocklyReactField';
import '../fields/DateField';

var testReactField = {
  "type": "test_react_field",
  "message0": "custom field %1",
  "args0": [
    {
      "type": "field_react_component",
      "name": "FIELD",
      "text": "Click me"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
};

Blockly.Blocks['test_react_field'] = {
  init: function() {
    this.jsonInit(testReactField);
    this.setStyle('loop_blocks');
  }
};

var testCampo = {
  "type": "test_campo_field",
  "message0": "bloque de prueba %1",
  "args0": [
    {
      "type": "field_react_component",
      "name": "FIELD",
      "text": "Hola editameee!!"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
};

Blockly.Blocks['test_campo_field'] = {
  init: function() {
    this.jsonInit(testCampo);
    this.setStyle('loop_blocks');
  }
};

var reactDateField = {
  "type": "test_react_date_field",
  "message0": "date field %1",
  "args0": [
    {
      "type": "field_react_date",
      "name": "DATE",
      "date": "01/01/2020"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
};

Blockly.Blocks['test_react_date_field'] = {
  init: function() {
    this.jsonInit(reactDateField);
    this.setStyle('loop_blocks');
  }
};

var test_operator = {
  "type": "test_operator",
  "message0": "%1 x %2 x %3",
  "args0": [
    {
      "type": "input_value",
      "name": "ONE",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "TWO",
      "check": "Number"
    },
    {
      "type": "input_value",
      "name": "THREE",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "output": "Number",
  "colour": 225,
  "tooltip": "",
  "helpUrl": ""
}

Blockly.Blocks['test_operator'] = {
  init: function() {
    this.jsonInit(test_operator);
    this.setStyle('math_blocks');
  }
};