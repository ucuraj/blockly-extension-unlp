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
 * @fileoverview Define generation methods for custom blocks.
 * @author samelh@google.com (Sam El-Husseini)
 */

// More on generating code:
// https://developers.google.com/blockly/guides/create-custom-blocks/generating-code

import * as Blockly from "blockly/core";
import "blockly/python";

Blockly.Python["test_react_field"] = function (block) {
  return "console.log('custom block');\n";
};

Blockly.Python["test_react_date_field"] = function (block) {
  return "console.log(" + block.getField("DATE").getText() + ");\n";
};

Blockly.Python["test_operator"] = function (block) {
  var value_one = Blockly.Python.valueToCode(
    block,
    "ONE",
    Blockly.Python.ORDER_ATOMIC
  )
    ? Blockly.Python.valueToCode(block, "ONE", Blockly.Python.ORDER_ATOMIC)
    : "0";
  var value_two = Blockly.Python.valueToCode(
    block,
    "TWO",
    Blockly.Python.ORDER_ATOMIC
  )
    ? Blockly.Python.valueToCode(block, "TWO", Blockly.Python.ORDER_ATOMIC)
    : "0";
  var value_three = Blockly.Python.valueToCode(
    block,
    "THREE",
    Blockly.Python.ORDER_ATOMIC
  )
    ? Blockly.Python.valueToCode(block, "THREE", Blockly.Python.ORDER_ATOMIC)
    : "0";

  var code = value_one + " * " + value_two + " * " + value_three;

  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python["graph_get_x"] = function (block) {
  // x variable getter.
  return ["x", Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python["graph_set_y"] = function (block) {
  // y variable setter.

  var argument0 = Blockly.Python.valueToCode(
    block,
    "VALUE",
    Blockly.Python.ORDER_ATOMIC
  )
    ? Blockly.Python.valueToCode(block, "VALUE", Blockly.Python.ORDER_ATOMIC)
    : "";

  // var argument0 = Blockly.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ASSIGNMENT) || '';
  return (
    "# Python program to draw square\n" +
    "# using Turtle Programming\n" +
    "import turtle\n" +
    "skk = turtle.Turtle()\n" +
    " \n" +
    "for i in range(4):\n" +
    "    skk.forward(50)\n" +
    "    skk.right(90)\n" +
    "     \n" +
    "turtle.done()"
  );

  //   return (
  //       "import time\n" +
  //       'print("Hello World : " + str(time.time()))\n' +
  //       "\n" +
  //       "import numpy as np\n" +
  //       "print(np.linspace(0, 1, 15))\n" +
  //       "\n" +
  //       "import matplotlib.pyplot as plt\n" +
  //       "plt.plot([1, 2, 3])\n" +
  //       "plt.show()\n"
  //   );
  // };
};

Blockly.Python["draw_stamp"] = function (a) {
  Blockly.Python.definitions_.import_turtle =
    "import turtle\nturtle=turtle.Turtle()";
  return "turtle.stamp()\n";
};
