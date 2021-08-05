import React from "react";
import { Text, View,  } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import colors from "../Styles/colors";
import fonts from "../Styles/fonts";
import styles from "../Styles/style";

interface EnviromentButtonProps extends RectButtonProps {
    title: string;
    active?: boolean;
}

export function EnviromentButton  ({
    title,
    active = false,
    ...rest
} : EnviromentButtonProps){
    return(
        <RectButton
            style={[
                styles.containerEnv,
                active && styles.containerActive]}
            {...rest}
    >
        <Text style={[
                styles.textEnv,
                active && styles.textActive]}>
            {title}
        </Text>
    </RectButton>
    );
}
