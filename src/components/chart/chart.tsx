import { Badge, Box, Divider, Image } from "@chakra-ui/react";
import React from "react";
import { ProgressPlugin } from "webpack";
import {FaBeer, FaRegLightbulb} from 'react-icons/fa'
import ChartsEmbedSDK from "@mongodb-js/charts-embed-dom";
import ReactDOM from "react-dom";

interface Props {
}

// const renderChart = async () =>{
//     const sdk = new ChartsEmbedSDK({
//         baseUrl: "https://charts.mongodb.com/charts-project-0-hvcsl"
// })
//     const chart = await sdk.createChart({
//         chartId: "8fca9d1f-f8d0-4034-8efc-b355a334e2ac"
//     });

//     chart.render(document.getElementById('chart-holder'));
// }


// setTimeout(renderChart(),3000)

const myStles:any = {
    background: "#FFFFFF",
    border: 'none',
    borderRadius: "2px",
    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"
}

export const ChartHolder: React.FC<Props> = () =>{
    return (
        <iframe style={myStles} width="640" height="480" src="https://charts.mongodb.com/charts-project-0-hvcsl/embed/charts?id=8fca9d1f-f8d0-4034-8efc-b355a334e2ac&theme=light"></iframe>
    )
}