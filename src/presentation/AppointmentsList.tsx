import React from 'react';
import {Appointment} from '../domain/entities';
import {FlatList, StyleSheet, Text} from 'react-native';
import {AppointmentCardComponent} from './AppointmentCard';

interface Props {
  appointments: Appointment[];
}

export function AppointmentsListComponent({
  appointments,
}: Props): React.JSX.Element {
  return appointments.length === 0 ? (
    <Text style={styles.alert}>Todavía no tienes citas agendadas</Text>
  ) : (
    <FlatList
      style={styles.list}
      data={appointments}
      keyExtractor={item => item.id}
      renderItem={item => <AppointmentCardComponent appointment={item.item} />}
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