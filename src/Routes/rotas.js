import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Servicos from '../telas/Servicos/servicosIndex';
import Carrinho from '../telas/Carrinho/carrinhoIndex';


const Tab = createMaterialBottomTabNavigator();


export default function Rotas() {
    const size = 10

  return (
    <Tab.Navigator 
    initialRouteName="Serviços"
    activeColor="#f0edf6"
    inactiveColor="black"
    barStyle={{ 
        backgroundColor: '#694fad'
    }}
    >
      <Tab.Screen name="Serviços" component={Servicos} options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" size={24} color={'black'} />;
          },
        }} />
      <Tab.Screen name="Carrinho" component={Carrinho}  options={{
          tabBarIcon: ({ color, size }) => {
            return <Icon name="cart-outline" size={24} color={'black'} />;
          },
        }}/>
    </Tab.Navigator>
  );
}