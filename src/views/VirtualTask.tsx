import React, {useContext} from 'react';
import {View} from 'react-native';
import OptionButtonVQ from '../subComponents/OptionButtonVQ';
import {UserContext} from '../context/UserContext';

const VirtualTask = ({navigation}: any) => {
  const {getSucursales, getTicket}: any = useContext(UserContext);

  return (
    <View>
      <OptionButtonVQ
        screen="Sucursales"
        title="Nuevo Turno"
        icon="ticket"
        operacion={() => getSucursales(navigation, 'Sucursales')}
      />
      {/* <OptionButtonVQ
        screen="VirtualTask"
        title="Agendar una cita"
        icon="calendar"
        operacion={() => getSucursales(navigation, "VirtualTask")}
      /> */}
      <OptionButtonVQ
        screen="ActiveTicket"
        title="Consultar turno"
        icon="search"
        operacion={() => getTicket(navigation, 'Ticket')}
      />
    </View>
  );
};

export default VirtualTask;
