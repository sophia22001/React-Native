import React, {useState} from 'react';
import {Alert, Button, Modal, Text, View} from 'react-native';

const ModalCompo = () => {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(modal ? false : true);
  };
  return (
    <View>
      <Button title="Open Modal" onPress={handleModal} />

      <Modal
        visible={modal}
        animationType="slide"
        onShow={() => Alert.alert('Warning@')}>
        <View style={{marginTop: 60, backgroundColor: 'red'}}>
          <Text>This is modal content</Text>
        </View>
        <Button title="Go Back" onPress={handleModal} />
      </Modal>
    </View>
  );
};

export default ModalCompo;
