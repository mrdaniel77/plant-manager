import React from "react";
import {} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";

import StackRoutes from './stack.route' 


const Routes = () =>  (
    <NavigationContainer>
        <StackRoutes />
    </NavigationContainer>
)

export default Routes;