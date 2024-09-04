import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { signOut } from "../features/auth/auth";
import { Colors } from '../constants/colors';



const CustomDrawer = props => {
    const dispatch = useDispatch();

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: Colors.primary }}>

                <View
                    style={{ padding: 20 }}>
                    <Image
                        source={require('../../assets/memojis/9.png')}
                        style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
                    />
                    <Text
                        style={{
                            color: Colors.ligth,
                            fontSize: 20,
                            marginBottom: 5,
                            fontWeight: '500'
                        }}>
                        Solomon Baidou
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text
                            style={{
                                color: Colors.ligth,
                                marginRight: 5,
                            }}>
                        </Text>
                    </View>
                </View>

                <View style={{ flex: 1, backgroundColor: Colors.ligth, paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>

            <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                <TouchableOpacity onPress={() => { }} style={{ paddingBottom: 50 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>

                        <Pressable onPress={async () => {
                            await AsyncStorage.removeItem('@token');
                            dispatch(signOut());
                        }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    // marginLeft: 5,
                                }}>
                                Sign Out
                            </Text>
                        </Pressable>

                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CustomDrawer;