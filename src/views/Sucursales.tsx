import React from 'react';
import {FlatList, View} from 'react-native';
import SucursalBox from '../subComponents/SucursalBox';

const Sucursales = ({route, navigation}: any) => {
  const {params} = route;
  return (
    <View>
      <FlatList
        data={params.result}
        keyExtractor={item => item.id}
        renderItem={item => <SucursalBox {...item} navigation={navigation} />}
      />
    </View>
  );
};

export default Sucursales;
