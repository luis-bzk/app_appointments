/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  AppointmentComponent,
  AppointmentsListComponent,
  FormComponent,
} from './src/presentation';
import {Appointment} from './src/domain/entities';

function App(): React.JSX.Element {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showAppointment, setShowAppointment] = useState<boolean>(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [appointment, setAppointment] = useState<Appointment>({
    id: '',
    patientName: '',
    ownerName: '',
    ownerPhone: '',
    ownerMail: '',
    symptoms: '',
    date: new Date(),
  });

  const clearAppointmentState = () => {
    setAppointment({
      id: '',
      patientName: '',
      ownerName: '',
      ownerPhone: '',
      ownerMail: '',
      symptoms: '',
      date: new Date(),
    });
  };

  // appointment operations
  const handleSetAppointment = (newAppointment: Appointment) => {
    const exists = appointments.find(item => item.id === newAppointment.id);
    if (exists) {
      const updatedAppointments = appointments.map(item =>
        item.id === newAppointment.id ? newAppointment : item,
      );
      setAppointments(updatedAppointments);
      return;
    }

    setAppointments([...appointments, newAppointment]);
  };

  const handleDeleteAppointment = (id: string) => {
    Alert.alert(
      'Deseas eliminar esta cita?',
      'Una vez la cita es eliminada no se puede recuperar',
      [
        {text: 'Cancelar'},
        {
          text: 'Si, eliminar',
          onPress: () => {
            const updatedAppointments = appointments.filter(
              item => !(item.id === id),
            );
            setAppointments(updatedAppointments);
          },
        },
      ],
    );
  };

  // open modals
  const editAppointment = (id: string) => {
    selectAppointment(id);
    setShowForm(true);
  };

  const handleShowAppointment = (id: string) => {
    selectAppointment(id);
    setShowAppointment(true);
  };

  const selectAppointment = (id: string) => {
    const appointmentSelected = appointments.find(item => item.id === id);
    if (!appointmentSelected) {
      Alert.alert('Error', 'El elemento seleccionado no existe');
      return;
    }
    setAppointment(appointmentSelected);
  };

  // Close modal
  const toggleShowForm = (value: boolean) => {
    clearAppointmentState();
    setShowForm(value);
  };

  const toggleShowAppointment = (value: boolean) => {
    clearAppointmentState();
    setShowAppointment(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Administrador de citas{' '}
          <Text style={styles.title_black}>Veterinarias</Text>
        </Text>
      </View>

      <Pressable style={styles.button} onPress={() => toggleShowForm(true)}>
        <Text style={styles.button_text}>Nueva cita</Text>
      </Pressable>

      {showForm && (
        <FormComponent
          showForm={showForm}
          closeForm={() => toggleShowForm(false)}
          handleSetAppointment={handleSetAppointment}
          appointmentObj={appointment}
        />
      )}

      {showAppointment && (
        <AppointmentComponent
          showAppointmentModal={showAppointment}
          closeAppointment={() => toggleShowAppointment(false)}
          appointment={appointment}
        />
      )}

      <AppointmentsListComponent
        appointments={appointments}
        editAppointment={editAppointment}
        selectAppointment={handleShowAppointment}
        deleteAppointment={handleDeleteAppointment}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafb',
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: '#000',
  },
  title_black: {
    fontWeight: '900',
    color: '#6366f1',
  },
  button: {
    borderRadius: 5,
    backgroundColor: '#818cf8',
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 20,
  },
  button_text: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;
