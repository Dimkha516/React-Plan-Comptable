import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AllClass from "./pages/AllClass";
import Class1 from "./pages/Class1";
import Class3 from "./pages/Class3";
import Class2 from "./pages/Class2";
import Class4 from "./pages/Class4";
import Class5 from "./pages/Class5";
import Class6 from "./pages/Class6";
import Class7 from "./pages/Class7";
import Class8 from "./pages/Class8";



const App = () => {
  
  return(
    <div>
      <BrowserRouter>
        <Switch>

        <Route path="/" exact component={AllClass} />

        <Route path="/class1" exact component={Class1} />

        <Route path="/class2" exact component={Class2} />

        <Route path="/class3" exact component={Class3} />

        <Route path="/class4" exact component={Class4} />

        <Route path="/class5" exact component={Class5} />

        <Route path="/class6" exact component={Class6} />

        <Route path="/class7" exact component={Class7} />

        <Route path="/class8" exact component={Class8} />
        </Switch>
      
      </BrowserRouter>
    </div>
  )
};
  

export default App;