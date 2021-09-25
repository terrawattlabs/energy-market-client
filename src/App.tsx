import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
 Spacer,
 Flex,
 Center,
 Square
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { Dashboard } from "./components/dashboard/Dashboard"


// container

//holding cards
// each card is a single "thing"


export const App = () => (
  <ChakraProvider theme={theme}>
    <Dashboard>

    </Dashboard>
  </ChakraProvider>
)
