import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const OptionButtonVQ = ({title, icon, operacion}: any) => {
  return (
    <TouchableOpacity style={styles.optionButtonVQ} onPress={() => operacion()}>
      <Icon name={icon} color="#fff" size={40} />
      <Text style={styles.optionTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default OptionButtonVQ;

const styles = StyleSheet.create({
  optionButtonVQ: {
    padding: 30,
    width: '90%',
    marginTop: 15,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#3DAE2B',
    justifyContent: 'space-evenly',
  },
  optionTitle: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '600',
  },
});
