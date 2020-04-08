import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import Brix from '../pages/Brix'
import Diluicao from '../pages/Diluicao'
import Temperatura from '../pages/Temperatura'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';


const Home = createStackNavigator({
    Brix: {
        screen: Brix,
    },
    Diluicao: {
        screen: Diluicao,
    },
    Temperatura: {
        screen: Temperatura,
    }
});


const TabNavigator = createDrawerNavigator(
    {
        Diluicao:  Diluicao,

        Brix:  Brix,

        Temperatura:Temperatura,    

    }
    );

export default createAppContainer(TabNavigator)