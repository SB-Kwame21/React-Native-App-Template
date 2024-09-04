import { createDrawerNavigator } from "@react-navigation/drawer";
import { Pressable } from "react-native";
import StackNav from "./StackNav";
import { Entypo, Ionicons, Feather, FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import CustomDrawer from "../components/CustomDrawer";
import Account from "../screens/AccountScreen";
import { Colors } from "../constants/colors";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    const navigation = useNavigation();

    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={({ route }) => ({
                drawerActiveBackgroundColor: Colors.primary,
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                headerShown: true,
                drawerType: 'front',
                // drawerPosition: "right",
                drawerLabelStyle: {
                    // marginLeft: -25,
                    fontSize: 17,
                },

                headerLeft: () => (
                    <Pressable >
                        <Ionicons
                            name="chevron-back-outline"
                            size={35} color="black"
                            onPress={() => navigation.goBack()}
                            style={{ marginLeft: 10 }}
                        />
                    </Pressable>
                ),
            })}
        >
            <Drawer.Screen
                name="Stack"
                component={StackNav}
                options={{
                    headerShown: false,
                    title: "Home",
                }}
            />
            <Drawer.Screen
                name="Account"
                component={Account}
            // options={{
            //     headerShown: false
            // }}
            />
        </Drawer.Navigator>
    )
}