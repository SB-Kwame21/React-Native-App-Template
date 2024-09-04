import { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

import { globalStyles } from "../../styles/global";
import { signIn } from "../../features/auth/auth";
import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";
import { Colors } from "../../constants/colors";


export default function Login({ navigation }) {
    const [countryCode, setCountryCode] = useState('+231');
    const [token, setToken] = useState('');
    const dispatch = useDispatch();

    // Set token value to AsynStorage
    async function save(value) {
        try {
            await AsyncStorage.setItem('@token', value);
            dispatch(signIn(value))

            console.log('data saved')
        } catch (e) {
            console.log(e)

        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={styles.subcontainer}>
                <Text style={globalStyles.headerText}>Sign in to your Account</Text>
                <Text style={styles.text}>You will receive an SMS to verify your phone number.</Text>

                <View style={styles.TextInputContainer}>
                    <TextInput
                        style={styles.inputText}
                        placeholder=""
                        onChangeText={newText => setCountryCode(newText)}
                        defaultValue={countryCode}
                        keyboardType="numeric"
                    />

                    <TextInput
                        style={styles.inputText}
                        placeholder="xxx xxx xxx"
                        // onChangeText={newText => setNumber(newText)}
                        onChangeText={setToken}
                        keyboardType="numeric"
                        autoFocus={true}
                    />
                </View>
            </View>

            <Pressable
                onPress={() => save(token)}
                style={[globalStyles.primaryBtn, { marginBottom: 40, }]}
            >
                <Text style={globalStyles.primaryBtnText}>Next</Text>
            </Pressable>

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },
    subcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 15,
        color: Colors.gray,
        marginTop: 7,
        width: '80%',
        textAlign: 'center'
    },
    TextInputContainer: {
        flexDirection: 'row',
        gap: 20,
        width: "100%",
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
        paddingLeft: 30
    },
    inputText: {
        height: 40,
        fontSize: 18,
    },


})

{/* <MyInput label={"Phone"} value={token} onChangeText={setToken} keyboardType="numeric" />
            <MyButton title={"Sign In"} onPress={() => save(token)} /> */}

{/*                 
            <MyButton title={"Sign Up"}
                onPress={() => navigation.navigate("Signup")}
            /> */}