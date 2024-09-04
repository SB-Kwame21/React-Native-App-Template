import { StyleSheet, Text, TouchableOpacity, View, Image, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";


export default function Withdraw() {
    const navigation = useNavigation();

    return (
        <View style={globalStyles.screenContainer}>
            <Text>Withdraw</Text>
        </View>
    );
}

const styles = StyleSheet.create({


})
