import React from "react";
import{ SafeAreaView,Text,View

        } from 'react-native'

import styles from "../Styles/style";
import { Button } from "../components/Button";
import colors from "../Styles/colors";
import fonts from "../Styles/fonts";
import { useNavigation } from "@react-navigation/native";
import { PlantSelect } from "./PlantSelect";

export function Confirmation(){
    const navigation = useNavigation();

    function handleMoveOn(){
        navigation.navigate('PlantSelect');
    }

    return(
        <SafeAreaView style={styles.containerConf}>
            <View style={styles.contentConf}>
                <Text style={styles.emojiConf}>
                    😉
                </Text>

                <Text style={styles.titleConf}>
                    Prontinho...
                </Text>

                <Text style={styles.subtitleConf}>
                    Agora vamos começar a cuidar das 
                    suas plantinhas com muito cuidado
                </Text>

                <View style={styles.footerConf}>
                    <Button 
                        title={'Começar'}
                        onPress={handleMoveOn}
                    />
                </View>
            </View>
        </SafeAreaView>

    )
}