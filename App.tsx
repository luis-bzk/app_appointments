/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {AppointmentsListComponent, ModalComponent} from './src/presentation';
import {Appointment} from './src/domain/entities';

function App(): React.JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [appointments, setAppointment] = useState<Appointment[]>([]);

  const toggleShowMenu = (value: boolean) => setShowModal(value);

  const addNewAppointment = (appointment: Appointment) => {
    setAppointment([...appointments, appointment]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Administrador de citas{' '}
          <Text style={styles.title_black}>Veterinarias</Text>
        </Text>
      </View>

      <Pressable style={styles.button} onPress={() => toggleShowMenu(true)}>
        <Text style={styles.button_text}>Nueva cita</Text>
      </Pressable>

      <ModalComponent
        showModal={showModal}
        closeModal={() => toggleShowMenu(false)}
        addNewAppointment={addNewAppointment}
      />

      <AppointmentsListComponent appointments={appointments} />
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
