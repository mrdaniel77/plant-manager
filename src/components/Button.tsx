import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps  } from 'react-native'

    import colors from "../Styles/colors";
    import fonts from "../Styles/fonts";
    import styles from '../Styles/style'

    interface ButtonProps extends TouchableOpacityProps {
        title:string
    }

export function Button({title, ...rest } : ButtonProps){
    return(
        <TouchableOpacity 
            style={styles.containerBut}
            {...rest}
        >
            <Text style={styles.textBut}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}