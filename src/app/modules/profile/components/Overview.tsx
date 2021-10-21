import React, { useState, useEffect } from "react";
import { Query, Builder, Utils as QbUtils } from "react-awesome-query-builder";
// types
import {
  JsonGroup,
  Config,
  ImmutableTree,
  BuilderProps
} from "react-awesome-query-builder";

// For AntDesign widgets only:
import AntdConfig from "react-awesome-query-builder/lib/config/antd";
import "antd/dist/antd.css"; // or import "react-awesome-query-builder/css/antd.less";
// For Material-UI widgets only:
//import MaterialConfig from "react-awesome-query-builder/lib/config/material";

import "react-awesome-query-builder/lib/css/styles.css";
import "react-awesome-query-builder/lib/css/compact_styles.css"; //optional, for more compact styles


// Choose your skin (ant/material/vanilla):
const InitialConfig = AntdConfig; // or MaterialConfig or BasicConfig


const ruleID = "616f53a56e1b83a2c5c8a741";
// You need to provide your own config. See below 'Config format'
const config: Config = {
  ...InitialConfig,
  fields: {
    duration: {
      label: "Minutes On Today",
      type: "boolean",
      valueSources: ["value"],
      fieldSettings: {
        min: 0,
        max: 1440
      }
    },
    currentBid: {
      label: 'Current Bid Type',
      type: 'select',
      valueSources: ['value'],
      fieldSettings: {
        listValues: [
          { value: 'bid', title: 'Bid' },
          { value: 'ask', title: 'Ask' }
        ],
      }
  },
    is_on: {
    label: 'Is Device On?',
    type: 'boolean',
    operators: ['equal'],
    valueSources: ['value'],
}
  }
};



// You can load query value from your backend storage (for saving see `Query.onChange()`)
const queryValue: JsonGroup = { id: QbUtils.uuid(), type: "group" };




export const Overview: React.FC = () => {

  const [state, setState] = useState({
    tree: QbUtils.checkTree(QbUtils.loadTree(queryValue), config),
    config: config
  });

  const onChange = (immutableTree: ImmutableTree, config: Config) => {
    // Tip: for better performance you can apply `throttle` - see `examples/demo`
    setState({ tree: immutableTree, config: config });

    const jsonTree = QbUtils.getTree(immutableTree);
    // console.log(jsonTree);
    const jsonLogic = QbUtils.jsonLogicFormat(state.tree, state.config)
    const d = {tree: jsonTree, jlog: jsonLogic};
    console.log(d)
    fetch(`${process.env.REACT_APP_BACKEND_URL}/energio/updateRule/${ruleID}`, {method: 'POST', body: JSON.stringify(d), headers: {'Access-Control-Allow-Origin': "*", 'Content-Type': 'application/json'}}).then(x=>console.log(x)).catch(y=>console.log(y))
    // `jsonTree` can be saved to backend, and later loaded to `queryValue`
  };

  const renderBuilder = (props: BuilderProps) => (
    <div className="query-builder-container" style={{ padding: "10px" }}>
      <div className="query-builder qb-lite">
        <Builder {...props} />
      </div>
    </div>
  );

  return (
    <div>
      <Query
        {...config}
        value={state.tree}
        onChange={onChange}
        renderBuilder={renderBuilder}
      />
      <div className="query-builder-result">
        <div>
          JsonLogic:{" "}
          <pre>
            {JSON.stringify(QbUtils.jsonLogicFormat(state.tree, state.config))}
          </pre>
        </div>
      </div>
    </div>
  );
};