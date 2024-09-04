import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";

export default function Account() {

    const navigation = useNavigation();
    return (
        <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.title}>Account</Text>
        </View>
    )
}