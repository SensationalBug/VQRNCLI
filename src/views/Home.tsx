import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import OptionButton from '../subComponents/OptionButton';

const Home = ({navigation}: any) => {
  return (
    <View style={styles.globalView}>
      <View style={styles.header}>
        <Icon name="users" size={30} color="#53575A" />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Image
            style={styles.headerLogo}
            source={require('../../assets/senasa.png')}
          />
        </TouchableOpacity>
        <Icon name="bell" size={30} color="#53575A" />
      </View>
      <View style={styles.mainUserView}>
        <View style={styles.mainUserContainer}>
          <View style={styles.wellcomeContainer}>
            <Text style={styles.wellcomeMessage}>Hola,</Text>
            <Text style={styles.wellcomeMessage}>Pedro Luis De Leon</Text>
          </View>
          <View>
            <Text style={styles.mainUserData}>Contrato: 0000000</Text>
            <Text style={styles.mainUserData}>NNS: 000000000</Text>
          </View>
        </View>
        <View style={styles.iconUserContainer}>
          <TouchableOpacity style={styles.iconUser}>
            <Icon name="user-circle-o" size={75} color="#fff" />
            <Icon
              size={20}
              color="#fff"
              name="angle-right"
              style={styles.iconStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.dataShareBox}>
        <View style={styles.dataView}>
          <View style={styles.dataContainer}>
            <Text style={styles.shareTitle}>Contributivo</Text>
            <Icon name="circle" size={20} color="#3DAE2B" />
          </View>
          <View style={styles.commonText}>
            <Text>Medicamento</Text>
            <Text style={styles.numberStyle}>8,000</Text>
          </View>
          <View style={styles.commonText}>
            <Text>Alto Costo</Text>
            <Text style={styles.numberStyle}>1,000,000</Text>
          </View>
          <View style={styles.commonText}>
            <Text>Renovacion</Text>
            <View style={styles.dateContainer}>
              <Icon name="calendar" color="#3DAE2B" size={20} />
              <Text style={styles.dateTitle}>31-12-2022</Text>
            </View>
          </View>
        </View>
        <View style={styles.shareBox}>
          <View style={styles.shareView}>
            <Text style={styles.shareTitle}>Complementario</Text>
            <Icon name="circle" size={20} color="#53575A" />
          </View>
          <View style={styles.shareContainer}>
            <TouchableOpacity style={styles.shareButton}>
              <Icon name="qrcode" color="#fff" size={40} />
            </TouchableOpacity>
            <Text style={styles.shareText}>Conocelos</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <OptionButton
          navigation={navigation}
          title="Prestadores"
          icon="hospital-o"
          screen="Home"
        />
        <OptionButton
          navigation={navigation}
          title="Carnet"
          icon="address-card"
          screen="Home"
        />
        <OptionButton
          navigation={navigation}
          title="Autorizacion"
          icon="file-text"
          screen="Home"
        />
        <OptionButton
          navigation={navigation}
          title="Cobertura"
          icon="medkit"
          screen="Home"
        />
        <OptionButton
          navigation={navigation}
          title="Turno virtual"
          icon="ticket"
          screen="VirtualTask"
        />
        <OptionButton
          navigation={navigation}
          title="Ajustes"
          icon="cog"
          screen="Home"
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  globalView: {backgroundColor: '#E6E6E6', flex: 1},
  header: {
    width: '100%',
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  headerLogo: {width: 200, resizeMode: 'cover', height: 60},
  mainUserView: {
    marginHorizontal: 20,
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: '#3DAE2B',
    paddingVertical: 20,
    borderRadius: 20,
    marginTop: 15,
  },
  mainUserContainer: {
    justifyContent: 'space-evenly',
    height: 100,
    width: '75%',
  },
  wellcomeContainer: {marginBottom: 20},
  wellcomeMessage: {fontSize: 23, color: '#fff', fontWeight: '700'},
  mainUserData: {color: '#fff', fontWeight: '700'},
  iconUserContainer: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconUser: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {marginHorizontal: 10},
  dataShareBox: {
    marginHorizontal: 20,
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
  },
  dataView: {
    width: '49%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  numberStyle: {
    backgroundColor: '#3DAE2B',
    borderRadius: 10,
    textAlign: 'center',
    color: '#fff',
  },
  commonText: {marginBottom: 10},
  dateContainer: {flexDirection: 'row', alignItems: 'center'},
  dateTitle: {marginHorizontal: 5, fontSize: 18},
  shareBox: {
    width: '49%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  shareView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  shareTitle: {fontWeight: '700'},
  shareContainer: {justifyContent: 'center', alignItems: 'center'},
  shareButton: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3DAE2B',
  },
  shareText: {fontSize: 18, marginVertical: 10},
  buttonsContainer: {
    backgroundColor: '#fff',
    width: '91%',
    alignSelf: 'center',
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
});
