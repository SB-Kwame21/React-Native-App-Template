import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome6, FontAwesome5, Entypo } from '@expo/vector-icons';
import { Colors } from "../constants/colors";
import { useNavigation } from "@react-navigation/native";

import Home from "../screens/Home";
import Withdraw from "../screens/WithdrawScreen";
import Services from "../screens/ServicesScreen";


const Tab = createBottomTabNavigator();

export default function BottomNav() {
    const navigation = useNavigation();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerTitleAlign: "center",
                tabBarActiveTintColor: Colors.primary
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <FontAwesome6 name="house" size={22} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Withdraw"
                component={Withdraw}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome6 name="circle-arrow-up" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Services"
                component={Services}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="list" size={22} color={color} />
                    )
                }}
            />

        </Tab.Navigator>
    )
}