import { StyleSheet, Text, TouchableOpacity, View, Image, Pressable, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Entypo, Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';

import { globalStyles } from "../styles/global";
import MyProgressBar from "../components/ProgressBar";
import { Colors } from "../constants/colors";
import { useState } from "react";



export default function Home() {

    return (
        <SafeAreaView style={globalStyles.screenContainer}>
            <Text>Hello</Text>
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({

})
