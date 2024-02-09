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
import {InputComponent} from '.';

interface Props {
  showModal: boolean;
  closeModal: () => void;
}

export function ModalComponent({
  showModal,
  closeModal,
}: Props): React.JSX.Element {
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
            />

            <InputComponent
              label="Nombre propietario"
              keyboardType="default"
              inputPlaceholder="Ej. Juan Alvarez"
            />

            <InputComponent
              label="Email propietario"
              keyboardType="email-address"
              inputPlaceholder="Ej. juana@gmail.com"
            />

            <InputComponent
              label="Teléfono propietario"
              keyboardType="number-pad"
              inputPlaceholder="Ej. 087654321"
            />

            <InputComponent
              label="Síntomas paciente "
              keyboardType="default"
              inputPlaceholder="Ej. Tiene un dolor en el..."
            />

            {/* asdadas asdssssssssssssss*/}
            <InputComponent
              label="Síntomas paciente "
              keyboardType="default"
              inputPlaceholder="Ej. Tiene un dolor en el..."
            />
            <InputComponent
              label="Síntomas paciente "
              keyboardType="default"
              inputPlaceholder="Ej. Tiene un dolor en el..."
            />
            <InputComponent
              label="Síntomas paciente "
              keyboardType="default"
              inputPlaceholder="Ej. Tiene un dolor en el..."
            />
            <InputComponent
              label="Síntomas paciente "
              keyboardType="default"
              inputPlaceholder="Ej. Tiene un dolor en el..."
            />
            <InputComponent
              label="Síntomas paciente "
              keyboardType="default"
              inputPlaceholder="Ej. Tiene un dolor en el..."
            />
            <InputComponent
              label="Síntomas paciente "
              keyboardType="default"
              inputPlaceholder="Ej. Tiene un dolor en el..."
            />
            <InputComponent
              label="Síntomas paciente "
              keyboardType="default"
              inputPlaceholder="Ej. Tiene un dolor en el..."
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
