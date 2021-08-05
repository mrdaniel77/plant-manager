import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { } from 'react-native'

import { Welcome } from "../pages/Welcome";
import { Confirmation } from "../pages/Confirmation";
import { UserIdentification } from "../pages/Useridentification";
import { PlantSelect } from "../pages/PlantSelect";

import styles from "../Styles/style";
import colors from "../Styles/colors";
import fonts from "../Styles/fonts";

const stackRoutes = createStackNavigator(); 

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
        cardStyle:{
            backgroundColor:colors.white
        },
    }}
    >
        <stackRoutes.Screen
            name="Welcome"
            component={Welcome}
        />
         <stackRoutes.Screen
            name="Confirmation"
            component={Confirmation}
        />
         <stackRoutes.Screen
            name="UserIdentification"
            component={UserIdentification}
        />
        <stackRoutes.Screen 
            name="PlantSelect"
            component={PlantSelect}
        
        />
        </stackRoutes.Navigator>

)

export default AppRoutes;
    
