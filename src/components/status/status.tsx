import { Box} from "@chakra-ui/react";
import React from "react";
import {useEffect, useState} from "react";


interface Props {

}

const useFetch = (url: string)=>{
    const [data, setData] = useState({isLoading: true, data: null});
    const getDataFromAPI = async (url: string) =>{
        const res = await fetch(url);
        const data = await res.json();
        setData({isLoading: false, data: data})
    }   
    useEffect(()=>{
        getDataFromAPI(url)
    }, [])

    return data
}

//@ts-ignore
export const SiteStatus: React.FC<Props> = ({name}) =>{
    const thingFetchResponse = useFetch('/api/getSiteStatus')
    console.log(thingFetchResponse);

    if(thingFetchResponse.isLoading) {
        return (<h1>Loading...</h1>)
    } if(thingFetchResponse !==null){
        return (
            <>
            {
                //@ts-ignore
            thingFetchResponse.data!.nodes.map((node)=>{
                return <Box>{node.name} is currently at - {node.status} and {node.currentPower}</Box>
            })
            }
            
            </>
        )
    }
}