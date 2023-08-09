import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const OptionButton = ({navigation, title, icon, screen}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate(screen)}
        style={styles.optionButton}>
        <Icon name={icon} size={40} color="#fff" />
      </TouchableOpacity>
      <Text>{title}</Text>
    </View>
  );
};

export default OptionButton;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  optionButton: {
    width: 70,
    height: 70,
    borderRadius: 15,
    marginVertical: 10,
    alignItems: 'center',
    marginHorizontal: 15,
    justifyContent: 'center',
    backgroundColor: '#3DAE2B',
  },
});
