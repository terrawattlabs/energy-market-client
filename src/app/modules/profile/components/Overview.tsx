import React, { useState, useEffect } from "react";
import { useParams } from "react-router";




export const Overview: React.FC = () => {

  const [data, setData] = useState({isLoading: true, data: null});
  const { thing }: any = useParams();

  const useFetch = (url: string)=>{

  
    const getDataFromAPI = async (url: string) =>{
        const res = await fetch(url, {headers: {'Access-Control-Allow-Origin': "*"}});
        const data = await res.json();
        setData({isLoading: false, data: data})
    }   
    useEffect(()=>{
        getDataFromAPI(url)
    }, [])
  
    return data
  };

  const fullThing = useFetch(`${process.env.REACT_APP_BACKEND_URL}/energio/getThing/${thing}`);

  if(fullThing.isLoading && data !== null){
    return (<p>Loading...</p>)
  } if(fullThing !== null) {
    return(
      <>
        {JSON.stringify(fullThing.data)}

      </>
    )
  } else {
    return(
      <>
        Woops, something went wrong
      </>
    )
  }
};