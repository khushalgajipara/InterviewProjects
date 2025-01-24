import React from 'react';
import { View, TextInput, Text, StyleSheet, ViewStyle, TextInputProps } from 'react-native';
import styles from './style';

interface InputTextProps extends TextInputProps {
    label?: string;
    error?: string;
    style?: ViewStyle;
  }
  
  const InputText: React.FC<InputTextProps> = ({
    label,
    placeholder,
    value,
    onChangeText,
    secureTextEntry = false,
    keyboardType = 'default',
    error,
    style,
  }) => {
    return (
      <View style={[styles.container, style]}>
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput
          style={[styles.input, error && styles.errorInput]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
}

export default InputText;
