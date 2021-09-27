/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { toAbsoluteUrl } from "../../../../_start/helpers";
import { KTSVG } from "../../../../_start/helpers";

import {useEffect, useState} from 'react';
import { batch } from "react-redux";

type Props = {
  className: string;
  innerPadding?: string;
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

const ThingsRows: React.FC<Props> = ({ className, innerPadding = "" }) => {
  const thingFetchResponse = useFetch('http://localhost:4000/energio/getThings');
  console.log(thingFetchResponse)
  if(thingFetchResponse.isLoading) {
    return (<h1>Loading...</h1>)
  }if(thingFetchResponse !==null){
     //@ts-ignore
     return thingFetchResponse!.data.map((t)=>{
        return (
            <tr>
            <td className="px-0 py-3">
            <div className="symbol symbol-55px mt-1 me-5">
                <span className="symbol-label bg-light-primary align-items-end">
                <img
                    alt="Logo"
                    src={toAbsoluteUrl(
                    "/media/svg/avatars/001-boy.svg"
                    )}
                    className="mh-40px"
                />
                </span>
            </div>
            </td>
            <td className="px-0">
            <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                {t.name}
            </a>
            <span className="text-muted fw-bold d-block mt-1">
                {t.orders[0].type}
            </span>
            </td>
            <td></td>
            <td className="text-end">
            <span className="text-gray-800 fw-bolder d-block fs-6">
                ${t.orders[0].price}
            </span>
            <span className="text-muted fw-bold d-block mt-1 fs-7">
            {t.orders[0].amount} watts
            </span>
            </td>
            <td className="text-end">
            <span className="fw-bolder text-primary"></span>
            </td>
            <td className="text-end pe-0">
            <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                <KTSVG
                className="svg-icon-4"
                path="/media/icons/duotone/Navigation/Arrow-right.svg"
                />
            </a>
            </td>
            </tr>

            )
     })
            
} else {
    return null;

}
  }

export {ThingsRows}