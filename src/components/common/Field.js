import React from 'react'
import { Text, View, TextInput } from 'react-native';

const Field = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { fieldStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={fieldStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View >
  );
};

const styles = {
  fieldStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Field };
