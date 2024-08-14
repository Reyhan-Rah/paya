import React, { useState } from 'react';
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
    I18nManager,
    SafeAreaView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';
import SubmitButton from "@/components/SubmitButton";
import CustomRadioButton from "@/components/CustomRadioButton";
import Checkbox from "@/components/Checkbox";
import CustomTextInput from "@/components/CustomTextInput";
import SimpleRadioButton from "@/components/SimpleRadioButton";
import Banner from '../assets/images/banner/Rectangle 1392.png';
import BackIcon from '../assets/images/back/Combined Shape.png';
import Logo from '../assets/images/logo/Icon-App-1024-removebg-preview 1.png';
import CloseIcon from '../assets/images/close/x.png';
import DownIcon from '../assets/images/stroke/Stroke 1.png';

// Enforce RTL layout
I18nManager.forceRTL(true);

type RadioButtonOption = 'first' | 'second';

const { width, height } = Dimensions.get('window');

const App: React.FC = () => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [checked, setChecked] = useState<RadioButtonOption>('first');
    const [panel, setPanel] = useState<RadioButtonOption>('first');
    const [companyName, setCompanyName] = useState('');
    const [agahi, setAgahi] = useState('');
    const [companyId, setCompanyId] = useState('');
    const [checkboxes, setCheckboxes] = useState({
        contact: true,
        message: false,
        chat: false,
    });

    const toggleCheckbox = (key: 'contact' | 'message' | 'chat') => {
        setCheckboxes({ ...checkboxes, [key]: !checkboxes[key] });
    };

    // Close the keyboard and blur inputs when pressing outside
    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.safeArea}
            >
                <TouchableWithoutFeedback onPress={dismissKeyboard}>
                <ScrollView style={styles.container} contentContainerStyle={styles.content}>
                    <View>
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
                        resizeMode="contain"
                    />
                    {/* Panel Type */}
                    <View style={styles.checkboxGroup}>
                        <Text style={styles.title}>نوع پنل</Text>
                        <SimpleRadioButton
                            label="حقیقی"
                            value="first"
                            selectedValue={panel}
                            onPress={setPanel}
                        />
                        <SimpleRadioButton
                            label="حقوقی"
                            value="second"
                            selectedValue={panel}
                            onPress={setPanel}
                        />
                    </View>
                    {/* Dropdown Trigger */}
                    <Text style={styles.label}>دسته بندی</Text>
                    <TouchableOpacity style={styles.dropdown} onPress={() => setModalVisible(true)}>
                        <Text style={styles.dropdownText}>انتخاب کنید</Text>
                        <Image
                            source={DownIcon}
                            style={styles.stroke}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                    {/* Checkbox*/}
                    <View style={styles.checkboxGroup}>
                        <Text style={styles.checkboxGroupLabel}>نوع ارتباط</Text>
                        <Checkbox
                            label="تماس"
                            checked={checkboxes.contact}
                            onChange={() => toggleCheckbox('contact')}
                        />
                        <Checkbox
                            label="پیام"
                            checked={checkboxes.message}
                            onChange={() => toggleCheckbox('message')}
                        />
                        <Checkbox
                            label="چت"
                            checked={checkboxes.chat}
                            onChange={() => toggleCheckbox('chat')}
                        />
                    </View>
                    {/* Text Inputs*/}
                    <CustomTextInput placeholder="نام شرکت" value={companyName} onChangeText={setCompanyName} />
                    <CustomTextInput placeholder="ارائه کننده آگهی" value={agahi} onChangeText={setAgahi} />
                    <CustomTextInput placeholder="شناسه ملی شرکت" value={companyId} onChangeText={setCompanyId} />
                    </View>
                    {/* Submit Button */}
                    <SubmitButton title="ثبت" onPress={() => {}} style={styles.submitButton}/>
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
                            <TouchableOpacity style={styles.closeIconContainer} onPress={() => setModalVisible(false)} hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}>
                            <Image source={CloseIcon} style={styles.closeIcon} />
                            </TouchableOpacity>
                            <View style={styles.titleContainer}>
                            <Text style={styles.title}>دسته بندی</Text>
                            </View>
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
                            <SubmitButton title="تایید و ادامه" onPress={() => setModalVisible(false)} />
                        </View>
                        </View>
                    </Modal>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
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
        backgroundColor: '#F5F5F5',
        paddingHorizontal:width * 0.09,
    },
    content:{
        minHeight:height-100,
        justifyContent:'space-between'
    },
    header: {
        flexDirection:'row-reverse',
        width: '100%',
        // paddingTop: Platform.OS === 'android' ? height * 0.03 : 0, // Adjust for status bar in Android
        backgroundColor: 'transparent',
        paddingVertical: height * 0.01,
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
        marginTop: height * 0.01,
        borderRadius:25,
        alignSelf:'center',
    },
    label:{
        fontSize: 16,
        color: '#424242',
        fontWeight: '500',
        textAlign:"right",
        marginTop: height * 0.01,
    },
    dropdown: {
        flexDirection:'row-reverse',
        width: '100%',
        paddingVertical:10,
        paddingRight:18,
        paddingLeft:28,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent:'space-between',
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
        lineHeight:25.5,
        color: '#424242',
        textAlign:'right',
    },
    stroke: {
        width: width*0.04,
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
    closeIconContainer:{
        width: width*0.05,
        height:width*0.05,
        alignSelf:'flex-end',
        justifyContent:'center',
        alignItems:'center'
    },
    closeIcon:{
        width: width*0.025,
        height:width*0.025,
    },
    title: {
        fontSize: 14,
        fontWeight: '500',
        color:'#424242',
    },
    radioContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginBottom: height * 0.02,
    },
    titleContainer:{
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical:15,
        paddingHorizontal:19,
        marginTop:10,
        marginBottom:23,
        borderRadius:10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.08,
        shadowRadius: 15,
        elevation: 5,
    },
    checkboxGroup: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: 20,
    },
    checkboxGroupLabel: {
        fontSize: 14,
        fontWeight: '500',
        color:'#424242',
        paddingLeft:10,
    },
    submitButton:{
        width:'65%',
        alignSelf:'center',
    }
});

export default App;
