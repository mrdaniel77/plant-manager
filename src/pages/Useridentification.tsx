import React, {useState} from "react";
import {SafeAreaView,
        Text,
        TextInput,
        View,
        KeyboardAvoidingView,
        TouchableWithoutFeedback,
        Platform,
        Keyboard} from 'react-native';

    import styles from "../Styles/style";
    import { Button } from "../components/Button";
    import { useNavigation } from "@react-navigation/native";
        

    export function UserIdentification(){
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false); 
    const [name, setName] = useState<string>();

    const navigation = useNavigation();
    
        function handleInputBlur(){
            setIsFocused(false);
            setIsFilled(!!name); 
    }   
        function handleInputFocus() {
            setIsFocused(true);
    }
        function handleInputChange(value: string) {
            setIsFilled(!!value);
            setName(value);
    }
        

        function handleSubmit (){
            navigation.navigate('Confirmation')
        }

    return(
        <SafeAreaView style={styles.containerUser}>
            <KeyboardAvoidingView 
                style={styles.containerUser}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                
                >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <View style={styles.headerUser}>
                                <Text style={styles.emoji}>
                                    { isFilled ? '😀' : '🤔' }
                                </Text>

                                <Text style={styles.titleUser}>
                                    Como podemos {'\n'}
                                    chamar você ?
                                </Text>

                                <TextInput 
                                    style={[
                                        styles.inputUser,
                                        (isFocused || isFilled) && 
                                        styles.textUser
                                    ]} 
                                    placeholder={'Digite seu nome'}
                                    onBlur={handleInputBlur}
                                    onFocus={handleInputBlur}
                                    onChangeText={handleInputChange}
                                />

                                <View style={styles.footerBut}>
                                    <Button 
                                        title="Confirmar"
                                        onPress={handleSubmit}
                                    />      
                                </View>
                            </View>

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}