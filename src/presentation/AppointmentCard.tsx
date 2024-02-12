import React from 'react';
import {Appointment} from '../domain/entities';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface Props {
  appointment: Appointment;
  editAppointment: (id: string) => void;
}

export function AppointmentCardComponent({
  appointment,
  editAppointment,
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
      <Text style={styles.detail}>
        Paciente: <Text style={styles.patient}>{appointment.patientName}</Text>
      </Text>

      <Text style={styles.detail}>
        Propietario:{' '}
        <Text style={styles.detail_value}>{appointment.ownerName}</Text>
      </Text>

      <Text style={styles.detail}>
        Hora:{' '}
        <Text style={styles.detail_value}>{getHour(appointment.date)}</Text>
      </Text>

      <Text style={styles.date}>{formatDate(appointment.date)}</Text>

      <View style={styles.buttons}>
        <Pressable
          style={styles.button}
          onPress={() => editAppointment(appointment.id)}>
          <Text style={[styles.text_button, styles.edit]}>Editar</Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={[styles.text_button, styles.delete]}>Eliminar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  patient: {
    color: '#4f46e5',
    marginBottom: 10,
  },
  detail: {
    color: '#000000',
    fontSize: 18,
    textTransform: 'capitalize',
  },
  detail_value: {
    color: '#3730a3',
  },
  date: {
    color: '#525252',
    textAlign: 'right',
    fontSize: 16,
  },
  buttons: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: '#f1f5f9',
  },
  text_button: {
    fontSize: 18,
  },
  edit: {
    color: '#4f46e5',
  },
  delete: {
    color: '#dc2626',
  },
});
