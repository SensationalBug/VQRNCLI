import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Ticket = ({route, navigation}: any) => {
  const {params} = route;
  console.log(params.result);
  const {
    decoratedTaskNum,
    serviceDescription,
    organizationDescription,
    peopleAheadOnReferencedQueue,
  } = params.result;
  return (
    <View style={styles.boxContainer}>
      <View>
        <Image
          style={styles.image}
          source={require('../../assets/senasaV.png')}
        />
        <View style={styles.textContainer}>
          <Text style={styles.commonFontMainText}>
            {organizationDescription}
          </Text>
          <Text style={styles.commonFontText}>Su turno es:</Text>
          <Text style={styles.commonFontMainText}>{decoratedTaskNum}</Text>
          <Text style={styles.textDesc}>{serviceDescription}</Text>
          <Text style={styles.commonFontText}>
            Personas delante: {peopleAheadOnReferencedQueue}
          </Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.commonButtonText}>Volver</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => navigation.goBack()}>
          <Text style={styles.commonButtonText}>Anunciar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton}>
          <Icon name="close" color="#fff" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Ticket;

const styles = StyleSheet.create({
  boxContainer: {justifyContent: 'space-between', flex: 1},
  image: {
    height: 300,
    width: 'auto',
    marginVertical: 20,
    resizeMode: 'contain',
  },
  textContainer: {justifyContent: 'center', alignItems: 'center'},
  commonFontMainText: {fontSize: 40, paddingBottom: 20},
  textDesc: {fontSize: 25, paddingBottom: 20},
  commonFontText: {fontSize: 25},
  buttonsContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  commonButton: {
    width: 120,
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: '#3DAE2B',
  },
  commonButtonText: {color: '#fff', fontSize: 20, textAlign: 'center'},
  closeButton: {
    padding: 20,
    borderRadius: 50,
    marginHorizontal: 10,
    backgroundColor: '#CA3030',
  },
});
