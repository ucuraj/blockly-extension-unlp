import React, { createRef, useEffect, useState } from "react";
import BlocklyComponent, {
  Block,
  Category,
  Field,
  Shadow,
  Value,
} from "./Blockly";

import * as Blockly from "blockly";
import "blockly/blocks";

import "./blocks/customblocks";
import "./generator/generator";

import "blockly/python";
import * as Es from "blockly/msg/es";
import BlocksMenu from "./components/BlocksMenu";
import { CircularProgress } from "@material-ui/core";

Blockly.setLocale(Es);

const Home = () => {
  const simpleWorkspace = createRef();
  const [loaded, setLoaded] = useState(false);
  const [pyodideLoaded, setPyodideLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [output, setOutput] = useState(false);
  const [code, setCode] = useState();

  const runScript = (code) => {
    if (pyodideLoaded) {
      const pyodide = window.pyodide;
      pyodide.runPython(code);
      if (code.includes("plt")) {
        setImageLoaded(true);
        document.getElementById("pyplotfigure").src = pyodide.globals.img_str;
      } else {
        setImageLoaded(false);
      }
      setOutput(pyodide.globals.value);
    }
  };

  useEffect(() => {
    window.languagePluginLoader.then(() => {
      setLoaded(true);
      console.log("loaded");
    });
  }, []);

  useEffect(() => {
    if (loaded) {
      const pyodide = window.pyodide;
      pyodide.loadPackage(["matplotlib"]).then(() => {
        console.log("matplotlib loaded");
        setPyodideLoaded(true);
      });
    }
  }, [loaded]);

  useEffect(() => console.log(output), [output]);

  // useEffect(() => {
  //   console.log(code);
  //   runScript(code);
  // }, [code]);

  const generateCode = () => {
    if (simpleWorkspace.current) {
      setCode(
        Blockly["Python"].workspaceToCode(simpleWorkspace.current.workspace)
      );
    }
  };

  return loaded ? (
    <div className="App">
      <pre id="output" />
      <div id="pyplotdiv">
        {
          <img
            id="pyplotfigure"
            alt={"pyplotfigure"}
            style={{ display: imageLoaded ? "block" : "none" }}
          />
        }
        {output}
      </div>
      <div className="blocklyDiv2">
        <textarea
          id="anarea"
          className="codearea"
          readOnly={true}
          value={code}
        />
      </div>{" "}
      <button type="button" onClick={() => runScript(code)}>
        Run
      </button>
      <div onClick={generateCode}>
        <BlocklyComponent
          ref={simpleWorkspace}
          className={"blocklyDiv"}
          readOnly={false}
          trashcan={true}
          media={"media/"}
          move={{
            scrollbars: true,
            drag: true,
            wheel: true,
          }}
          initialXml={``}
        >
          <BlocksMenu />
        </BlocklyComponent>
      </div>
    </div>
  ) : (
    <div
      style={{
        position: "absolute",
        top: "50vh",
        bottom: "50vh",
        left: "50vw",
        right: "50vw",
      }}
    >
      <CircularProgress />
    </div>
  );
};
export default Home;
