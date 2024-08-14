import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    I18nManager,
    SafeAreaView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    ScrollView, TouchableOpacity,
} from 'react-native';
import SubmitButton from "@/components/SubmitButton";
import Checkbox from "@/components/Checkbox";
import CustomTextInput from "@/components/CustomTextInput";
import SimpleRadioButton from "@/components/SimpleRadioButton";
import DropdownWithRadio from "@/components/DropdownWithRadio";
import Banner from '../assets/images/banner/Rectangle 1392.png';
import BackIcon from '../assets/images/back/Combined Shape.png';

// Enforce RTL layout
I18nManager.forceRTL(true);

type RadioButtonOption = 'first' | 'second';

const { width, height } = Dimensions.get('window');

const App: React.FC = () => {
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

    const handleDropdownSubmit = (selectedValue: string) => {
        console.log('Selected Value:', selectedValue);
    };

    const handleSubmit = () => {
        console.log('Submit form with selected values, route to the next step or display the result');
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
                        <TouchableOpacity onPress={()=>{console.log('should route back to the previous screen')}}>
                        <Image
                            source={BackIcon}
                            style={styles.back}
                            resizeMode="contain"
                        />
                        </TouchableOpacity>
                    </View>
                    {/* Banner */}
                    <Image
                        source={Banner}
                        style={styles.banner}
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
                        <DropdownWithRadio
                            radioOptions={[
                                { label: 'موسسه داوری', value: '1' },
                                { label: 'موسسه حقوقی', value: '2' },
                            ]}
                            title="دسته بندی"
                            defaultText="انتخاب کنید"
                            submitLabel="تایید و ادامه"
                            onSubmit={handleDropdownSubmit}
                        />
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
                    <SubmitButton title="ثبت" onPress={handleSubmit} style={styles.submitButton}/>
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
    banner: {
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
    title: {
        fontSize: 14,
        fontWeight: '500',
        color:'#424242',
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
