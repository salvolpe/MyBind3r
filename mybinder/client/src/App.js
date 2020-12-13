import React, { Suspense } from "react";
import { Router, Route, Link, Switch } from "./utils/react-router";
import { ThemeProvider } from "@material-ui/core/styles";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import DirectoryPage from "./pages/DirectoryPage";
import BinderPage from "./pages/BinderPage";
import Theme from "./utils/Theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Suspense fallback="loading">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/sign-up" component={SignUpPage} />
              <Route exact path="/directory" component={DirectoryPage} />
              <Route exact path="/bind3r" component={BinderPage} />
            </Switch>
          </div>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
