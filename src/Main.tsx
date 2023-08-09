import React, {useContext, useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {UserContext} from './context/UserContext';

const Main = ({navigation}: any) => {
  const {isUser}: any = useContext(UserContext);
  useEffect(() => {
    if (isUser) {
      navigation.navigate('Home');
    }
  }, [isUser, navigation]);
  return (
    <View style={styles.mainView}>
      <ActivityIndicator size={100} color="#3DAE2B" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {justifyContent: 'center', flex: 1},
  button: {
    backgroundColor: 'red',
  },
});

export default Main;
