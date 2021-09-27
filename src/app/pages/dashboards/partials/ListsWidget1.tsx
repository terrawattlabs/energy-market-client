/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG } from "../../../../_start/helpers";
import { Dropdown1 } from "../../../../_start/partials/content/dropdown/Dropdown1";

import {useState, useEffect} from 'react'
import { TransactionRows } from "./TransactionRows";

type Props = {
  className: string;
};

const useFetch = (url: string)=>{

  const [data, setData] = useState({isLoading: true, data: null});
  const getDataFromAPI = async (url: string) =>{
      const res = await fetch(url, {headers: {'Access-Control-Allow-Origin': "*"}});
      const data = await res.json();
      setData({isLoading: false, data: data})
  }   
  useEffect(()=>{
      getDataFromAPI(url)
  }, [])

  return data
}

const ListsWidget1: React.FC<Props> = ({ className }) => {
  const thingFetchResponse = useFetch('http://localhost:4000/energio/getThings');
  if(thingFetchResponse.isLoading) {
    return (<h1>Loading...</h1>)
} if(thingFetchResponse !==null){
    return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header align-items-center border-0 mt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bolder text-dark fs-3">Timeline</span>
          <span className="text-muted mt-2 fw-bold fs-6">
            Transactions completed on the network
          </span>
        </h3>
        <div className="card-toolbar">
          {/* begin::Dropdown */}
          <button
            type="button"
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <KTSVG
              path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
              className="svg-icon-1"
            />
          </button>
          <Dropdown1 />
          {/* end::Dropdown */}
        </div>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body pt-3">
        {/* <begin::Timeline */}
        <div className="timeline-label">
    

          <TransactionRows className="card-stretch mb-5 mb-xxl-8" ></TransactionRows>

          
        </div>
        {/* <end::Timeline */}
      </div>

      {/* <end: Card Body */}
    </div>
  );
} else {
  return null
}
}

export { ListsWidget1 };
