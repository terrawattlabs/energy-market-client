/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  EngageWidget5,
  StatsWidget1,
  StatsWidget2,
  StatsWidget6,
  TablesWidget3,
  TablesWidget4
} from "../../../../_start/partials/widgets";


//move components into this directory!
import {  ListsWidget1} from '../partials/ListsWidget1'
import { TablesWidget1 } from "../partials/TablesWidget1";
import { TablesWidget2 } from "../partials/TablesWidget2";
import { CreateAppModal } from "../_modals/create-app-stepper/CreateAppModal";

export const StartDashboardPage: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
  
        <div className="col-12">
          <TablesWidget2 className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
   
      {/* end::Row */}

      {/* begin::Row */}
      <div className="row g-0 g-xl-5 g-xxl-8">
        <div className="col-12">
          <ListsWidget1 className="card-stretch mb-5 mb-xxl-8" />
        </div>
      </div>
      {/* end::Row */}
    </>
  );
};
