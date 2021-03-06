/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { toAbsoluteUrl } from "../../../../_start/helpers";
import { KTSVG } from "../../../../_start/helpers";

import moment from 'moment'

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



const TransactionRows: React.FC<Props> = ({ className, innerPadding = "" }) => {
  const thingFetchResponse = useFetch(`${process.env.REACT_APP_BACKEND_URL}/api/getTransactionList`);
  console.log(thingFetchResponse)
  if(thingFetchResponse.isLoading) {
    return (<h1>Loading...</h1>)
  }if(thingFetchResponse !==null){
     //@ts-ignore
     return thingFetchResponse!.data.map((t)=>{
        return (
   
          <div className="timeline-item" key={t._id}>
            {/* begin::Label */}
            <div className="timeline-label fw-bolder text-gray-800 fs-6">
              {
                  moment(t.updatedAt).fromNow()
              }
            </div>
            {/* end::Label */}

            {/* begin::Badge */}
            <div className="timeline-badge">
              <i className="fa fa-genderless text-danger fs-1"></i>
            </div>
            {/* end::Badge */}

            {/* begin::Desc */}
            <div className="timeline-content fw-bolder text-gray-800 ps-3">
              The <pre>{t.buyer}</pre> purchased {t.amount} watts of energy from the <pre>{t.seller}</pre> for {'$'}{t.price}/kwh and a total of{" "}
              <a href="#" className="text-primary">
                {'$'}{t.price/10000 * t.amount} per hour
              </a>
            </div>
            {/* end::Desc */}
          </div>
          )
     })
            
} else {
    return null;

}
  }

export {TransactionRows}