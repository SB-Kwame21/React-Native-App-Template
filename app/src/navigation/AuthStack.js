import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/authScreens/Login";
import Signup from "../screens/authScreens/Signup";

const Auth = createStackNavigator();

export default function AuthStack() {

    return (
        <Auth.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Auth.Screen name="Login" component={Login} />
            <Auth.Screen name="Signup" component={Signup} />
        </Auth.Navigator>
    );
};