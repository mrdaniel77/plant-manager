import React from "react";
import {Text,TextInput,View} from 'react-native'
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import styles from "../Styles/style";
import {SvgFromUri} from 'react-native-svg';

interface PlantProps extends RectButtonProps {
    data:{
        name:string;
        photo:string;
    }
}

export const PlantCardPrimary = ({data, ...rest} : PlantProps) => {
    return(
        <RectButton
            style={styles.containerCard}
            {...rest}
        >
            <SvgFromUri 
                uri={data.photo} 
                width={70}
                height={70} 
            />
            <Text style={styles.textCard}>
                {data.name}
            </Text>
        </RectButton>
        
    )
}