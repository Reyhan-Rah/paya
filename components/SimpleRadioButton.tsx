import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

type RadioButtonOption = 'first' | 'second';
const { width } = Dimensions.get('window');

const SimpleRadioButton: React.FC<{
  label: string;
  value: RadioButtonOption;
  selectedValue: RadioButtonOption;
  onPress: (value: RadioButtonOption) => void;
}> = ({ label, value, selectedValue, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.radioButtonContainer}
      onPress={() => onPress(value)}
    >
      <View style={styles.radioButton}>
        {selectedValue === value && <View style={styles.radioButtonInner} />}
      </View>
      <Text style={styles.radioText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
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
    backgroundColor: '#EB5757',
  },
  radioText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#424242',
    marginRight: 5,
  },
});

export default SimpleRadioButton;
