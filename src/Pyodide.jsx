import { useEffect } from "react";
import script from "./python/script.py";
import logo from "./logo.svg";
import "./App.css";

const Pyodide = () => {
  // const [output, setOutput] = useState("(loading...)");

  const runScript = (code) => {
    window.pyodide.loadPackage([]).then(() => {
      const pyodide = window.pyodide;
      pyodide.loadPackage(["matplotlib"]).then(() => {
        console.log(pyodide.runPython("print(1 + 2)"));
        console.log(pyodide.runPython(code));
        pyodide.runPython(code);
        console.log(window.pyodide.globals.img_str);
        document.getElementById("pyplotfigure").src = pyodide.globals.img_str;
      });
      // setOutput(output);
    });
  };

  useEffect(() => {
    window.languagePluginLoader.then(() => {
      fetch(script)
        .then((src) => src.text())
        .then(runScript);
    });
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="pyplotdiv">
          <img id="pyplotfigure" alt={"pyplotfigure"} />
        </div>
      </header>
    </div>
  );
};

export default Pyodide;
