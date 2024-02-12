import React from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Appointment} from '../domain/entities';
import {formatDate, getHour} from '../domain/utils';

interface Props {
  showAppointmentModal: boolean;
  closeAppointment: () => void;
  appointment: Appointment;
}

export function AppointmentComponent({
  showAppointmentModal,
  closeAppointment,
  appointment,
}: Props): React.JSX.Element {
  return (
    <Modal animationType="slide" visible={showAppointmentModal}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.navigation_bar}>
            <Text style={styles.header_text}>Información de la cita</Text>

            <Pressable style={styles.button_close} onPress={closeAppointment}>
              <Text style={styles.button_text_close}>Cerrar</Text>
            </Pressable>
          </View>

          <View style={styles.card}>
            <View style={styles.on_line_item}>
              <Text style={styles.data_item}>Paciente:</Text>
              <Text style={styles.data_value}>{appointment.patientName}</Text>
            </View>

            <View style={styles.on_line_item}>
              <Text style={styles.data_item}>Fecha:</Text>
              <Text style={styles.data_value}>
                {formatDate(appointment.date)}
              </Text>
            </View>

            <View style={styles.on_line_item}>
              <Text style={styles.data_item}>Hora:</Text>
              <Text style={styles.data_value}>{getHour(appointment.date)}</Text>
            </View>

            <View style={styles.on_line_item}>
              <Text style={styles.data_item}>Propietario:</Text>
              <Text style={styles.data_value}>{appointment.ownerName}</Text>
            </View>

            <View style={styles.on_line_item}>
              <Text style={styles.data_item}>Email:</Text>
              <Text style={styles.data_value}>{appointment.ownerMail}</Text>
            </View>

            <View style={styles.on_line_item}>
              <Text style={styles.data_item}>Teléfono:</Text>
              <Text style={styles.data_value}>{appointment.ownerPhone}</Text>
            </View>

            <View>
              <Text style={styles.data_item}>Síntomas:</Text>
              <Text style={styles.data_value}>{appointment.symptoms}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    flex: 1,
    backgroundColor: '#eef2ff',
  },
  navigation_bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  header_text: {
    fontWeight: '500',
    fontSize: 24,
    color: '#000000',
  },
  button_close: {
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  button_text_close: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'center',
  },
  card: {
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  on_line_item: {flexDirection: 'row', gap: 10},
  data_item: {fontSize: 16, color: '#000000'},
  data_value: {fontSize: 16, color: '#4338ca'},
});
