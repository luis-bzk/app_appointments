import React from 'react';
import {Appointment} from '../domain/entities';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  appointment: Appointment;
}

export function AppointmentCardComponent({
  appointment,
}: Props): React.JSX.Element {
  const formatDate = (date: Date): string => {
    const newDate = new Date(date);

    return newDate.toLocaleDateString('es-Es', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getHour = (date: Date): string => {
    const newDate = new Date(date);

    return newDate.toLocaleTimeString('es-Es', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.detail}>Paciente:</Text>
      <Text style={styles.patient}>{appointment.patientName}</Text>

      <Text style={styles.detail}>
        Hora:{' '}
        <Text style={styles.detail_value}>{getHour(appointment.date)}</Text>
      </Text>

      <Text style={styles.date}>{formatDate(appointment.date)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
  },
  patient: {
    fontWeight: '500',
    color: '#4f46e5',
    textTransform: 'capitalize',
    fontSize: 20,
    marginBottom: 10,
  },

  detail: {
    color: '#000000',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  detail_value: {
    color: '#3730a3',
  },
  date: {
    color: '#525252',
    textAlign: 'right',
    fontSize: 16,
  },
});
