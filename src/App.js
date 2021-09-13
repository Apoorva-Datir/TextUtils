import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import About from "./components/About";
import React, { useState } from "react";

// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null); //we'll use it as an object.

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey"; //set light bg for dark navbar'
      showAlert("Dark mode is enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#8d8dff";
      showAlert("Light mode is enabled", "success");
    }
  };

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* here you can change it as many times as you want */}
        <Alert alert={alert} />
        <div className="container my-5">
          {/* my-5 is a property in bootstrap it give a margin of 5 along y axis(top and bottom) in bootstrap */}

          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route> */}

            {/* <Route exact path="/"> */}
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze"
                mode={mode}
              />
            {/* </Route> */}
          {/* </Switch> */}

          {/* added a container here to make the textarea look a bit better and get it to center */}
        </div>
      {/* </Router> */}
    </>
  ); //JSX
}

export default App;
