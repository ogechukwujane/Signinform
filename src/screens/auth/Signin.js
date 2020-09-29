import React from 'react';
import {View, Text, StyleSheet, Image , ImageBackground, ScrollView} from 'react-native';
import logo from '../../assest/logo.png';
import bg from '../../assest/bg_image.png';
import Textbutton from '../../component/Textbutton'
import Button from '../../component/Buttons';
const Form = () => {
    return (
    <ImageBackground source={bg} style={style.container}>
        <ScrollView>
        <View style ={style.header}>
            <Image source={logo}/>
            <Text style={style.text1}>Sign In</Text>
        </View>
        <Text style={style.text2}>Sign Up</Text>
        <Textbutton
        placeholder='Fullname' />
        <Textbutton 
        placeholder='Email'
        keyboardType='email-address' />
         <Textbutton 
        placeholder='Password'
        keyboardType='default'
        secureTextEntry={true} />
        <Button/>
        </ScrollView>
    
    </ImageBackground>
    );
};

const style= StyleSheet.create({
container: {
    flex: 1
},
header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    margin: 20

},
text1: {
    fontSize: 17,
    color: 'green',
    fontWeight: 'normal'
},
text2: {
    fontSize: 35,
    alignSelf: 'center',
    marginVertical: 60,
    fontWeight: 'bold'
}
});

export default Form;