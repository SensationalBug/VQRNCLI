import axios from 'axios';
import React, {createContext, useState} from 'react';

interface props {
  children: JSX.Element;
}

export const UserContext = createContext({});

const UserProvider = ({children}: props) => {
  const [doc, setDoc] = useState('');
  const [tramites, setTramites] = useState([]);
  const [token, setToken] = useState('');
  const [isUser, setIsUser] = useState(false);
  const [ticketId, setTicketId] = useState(0);

  const URL = 'http://192.168.104.92/ARS_SENASA-VQ/';

  const login = (docNumber: string, navigation: any, screen: string) => {
    navigation.navigate(screen);
    axios({
      method: 'post',
      url: `${URL}/api/services/client/Auth/Token`,
      data: {
        username: 'rtulio',
        password: '123456',
        docType: 'Cedula',
        docNumber: docNumber,
        client_Id: '',
        client_Secret:
          '',
        callbackToken: '',
        data: {
          gender: 'Male',
          age: 25,
        },
      },
    })
      .then(res => {
        setDoc(docNumber);
        setToken(res.data.result);
        setIsUser(res.data.success);
      })
      .catch(err => console.log(err));
  };

  const getSucursales = (navigation: any, screen: string) => {
    axios({
      method: 'get',
      url: `${URL}/api/services/client/Organization/GetAll`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        navigation.navigate(screen, res.data);
      })
      .catch(err => console.log(err));
  };

  const getServicesByOrgId = (
    sucursal: string,
    navigation: any,
    screen: string,
    id: number,
  ) => {
    axios({
      method: 'get',
      url: `${URL}/api/services/client/Service/GetAvailable?pOrgId=${sucursal}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        setTramites(res.data);
        navigation.navigate(screen, [res.data, id]);
      })
      .catch(err => console.log(err));
  };

  const ticketReserve = (
    organizationId: number,
    taskId: number,
    navigation: any,
    screen: string,
  ) => {
    axios({
      method: 'post',
      url: `${URL}/api/services/client/Ticket/Reserve`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        organizationId: organizationId,
        serviceId: taskId,
      },
    })
      .then(res => {
        navigation.navigate(screen, res.data);
        setTicketId(res.data.result.id);
      })
      .catch(err => console.log(err));
  };

  const getTicket = (navigation: any, screen: string) => {
    axios({
      method: 'get',
      url: `${URL}/api/services/client/Ticket/Get?pTicketId=${ticketId}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        navigation.navigate(screen, res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <UserContext.Provider
      value={{
        doc,
        token,
        login,
        isUser,
        tramites,
        setIsUser,
        getTicket,
        getSucursales,
        ticketReserve,
        getServicesByOrgId,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
