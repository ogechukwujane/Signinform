import React from 'react';
import {StyleSheet, TouchableOpacity,Text, View} from 'react-native';

const Button = () => {
    return(
       
        <TouchableOpacity style={style.btn}>
        <Text style={style.txt}>SIGN UP</Text>
        </TouchableOpacity>
        

    );
};

const style = StyleSheet.create({
    btn: {
        borderColor: 'green',
        backgroundColor: 'darkgreen',
        marginHorizontal: 50, 
        borderRadius: 8,
        marginTop: 25,
        padding: 13
    },
    txt: {
        color: 'whitesmoke',
        alignSelf: 'center',
        fontSize: 15 , 
    }
});

export default Button;