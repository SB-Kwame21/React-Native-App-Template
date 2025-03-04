import { TextInput, Text, View, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

export default function MyInput({
  label,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType
}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={label}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 45,
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: Colors.ligth,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
});
