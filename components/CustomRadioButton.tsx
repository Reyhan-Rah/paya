import React from "react";
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native";

type RadioButtonOption = 'first' | 'second';
const { width, height } = Dimensions.get('window');

const CustomRadioButton: React.FC<{
    label: string;
    value: RadioButtonOption;
    selectedValue: RadioButtonOption;
    onPress: (value: RadioButtonOption) => void;
}> = ({ label, value, selectedValue, onPress }) => {
    return (
        <TouchableOpacity style={styles.radioButtonContainer} onPress={() => onPress(value)}>
            <View style={styles.radioButton}>
                {selectedValue === value && <View style={styles.radioButtonInner} />}
            </View>
            <Text style={styles.radioText}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    radioButtonContainer: {
        width:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical:15,
        paddingRight:20,
        paddingLeft:12,
        marginBottom: height * 0.01,
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        justifyContent:'space-between',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.05,
        shadowRadius: 15,
        elevation: 5,
    },
    radioButton: {
        height: 17,
        width: 17,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#424242',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: width * 0.03,
    },
    radioButtonInner: {
        height: 9,
        width: 9,
        borderRadius: 5,
        backgroundColor: '#061DDB',
    },
    radioText: {
        fontSize: 16,
        fontWeight: '500',
        color:'#424242',
    },
})

export default CustomRadioButton;
