import React from 'react';
import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

interface Props {
  label: string;
  inputPlaceholder: string;
  keyboardType: KeyboardTypeOptions;
}

export function InputComponent({
  label,
  keyboardType,
  inputPlaceholder,
}: Props): React.JSX.Element {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType={keyboardType}
        placeholder={inputPlaceholder}
        placeholderTextColor={'#755776'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    color: '#ffffff',
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
});
