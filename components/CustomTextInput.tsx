import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

type InputProps = {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
};

const CustomTextInput: React.FC<InputProps> = ({ placeholder, value, onChangeText }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor="#c4c4c4"
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        backgroundColor: '#f7f7f7',
        marginVertical: 10,
        textAlign: 'right',
    },
});

export default CustomTextInput;
