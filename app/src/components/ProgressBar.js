import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { Colors } from '../constants/colors';


const MyProgressBar = () => (
    <ProgressBar
        style={styles.progress}
        progress={0.7}
        color={Colors.primary}
    />
);

export default MyProgressBar;

const styles = StyleSheet.create({
    progress: {
        height: 9,
        // width: '100%', // Adjust the width to increase the length
        // backgroundColor: 'gray',
        borderRadius: 10,
        marginVertical: 10,
    }
})