import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';

interface Props {
  label: string;
  value: Date;
  setValue: (val: Date) => void;
}

export function InputDateComponent({
  label,
  value,
  setValue,
}: Props): React.JSX.Element {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.dateContainer}>
        <DatePicker
          date={value}
          locale="es"
          mode="datetime"
          onDateChange={setValue}
          androidVariant="iosClone"
          minimumDate={new Date()}
        />
      </View>
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
    backgroundColor: '#f8fafc',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  dateContainer: {
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#f8fafc',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 16,
  },
});
