import React from 'react';
import {Appointment} from '../domain/entities';
import {FlatList, StyleSheet, Text} from 'react-native';
import {AppointmentCardComponent} from './AppointmentCard';

interface Props {
  appointments: Appointment[];
  selectAppointment: (id: string) => void;
  editAppointment: (id: string) => void;
  deleteAppointment: (id: string) => void;
}

export function AppointmentsListComponent({
  appointments,
  editAppointment,
  deleteAppointment,
  selectAppointment,
}: Props): React.JSX.Element {
  return appointments.length === 0 ? (
    <Text style={styles.alert}>Todavía no tienes citas agendadas</Text>
  ) : (
    <FlatList
      style={styles.list}
      data={appointments}
      keyExtractor={item => item.id}
      renderItem={item => (
        <AppointmentCardComponent
          appointment={item.item}
          editAppointment={editAppointment}
          selectAppointment={selectAppointment}
          deleteAppointment={deleteAppointment}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  alert: {
    fontSize: 20,
    textAlign: 'center',
  },
  list: {
    gap: 15,
  },
});
