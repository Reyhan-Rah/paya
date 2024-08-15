import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Image,
  Dimensions,
} from 'react-native';
import DownIcon from '@/assets/images/stroke/Stroke 1.png';
import Logo from '@/assets/images/logo/Icon-App-1024-removebg-preview 1.png';
import CloseIcon from '@/assets/images/close/x.png';
import SubmitButton from '@/components/SubmitButton';

const { width, height } = Dimensions.get('window');

interface DropdownWithRadioProps {
  radioOptions: { label: string; value: string }[];
  title: string;
  defaultText: string;
  submitLabel: string;
  onSubmit: (selectedValue: string) => void;
}

const DropdownWithRadio: React.FC<DropdownWithRadioProps> = ({
  radioOptions,
  title,
  defaultText,
  submitLabel,
  onSubmit,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
  );

  const handleSelection = (value: string) => {
    setSelectedValue(value);
  };

  const handleSubmit = () => {
    if (selectedValue) {
      onSubmit(selectedValue);
    }
    setModalVisible(false);
  };

  return (
    <>
      {/* Dropdown Trigger */}
      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.dropdownText}>
          {selectedValue
            ? radioOptions.find((option) => option.value === selectedValue)
                ?.label
            : defaultText}
        </Text>
        <Image source={DownIcon} style={styles.stroke} resizeMode="contain" />
      </TouchableOpacity>

      {/* Modal for Radio Buttons */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalContainer}
        >
          <View style={styles.modalOverlay} />
          <View style={styles.modalContent}>
            <View style={styles.logoContainer}>
              <Image source={Logo} style={styles.logo} />
            </View>
            <TouchableOpacity
              style={styles.closeIconContainer}
              onPress={() => setModalVisible(false)}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Image source={CloseIcon} style={styles.closeIcon} />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.radioContainer}>
              {radioOptions.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={styles.radioButtonContainer}
                  onPress={() => handleSelection(option.value)}
                >
                  <View style={styles.radioButton}>
                    {selectedValue === option.value && (
                      <View style={styles.radioButtonInner} />
                    )}
                  </View>
                  <Text style={styles.radioText}>{option.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <SubmitButton title={submitLabel} onPress={handleSubmit} />
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    flexDirection: 'row-reverse',
    width: '100%',
    paddingVertical: 10,
    paddingRight: 18,
    paddingLeft: 28,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    marginTop: height * 0.01,
    marginBottom: height * 0.03,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 5,
  },
  dropdownText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 25.5,
    color: '#424242',
    textAlign: 'right',
  },
  stroke: {
    width: width * 0.04,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(6, 29, 219, 0.3)',
  },
  modalContent: {
    width: width * 0.8,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: width * 0.08,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  logoContainer: {
    backgroundColor: 'white',
    width: width * 0.11,
    height: width * 0.11,
    position: 'absolute',
    top: -width * 0.04,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: width * 0.087,
  },
  closeIconContainer: {
    width: width * 0.05,
    height: width * 0.05,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    width: width * 0.025,
    height: width * 0.025,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#424242',
  },
  titleContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 19,
    marginTop: 10,
    marginBottom: 23,
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.08,
    shadowRadius: 15,
    elevation: 5,
  },
  radioButtonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingRight: 20,
    paddingLeft: 12,
    marginBottom: height * 0.01,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    justifyContent: 'space-between',
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
    color: '#424242',
  },
  radioContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginBottom: height * 0.02,
  },
});

export default DropdownWithRadio;
