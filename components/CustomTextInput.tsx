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
            placeholderTextColor="#979797"
        />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 56,
        borderWidth: 1,
        borderColor: '#e5e5e5',
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 14,
        backgroundColor: 'rgba(151, 151, 151, 0.2)',
        marginVertical: 10,
        textAlign: 'right',
    },
});

export default CustomTextInput;
