import React from 'react';
import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';

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
      <View style={styles.container}>
        <View style={styles.navigation_bar}>
          <Text style={styles.header_text}>Desde modal</Text>

          <Pressable style={styles.button_close} onPress={closeModal}>
            <Text style={styles.button_text_close}>Cerrar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    flex: 1,
  },
  navigation_bar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header_text: {
    fontWeight: '500',
    fontSize: 16,
    color: '#6a206c',
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
});
