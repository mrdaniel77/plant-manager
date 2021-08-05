import React from "react";
import { View} from 'react-native'

import LottieView from 'lottie-react-native';
import LoadAnimation from '../../assets/load.json'
import styles from "../Styles/style";

export function Load(){
    return(
        <View style={styles.containerLoad}>
            <LottieView 
                source={LoadAnimation}
                autoPlay
                loop
                style={styles.animationLoad}
            />

        </View>
    )
}
