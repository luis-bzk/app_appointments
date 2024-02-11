import React, {useState} from 'react';

import {
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import {InputComponent, InputDateComponent} from '.';
import {Appointment} from '../domain/entities';

interface Props {
  showModal: boolean;
  closeModal: () => void;
  addNewAppointment: (appointment: Appointment) => void;
}

export function ModalComponent({
  showModal,
  closeModal,
  addNewAppointment,
}: Props): React.JSX.Element {
  const [appointment, setAppointment] = useState<Appointment>({
    id: Date.now().toString(),
    patientName: '',
    ownerName: '',
    ownerPhone: '',
    ownerMail: '',
    symptoms: '',
    date: new Date(),
  });

  const setValueAppointment = (
    field: keyof Appointment,
    value: string | Date,
  ) => {
    setAppointment(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleNewAppointment = () => {
    if (!appointment.patientName) {
      Alert.alert('Error', 'El nombre del paciente es requerido');
      return;
    }

    if (!appointment.ownerName) {
      Alert.alert('Error', 'El nombre del propietario es requerido');
      return;
    }

    if (!appointment.ownerPhone) {
      Alert.alert('Error', 'El teléfono del propietario es requerido');
      return;
    }

    if (!appointment.ownerMail) {
      Alert.alert('Error', 'El email del propietario es requerido');
      return;
    }

    if (!appointment.symptoms) {
      Alert.alert('Error', 'Los síntomas del paciente es requerido');
      return;
    }

    if (!appointment.date) {
      Alert.alert('Error', 'La fecha de l;a cita es requerida');
      return;
    }

    addNewAppointment(appointment);
    setAppointment({
      id: '',
      patientName: '',
      ownerName: '',
      ownerPhone: '',
      ownerMail: '',
      symptoms: '',
      date: new Date(),
    });
    closeModal();
  };

  return (
    <Modal animationType="slide" visible={showModal}>
      <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.navigation_bar}>
            <Text style={styles.header_text}>Nueva cita</Text>

            <Pressable style={styles.button_close} onPress={closeModal}>
              <Text style={styles.button_text_close}>Cerrar</Text>
            </Pressable>
          </View>

          <View style={styles.form}>
            <InputComponent
              label="Nombre paciente"
              keyboardType="default"
              inputPlaceholder="Cheese Burger"
              value={appointment.patientName}
              setValue={(value: string) =>
                setValueAppointment('patientName', value)
              }
            />

            <InputComponent
              label="Nombre propietario"
              keyboardType="default"
              inputPlaceholder="Ej. Juan Alvarez"
              value={appointment.ownerName}
              setValue={(value: string) =>
                setValueAppointment('ownerName', value)
              }
            />

            <InputComponent
              label="Email propietario"
              keyboardType="email-address"
              inputPlaceholder="Ej. juana@gmail.com"
              value={appointment.ownerMail}
              setValue={(value: string) =>
                setValueAppointment('ownerMail', value)
              }
            />

            <InputComponent
              label="Teléfono propietario"
              keyboardType="number-pad"
              inputPlaceholder="Ej. 087654321"
              value={appointment.ownerPhone}
              setValue={(value: string) =>
                setValueAppointment('ownerPhone', value)
              }
              maxLength={10}
            />

            <InputComponent
              label="Síntomas paciente "
              keyboardType="default"
              inputPlaceholder="Ej. Tiene un dolor en el..."
              value={appointment.symptoms}
              setValue={(value: string) =>
                setValueAppointment('symptoms', value)
              }
              multiLine={true}
              numLines={4}
              alignVertical="top"
            />
            <InputDateComponent
              label="Fecha"
              value={appointment.date}
              setValue={(value: Date) => setValueAppointment('date', value)}
            />
          </View>

          <Pressable style={styles.button_save} onPress={handleNewAppointment}>
            <Text style={styles.button_save_close}>Guardar</Text>
          </Pressable>
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
    backgroundColor: '#818cf8',
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
    color: '#ffffff',
  },
  button_close: {
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  button_text_close: {
    color: '#ffffff',
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'center',
  },
  form: {
    gap: 20,
    marginBottom: 30,
  },
  button_save: {
    borderRadius: 5,
    backgroundColor: '#eef2ff',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  button_save_close: {
    color: '#4f46e5',
    fontWeight: '500',
    fontSize: 20,
    textAlign: 'center',
  },
});
