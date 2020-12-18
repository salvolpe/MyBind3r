import React, { Suspense } from "react";
import { Router, Route, Link, Switch } from "./utils/react-router";
import { ThemeProvider } from "@material-ui/core/styles";
import { loadCSS } from "fg-loadcss";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import DirectoryPage from "./pages/DirectoryPage";
import BinderPage from "./pages/BinderPage";
import Theme from "./utils/Theme";
import "./App.css";

function App() {
  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <Suspense fallback="loading">
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/sign-up" component={SignUpPage} />
              <Route exact path="/:user/directory" component={DirectoryPage} />
              <Route
                exact
                path="/:user/bind3r/:script"
                component={BinderPage}
              />
            </Switch>
          </div>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;

/***PLACE THIS CODE IN ANYTHING THAT ISNT FINISHED***/

/* 

With import statements:
import ComingSoon from "../components/ComingSoon";

Within main function (e.g. const BinderPage = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogClose = () => {
    setDialogOpen(false);
  };
})

Within the return() or render() for the main function, at the bottom before the closing </div> or </Grid>
<ComingSoon onClose={handleDialogClose} open={dialogOpen} />

Assign { () => setDialogOpen(true)} on any buttons/clickables that are incomplete

*/
