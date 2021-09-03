import React from "react";
import PropTypes from "prop-types";
import { Block, Category, Field, Shadow, Value } from "../../Blockly";

const BlocksMenu = () => {
  return (
    <>
      {/* MENU EN ESPAÑOL
      El atributo name en categoria es el que se visualiza en el menu
      */}
      <Category name="Lógica" colour="160">
        <Category name="Si" colour="%{BKY_LOGIC_HUE}">
          <Block type="controls_if" />
          <Block type="controls_if">
            <mutation else="1" />
          </Block>
          <Block type="controls_if">
            <mutation elseif="1" else="1" />
          </Block>
        </Category>
        <Category name="Booleano" colour="%{BKY_LOGIC_HUE}">
          <Block type="logic_compare" />
          <Block type="logic_operation" />
          <Block type="logic_negate" />
          <Block type="logic_boolean" />
          <Block type="logic_null" />
          <Block type="logic_ternary" />
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
        <Block type="controls_whileUntil" />
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
        <Block type="controls_forEach" />
        <Block type="controls_flow_statements" />
      </Category>

      <Category name="Matemática" colour="%{BKY_MATH_HUE}">
        <Block type="math_number">
          <Field name="NUM">123</Field>
        </Block>
        <Block type="test_operator" />
        <Block type="math_arithmetic" />
        <Block type="math_single" />
        <Block type="math_trig" />
        <Block type="math_constant" />
        <Block type="math_number_property" />
        <Block type="math_round" />
        <Block type="math_on_list" />
        <Block type="math_modulo" />
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
        <Block type="math_random_float" />
        <Block type="math_atan2" />
      </Category>

      <Category name="Texto" colour="%{BKY_TEXTS_HUE}">
        <Block type="print" />
        <Block type="text" />
        <Block type="text_multiline" />
        <Block type="text_join" />
        <Block type="text_append">
          <Value name="TEXT">
            <Shadow type="text" />
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
              <Field name="TEXT" />
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
            <Shadow type="text" />
          </Value>
          <Value name="TEXT">
            <Shadow type="text" />
          </Value>
        </Block>
        <Block type="text_replace">
          <Value name="FROM">
            <Shadow type="text" />
          </Value>
          <Value name="TO">
            <Shadow type="text" />
          </Value>
          <Value name="TEXT">
            <Shadow type="text" />
          </Value>
        </Block>
        <Block type="text_reverse">
          <Value name="TEXT">
            <Shadow type="text" />
          </Value>
        </Block>
      </Category>

      <Category name="Listas" colour="%{BKY_LISTS_HUE}">
        <Block type="lists_create_empty" />
        <Block type="lists_create_with" />
        <Block type="lists_repeat">
          <Value name="NUM">
            <Block type="math_number">
              <Field name="NUM">5</Field>
            </Block>
          </Value>
        </Block>
        <Block type="lists_length" />
        <Block type="lists_isEmpty" />
        <Block type="lists_indexOf" />
        <Block type="lists_getIndex" />
        <Block type="lists_setIndex" />
      </Category>

      <Category name="Colores" colour="%{BKY_COLOUR_HUE}">
        <Block type="colour_picker" />
        <Block type="colour_random" />
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

      <Category
        name="Variables"
        custom="VARIABLE"
        colour="%{BKY_VARIABLES_HUE}"
      />

      <Category
        name="Funciones"
        custom="PROCEDURE"
        colour="%{BKY_PROCEDURES_HUE}"
      />

      <Category name="Pruebas" colour="100">
        <Block type="test_operator" />
        <Block type="graph_set_y" x="100" y="100">
          <Value name="VALUE">
            <Block type="math_arithmetic">
              <Field name="OP">POWER</Field>
              <Value name="A">
                <Block type="graph_get_x" />
                <Shadow type="math_number">
                  <Field name="NUM">1</Field>
                </Shadow>
              </Value>
              <Value name="B">
                <Block type="math_number">
                  <Field name="NUM">2</Field>
                </Block>
                <Shadow type="math_number">
                  <Field name="NUM">1</Field>
                </Shadow>
              </Value>
            </Block>
          </Value>
        </Block>
      </Category>
    </>
  );
};

BlocksMenu.propTypes = {
  attachBottom: PropTypes.bool,
  buttonCancelar: PropTypes.object,
  buttonGuardar: PropTypes.object,
  buttonFinalizar: PropTypes.object,
  zIndex: PropTypes.number,
};

export default BlocksMenu;
