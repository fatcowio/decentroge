import React, { lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AccessibleNavigationAnnouncer from "./components/AccessibleNavigationAnnouncer";
import GIF from "../src/assets/img/splash.gif";

const Layout = lazy(() => import("./containers/Layout"));
const Login = lazy(() => import("./pages/Login"));
const CreateAccount = lazy(() => import("./pages/CreateAccount"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword"));
function App() {
  const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 3000);
  // }, []);

  // if (isLoading) {
  //   return (
  //     <div className="w-full flex flex-col items-center justify-center h-screen p-6 text-lg font-medium text-gray-600 dark:text-gray-400 dark:bg-gray-900">
  //       <img src={GIF} className="h-56 " />
  //     </div>
  //   );
  // } else {
  return (
    <>
      <Router>
        <AccessibleNavigationAnnouncer />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/forgot-password" component={ForgotPassword} />

          {/* Place new routes over this */}
          <Route path="/app" component={Layout} />
          {/* If you have an index page, you can remothis Redirect */}
          <Redirect exact from="/" to="/login" />
        </Switch>
      </Router>
    </>
  );
  // }
}

export default App;
