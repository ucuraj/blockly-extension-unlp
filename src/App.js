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
 * @fileoverview Main React component that includes the Blockly component.
 * @author samelh@google.com (Sam El-Husseini)
 */

import React from 'react';
import './App.css';

import * as Blockly from 'blockly/core';
import 'blockly/blocks';
import * as Es from 'blockly/msg/es';

import BlocklyComponent, { Block, Value, Field, Category, Shadow } from './Blockly';
import BlocklyJS from 'blockly/javascript';

import './blocks/customblocks';
import './generator/generator';

// Traduccion de bloques al español
Blockly.setLocale(Es);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.simpleWorkspace = React.createRef();
  }

  generateCode = () => {
    var code = BlocklyJS.workspaceToCode(
      this.simpleWorkspace.current.workspace
    );
    console.log(code);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.generateCode} className="button">Convert</button>
          <BlocklyComponent ref={this.simpleWorkspace}
          readOnly={false} trashcan={true} media={'media/'}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true
          }}
          initialXml={`
            <xml xmlns="http://www.w3.org/1999/xhtml">
            </xml>
          `}>

            {/* MENU EN ESPAÑOL
            
              El atributo name en categoria es el que se visualiza en el menu

            */}

            <Category name="Lógica" colour="160">  
              <Category name="Si" colour="%{BKY_LOGIC_HUE}">
                <Block type="controls_if"></Block>
                <Block type="controls_if">
                  <mutation else="1"></mutation>
                </Block>
                <Block type="controls_if">
                  <mutation elseif="1" else="1"></mutation>
                </Block>
              </Category>
              <Category name="Booleano" colour="%{BKY_LOGIC_HUE}">
                <Block type="logic_compare"></Block>
                <Block type="logic_operation"></Block>
                <Block type="logic_negate"></Block>
                <Block type="logic_boolean"></Block>
                <Block type="logic_null"></Block>
                <Block type="logic_ternary"></Block>
              </Category>
            </Category>
            
            <Category name="Bucles" colour="%{BKY_LOOPS_HUE}">
              <Block type="controls_repeat_ext">
                <Value name="TIMES">
                  <Block type="math_number">
                    <Field name="NUM">10</Field>
                  </Block>
                </Value>
              </Block>
              <Block type="controls_whileUntil"></Block>
              <Block type="controls_for">
                <Field name="VAR">i</Field>
                <Value name="FROM">
                  <Block type="math_number">
                    <Field name="NUM">1</Field>
                  </Block>
                </Value>
                <Value name="TO">
                  <Block type="math_number">
                    <Field name="NUM">10</Field>
                  </Block>
                </Value>
                <Value name="BY">
                  <Block type="math_number">
                    <Field name="NUM">1</Field>
                  </Block>
                </Value>
              </Block>
              <Block type="controls_forEach"></Block>
              <Block type="controls_flow_statements"></Block>
            </Category>

            <Category name="Matemática" colour="%{BKY_MATH_HUE}">
              <Block type="math_number">
                <Field name="NUM">123</Field>
              </Block>
              <Block type="test_operator"></Block>
              <Block type="math_arithmetic"></Block>
              <Block type="math_single"></Block>
              <Block type="math_trig"></Block>
              <Block type="math_constant"></Block>
              <Block type="math_number_property"></Block>
              <Block type="math_round"></Block>
              <Block type="math_on_list"></Block>
              <Block type="math_modulo"></Block>
              <Block type="math_constrain">
                <Value name="LOW">
                  <Block type="math_number">
                    <Field name="NUM">1</Field>
                  </Block>
                </Value>
                <Value name="HIGH">
                  <Block type="math_number">
                    <Field name="NUM">100</Field>
                  </Block>
                </Value>
              </Block>
              <Block type="math_random_int">
                <Value name="FROM">
                  <Block type="math_number">
                    <Field name="NUM">1</Field>
                  </Block>
                </Value>
                <Value name="TO">
                  <Block type="math_number">
                    <Field name="NUM">100</Field>
                  </Block>
                </Value>
              </Block>
              <Block type="math_random_float"></Block>
              <Block type="math_atan2"></Block>
            </Category>

            <Category name="Texto" colour="%{BKY_TEXTS_HUE}">
              <Block type="text"></Block>
              <Block type="text_multiline"></Block>
              <Block type="text_join"></Block>
              <Block type="text_append">
                <Value name="TEXT">
                  <Shadow type="text"></Shadow>
                </Value>
              </Block>
              <Block type="text_length">
                <Value name="Value">
                  <Shadow type="text">
                    <Field name="TEXT">abc</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="text_isEmpty">
                <Value name="Value">
                  <Shadow type="text">
                    <Field name="TEXT"></Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="text_indexOf">
                <Value name="Value">
                  <Block type="variables_get">
                    <Field name="VAR">text</Field>
                  </Block>
                </Value>
                <Value name="FIND">
                  <Shadow type="text">
                    <Field name="TEXT">abc</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="text_charAt">
                <Value name="Value">
                  <Block type="variables_get">
                    <Field name="VAR">text</Field>
                  </Block>
                </Value>
              </Block>
              <Block type="text_getSubstring">
                <Value name="STRING">
                  <Block type="variables_get">
                    <Field name="VAR">text</Field>
                  </Block>
                </Value>
              </Block>
              <Block type="text_changeCase">
                <Value name="TEXT">
                  <Shadow type="text">
                    <Field name="TEXT">abc</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="text_trim">
                <Value name="TEXT">
                  <Shadow type="text">
                    <Field name="TEXT">abc</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="text_count">
                <Value name="SUB">
                  <Shadow type="text"></Shadow>
                </Value>
                <Value name="TEXT">
                  <Shadow type="text"></Shadow>
                </Value>
              </Block>
              <Block type="text_replace">
                <Value name="FROM">
                  <Shadow type="text"></Shadow>
                </Value>
                <Value name="TO">
                  <Shadow type="text"></Shadow>
                </Value>
                <Value name="TEXT">
                  <Shadow type="text"></Shadow>
                </Value>
              </Block>
              <Block type="text_reverse">
                <Value name="TEXT">
                  <Shadow type="text"></Shadow>
                </Value>
              </Block>              
            </Category>

            <Category name="Listas" colour="%{BKY_LISTS_HUE}">
              <Block type="lists_create_empty"></Block>
              <Block type="lists_create_with"></Block>
              <Block type="lists_repeat">
                <Value name="NUM">
                  <Block type="math_number">
                    <Field name="NUM">5</Field>
                  </Block>
                </Value>
              </Block>
              <Block type="lists_length"></Block>
              <Block type="lists_isEmpty"></Block>
              <Block type="lists_indexOf"></Block>
              <Block type="lists_getIndex"></Block>
              <Block type="lists_setIndex"></Block>
            </Category>

            <Category name="Colores" colour="%{BKY_COLOUR_HUE}">
              <Block type="colour_picker"></Block>
              <Block type="colour_random"></Block>
              <Block type="colour_rgb">
                <Value name="RED">
                  <Shadow type="math_number">
                    <Field name="NUM">100</Field>
                  </Shadow>
                </Value>
                <Value name="GREEN">
                  <Shadow type="math_number">
                    <Field name="NUM">50</Field>
                  </Shadow>
                </Value>
                <Value name="BLUE">
                  <Shadow type="math_number">
                    <Field name="NUM">0</Field>
                  </Shadow>
                </Value>
              </Block>
              <Block type="colour_blend">
                <Value name="COLOUR1">
                  <Shadow type="colour_picker">
                    <Field name="COLOUR">#ff0000</Field>
                  </Shadow>
                </Value>
                <Value name="COLOUR2">
                  <Shadow type="colour_picker">
                    <Field name="COLOUR">#3333ff</Field>
                  </Shadow>
                </Value>
                <Value name="RATIO">
                  <Shadow type="math_number">
                    <Field name="NUM">0.5</Field>
                  </Shadow>
                </Value>
              </Block>
            </Category>
            
            <Category name="Variables" custom="VARIABLE" colour="%{BKY_VARIABLES_HUE}">
            </Category>
            <Category name="Funciones" custom="PROCEDURE" colour="%{BKY_PROCEDURES_HUE}">
            </Category>          
      
          </BlocklyComponent>
        </header>
      </div>
    );
  }
}

export default App;