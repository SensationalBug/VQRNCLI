import React, {useContext} from 'react';
import {UserContext} from '../context/UserContext';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const SucursalBox = ({item, navigation}: any) => {
  const {getServicesByOrgId}: any = useContext(UserContext);
  const {id, description, availableNow} = item;

  const styles = StyleSheet.create({
    boxContainer: {
      padding: 20,
      width: '95%',
      marginTop: 10,
      borderRadius: 10,
      alignSelf: 'center',
      backgroundColor: '#3DAE2B',
      opacity: availableNow ? 1 : 0.6,
    },
    descriptionText: {
      fontSize: 25,
      color: '#fff',
      fontWeight: '600',
    },
    textStyle: {color: '#fff', fontSize: 20},
  });

  return (
    <TouchableOpacity
      style={styles.boxContainer}
      disabled={availableNow ? false : true}
      onPress={() => getServicesByOrgId(id, navigation, 'Tasks', id)}>
      <Text style={styles.textStyle}>Sucursal:</Text>
      <Text style={styles.descriptionText}>{description}</Text>
    </TouchableOpacity>
  );
};

export default SucursalBox;
