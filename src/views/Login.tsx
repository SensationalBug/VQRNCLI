import React, {useContext, useState} from 'react';
import {View, Image, TextInput, StyleSheet} from 'react-native';
import {FAB} from '@react-native-material/core';
import Icon from 'react-native-vector-icons/FontAwesome';
import {UserContext} from '../context/UserContext';

const iconComponent = (props: object) => (
  <Icon name="share" {...props} color="#fff" />
);

const Login = ({navigation}: any) => {
  const {login}: any = useContext(UserContext);
  const [docNumber, setDocNumber] = useState<string>('');

  return (
    <View>
      <Image
        style={styles.image}
        source={require('../../assets/senasaV.png')}
      />
      <View style={styles.viewContainer}>
        <TextInput
          onChangeText={(val: string) => setDocNumber(val)}
          style={styles.textInput}
          placeholder="Ingrese su número de cédula"
          keyboardType="numeric"
          maxLength={11}
        />
        <FAB
          onPress={() => {
            login(docNumber, navigation, 'Main');
          }}
          color="#3DAE2B"
          icon={props => iconComponent(props)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 'auto',
    marginVertical: 30,
    resizeMode: 'contain',
  },
  viewContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  textInput: {
    padding: 15,
    fontSize: 20,
    borderRadius: 5,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#3DAE2B',
  },
});

export default Login;
