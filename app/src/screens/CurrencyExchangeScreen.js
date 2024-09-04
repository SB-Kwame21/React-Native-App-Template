import { StyleSheet, Text, TouchableOpacity, View, Image, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";


export default function CurrencyExchangeScreen() {
    const navigation = useNavigation();

    return (
        <View style={globalStyles.screenContainer}>
            <Text>Currency Exchange Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({


})
