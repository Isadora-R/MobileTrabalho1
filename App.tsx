import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TelaInicio from './src/components/TelaInicio';
import TelaBuscar from './src/components/TelaBuscar';
import TelaLogin from './src/components/TelaLogin';
import TelaCarrinho from './src/components/TelaCarrinho';
import TelaPerfil from './src/components/TelaPerfil';
import styles from './src/components/Styles';

const navStack = createNativeStackNavigator();
const navBottom = createBottomTabNavigator();
const estiloPadrao = styles.fonteMaior;

function Logado() {
  return (
    <navBottom.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarActiveBackgroundColor: '#ffcd6d',
        tabBarInactiveBackgroundColor: '#ffae14',
        tabBarShowLabel:true, //mostrar label
        //tabBarLabelStyle:{fontSize:15}
        tabBarLabelStyle:estiloPadrao
      }}>
      <navBottom.Screen
        name="Inicio"
        options={{
          tabBarInactiveTintColor: 'gray', //Por padrão
        }}
        component={TelaInicio}
      />
      <navBottom.Screen name="Buscar" component={TelaBuscar} />
      <navBottom.Screen name="Carrinho" component={TelaCarrinho} />
      <navBottom.Screen name="Perfil" component={TelaPerfil} />
    </navBottom.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <navStack.Navigator>
        <navStack.Screen
          name="Login"
          component={TelaLogin}
          options={{headerShown: false}}
        />
        <navStack.Screen
          name="Logado"
          component={Logado}
          options={{headerShown: false}}
        />
      </navStack.Navigator>
    </NavigationContainer>
  );
}
