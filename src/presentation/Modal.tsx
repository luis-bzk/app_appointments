import React, {useState} from 'react';
import {
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {InputComponent} from '.';
import {Appointment} from '../domain/entities';

interface Props {
  showModal: boolean;
  closeModal: () => void;
}

export function ModalComponent({
  showModal,
  closeModal,
}: Props): React.JSX.Element {
  const [appointment, setAppointment] = useState<Appointment>({
    patientName: '',
    ownerName: '',
    ownerPhone: '',
    ownerMail: '',
    symptoms: '',
  });

  const setValueAppointment = (field: keyof Appointment, value: string) => {
    setAppointment(prevState => ({
      ...prevState,
      [field]: value,
    }));
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
            />

            <InputComponent
              label="Síntomas paciente "
              keyboardType="default"
              inputPlaceholder="Ej. Tiene un dolor en el..."
              value={appointment.symptoms}
              setValue={(value: string) =>
                setValueAppointment('symptoms', value)
              }
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    flex: 1,
    backgroundColor: '#4a356c',
  },
  navigation_bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  header_text: {
    fontWeight: '500',
    fontSize: 20,
    color: '#ffffff',
  },
  button_close: {
    borderRadius: 5,
    backgroundColor: '#f3eff9',
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  button_text_close: {
    color: '#000000',
    fontWeight: '500',
    fontSize: 15,
    textAlign: 'center',
  },
  form: {
    gap: 20,
  },
});
