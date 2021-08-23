import { Badge, Box, Divider, Image } from "@chakra-ui/react";
import React from "react";
import { ProgressPlugin } from "webpack";
import {FaBeer, FaRegLightbulb} from 'react-icons/fa'


class Order {
    id: string | undefined;
    amount: number| undefined;
    type: string| undefined;
    price: number | undefined;

}

interface Props {
    thing: {
        name: string,
        orders: Order[],
        react_icon: string,
        img_url: string
    }
}

export const ThingDiv: React.FC<Props> = ({thing}) =>{
    return (
        <Box maxW="m" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={thing.img_url} boxSize="10em"/>
            <Box p="6">
            <Box
                mt="1"
                mb="1"
                fontWeight="semibold"
                as="h2"
                lineHeight="tight"
                isTruncated
                >
            </Box>
            <Box>
            Current Orders
            <Box as="span" color="gray.600" fontSize="sm">
                <Divider></Divider>
            </Box>
            </Box>

                <Box d="flex" alignItems="baseline">
                    
                    {thing.orders.map((order: Order)=>{
                        return (<>
                         <Badge borderRadius="full" px="2" colorScheme="teal">
                            {order.type}
                        </Badge>
                        <Box
                            color="gray.500"
                            fontWeight="semibold"
                            letterSpacing="wide"
                            fontSize="xs"
                            textTransform="uppercase"
                            ml="2"
                            >
                            {order.amount} kw &bull; ${order.price}/kwh
                        </Box>
                        </>)
                    })}
                    </Box>
                </Box>
            </Box>
    )
}