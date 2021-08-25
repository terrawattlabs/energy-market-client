import { Button, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import {useEffect, useState} from "react";
import { ChartHolder } from "../chart/chart";
import { SiteStatus } from "../status/status";
import { ThingDiv } from "../thing/ThingDiv";


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
export const Dashboard: React.FC<Props> = ({name}) =>{
    const thingFetchResponse = useFetch('/api/getThings')
    console.log(thingFetchResponse);

    if(thingFetchResponse.isLoading) {
        return (<h1>Loading...</h1>)
    } if(thingFetchResponse !==null){
        return (
            <>
            <SiteStatus></SiteStatus>
            <Flex justify="space-around" mt="10">
                {
                    //@ts-ignore
                     thingFetchResponse!.data.map((t)=>{
                        return <ThingDiv thing={t}></ThingDiv>
                    })
                }
                   
            </Flex>
            <ChartHolder></ChartHolder>
            </>
        )
    }
}