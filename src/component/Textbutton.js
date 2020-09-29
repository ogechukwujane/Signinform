import React from 'react';
import { StyleSheet, TextInput, View} from 'react-native'

const Inputtext = ({keyboardType, placeholder, secureTextEntry}) => {
    return(
        <TextInput style={style.container}
        keyboardType={keyboardType}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        />

    );
};

const style = StyleSheet.create({
  container: {
      borderColor: 'gray',
      opacity: 0.8,
      borderWidth: 1,
      borderRadius: 5,
      margin: 20,
      paddingHorizontal: 30
  }
});

export default Inputtext;