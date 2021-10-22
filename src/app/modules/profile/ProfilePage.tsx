import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { PageTitle } from "../../../_start/layout/core";
import { Overview } from "./components/Overview";
import { Settings } from "./components/Settings";

const ProfilePage: React.FC = () => {

  
  return (
    <Switch>
      <Route path="/profile/overview/:thing">
        <PageTitle>Overview</PageTitle>
        <Overview />
      </Route>
      <Route path="/profile/settings">
        <PageTitle>Settings</PageTitle>
        <Settings />
      </Route>
      
      <Redirect from="/profile" exact={true} to="/profile/overview" />
      <Redirect to="/profile/overview/:thing" />
    </Switch>
  );
};

export { ProfilePage };
