import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { RootState } from "../setup";
import { ThemeProvider } from "../_start/layout/core";
import { MasterLayout } from "../_start/layout/MasterLayout";
import { Logout } from "./modules/auth/Logout";
import { PrivateRoutes } from "./routing/PrivateRoutes";
import { PublicRoutes } from "./routing/PublicRoutes";

type Props = {
  basename: string;
};

const App: React.FC<Props> = ({ basename }) => {
  const isAuthorized = useSelector<RootState>(
    ({ auth }) => auth.user,
    shallowEqual
  );


  // const localAvail = async () =>{
  //   fetch('http://192.168.86.160:4000/api/status', {method: 'GET'})
  //   .then((r)=>{
  //     // yep the local is available, redirect the user to the locally hosted version of the app
  //     console.log('I was able to fetch from the RBP IP address, so Im going to redirect the user there')
  //     window.location.href = 'http://192.168.86.160:4000'; 
  //   })
  //   .catch((err)=>{
  //     console.log('Got an error from the fetch, keeping the user here and there should be an error printed below')
  //     // got an error from the fetch, meaning the local is not available. Keep the user here and log the error just for dev
  //       console.log(err)
  //   })
  // };

  // console.log(window.location.href.indexOf('192.168.86.160'))

  // //check if the user is already on the locally running instance (just seeing if the current window href includes the specific IP)
  // if(window.location.href.indexOf('192.168.86.160') > -1) {
  //   console.log('on the local!')
  //   // if already on the local, just do nothing
  // } else {
  //   console.log('Not on the local')
  //   // not already  on the local? no problem check to see if the local is available for usre
  //   localAvail();
   
  // }


  return (
    <BrowserRouter basename={basename}>
      <ThemeProvider>
        <Switch>
          <Route path="/logout" component={Logout} />
          {!isAuthorized ? (
            <Route>
              <PublicRoutes />
            </Route>
          ) : (
            <>
              <MasterLayout>
                <PrivateRoutes />
              </MasterLayout>
            </>
          )}
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export { App };
