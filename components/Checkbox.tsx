import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <TouchableOpacity style={styles.checkboxContainer} onPress={onChange}>
      <View style={[styles.checkbox, checked && styles.checkedCheckbox]}>
        {checked && <View style={styles.checkedIndicator} />}
      </View>
      <Text style={styles.checkboxLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#6F6F71',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedCheckbox: {
    borderColor: '#E15A55',
  },
  checkedIndicator: {
    width: 10,
    height: 10,
    backgroundColor: '#E15A55',
    borderRadius: 2,
  },
  checkboxLabel: {
    marginRight: 4,
    color: '#333',
    fontSize: 16,
  },
});

export default Checkbox;
