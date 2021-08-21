import React from "react";
import { ProgressPlugin } from "webpack";

interface Props {
    name: String
}

export const ThingDiv: React.FC<Props> = ({name}) =>{
    return (
        <div>
            {name}
        </div>
    )
}