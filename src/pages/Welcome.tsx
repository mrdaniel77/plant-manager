import React from 'react';
import { SafeAreaView, 
        Text,
        View,
        Image, 
        TouchableOpacity, 
    } from 'react-native';

import wateringImg from '../../assets/watering.png';
import styles from '../Styles/style';
import {Feather} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export  function Welcome(){
    
    const navigation = useNavigation();

    function handleStart(){
        navigation.navigate('UserIdentification')
    }

    return (
            <SafeAreaView style={styles.containerWel}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>
                        Gerencie {'\n'} 
                        suas plantas de {'\n'}
                        forma fácil...
                    </Text>
                    
                    <Image 
                        style={styles.img} 
                        source={wateringImg} 
                        
                    />
                    
                    <Text style={styles.subtitle}>
                        Não esqueça mais de regar suas plantas. 
                        Nós cuidamos de lembrar você sempre que precisar.
                    </Text>
                    
                    <TouchableOpacity style={styles.button}
                        onPress={handleStart}
                    
                    >

                            <Feather 
                                name="chevron-right"
                                style={styles.buttonIcons}
                            />
                    </TouchableOpacity>
                </View>
           </SafeAreaView>
    )
}

