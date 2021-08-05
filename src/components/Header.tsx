import React from 'react'
import { Text, View, Image } from 'react-native'

import styles from '../Styles/style';
import imgUser from '../../assets/daniel.png'

export function Header(){
    return (
        <View style={styles.containerHead}>
            <View>
                <Text style={styles.greetingHead} >Olá</Text>
                <Text style={styles.userNameHead}>Daniel</Text>
            </View>
            <Image source={imgUser} style={styles.imgHead} />
        </View>
    )
}