import React, { useState } from 'react';
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    StyleSheet,
    Image,
    Button,
    Dimensions,
    I18nManager,
    SafeAreaView,
    Platform,
} from 'react-native';
import Banner from '../assets/images/banner/Rectangle 1392.png';
import BackIcon from '../assets/images/back/Combined Shape.png';
import Logo from '../assets/images/logo/Icon-App-1024-removebg-preview 1.png';
import SubmitButton from "@/components/SubmitButton";

// Enforce RTL layout
I18nManager.forceRTL(true);

type RadioButtonOption = 'first' | 'second';

const { width, height } = Dimensions.get('window');

const App: React.FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [checked, setChecked] = useState<RadioButtonOption>('first');

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

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <Text style={styles.headerText}>فرم دریافت پنل</Text>
                    <Image
                        source={BackIcon}
                        style={styles.back}
                        resizeMode="contain"
                    />
                </View>

                {/* Banner */}
                <Image
                    source={Banner}
                    style={styles.topImage}
                    resizeMode="cover"
                />

                {/* Dropdown Trigger */}
                <TouchableOpacity style={styles.dropdown} onPress={() => setModalVisible(true)}>
                    <Text style={styles.dropdownText}>انتخاب کنید</Text>
                </TouchableOpacity>

                {/* Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.logoContainer}>
                        <Image source={Logo} style={styles.logo} />
                        </View>
                        <Text style={styles.title}>دسته بندی</Text>
                        <View style={styles.radioContainer}>
                            <CustomRadioButton
                                label="موسسه داوری"
                                value="first"
                                selectedValue={checked}
                                onPress={setChecked}
                            />
                            <CustomRadioButton
                                label="موسسه حقوقی"
                                value="second"
                                selectedValue={checked}
                                onPress={setChecked}
                            />
                        </View>
                        <SubmitButton title="تایید و ادامه" onPress={() => setModalVisible(false} />
                    </View>
                    </View>
                </Modal>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        paddingHorizontal:width * 0.09,
    },
    header: {
        flexDirection:'row-reverse',
        width: '100%',
        // paddingTop: Platform.OS === 'android' ? height * 0.03 : 0, // Adjust for status bar in Android
        backgroundColor: 'transparent',

        paddingVertical:height * 0.02,
        justifyContent: 'space-between',
        alignItems:'center',
    },
    headerText: {
        fontSize: 14,
        color: '#424242',
        fontWeight: '500',
        textAlign:"right"
    },
    back: {
        width: width*0.05,
    },
    topImage: {
        width: width*0.95,
        height: height * 0.2, // Adjust this value as per your design
        marginBottom: height * 0.02,
        borderRadius:25,
    },
    dropdown: {
        width: '80%',
        padding: width * 0.03,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: height * 0.02,
    },
    dropdownText: {
        fontSize: width * 0.04,
        color: '#333',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(6, 29, 219, 0.3)',
    },
    modalView: {
        width:width * 0.8,
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
    logoContainer:{
        backgroundColor: 'white',
        width: width * 0.11,
        height: width * 0.11,
        position:"absolute",
        top:-width * 0.04,
        borderRadius:100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: width * 0.087,

    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        color:'#424242',
      paddingHorizontal:height * 0.02,
    },
    radioContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginBottom: height * 0.02,
    },
    radioButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: height * 0.01,
        backgroundColor:'red'
    },
    radioButton: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#1E90FF',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: width * 0.03,
    },
    radioButtonInner: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#1E90FF',
    },
    radioText: {
        fontSize: width * 0.04,
    },
});

export default App;
