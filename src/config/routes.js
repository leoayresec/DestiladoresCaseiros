import React from 'react';
import { View, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import Brix from '../pages/Brix'
import Diluicao from '../pages/Diluicao'
import Temperatura from '../pages/Temperatura'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import colors from '../colors';


const Home = createStackNavigator({
    Brix: {
        screen: Brix,
    },
    Diluição: {
        screen: Diluicao,
    },
    Temperatura: {
        screen: Temperatura,
    }
});

const DrawerContent = (props) => (
    <View>
        <View
            style={{
                backgroundColor: colors.primary,
                height: 140,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomWidth: 5,
                borderColor: colors.textColor
            }}
        >
            <Image
                style={{
                    height: 120,
                }}
                source={require('../img/logo-horizontal.jpg')}
                resizeMode='contain'
            />
        </View>
        <DrawerItems {...props} />
    </View>
)

const TabNavigator = createDrawerNavigator(
    {
        Diluição: {
            screen: Diluicao,
            navigationOptions: {
                drawerLabel: 'Calcular diluição',
                drawerIcon: ({ tintColor }) =>
                    <Icon
                        name="flask"
                        type="font-awesome"
                        color={tintColor}
                    />
            }
        },

        Brix: {
            screen: Brix,
            navigationOptions: {
                drawerLabel: 'Calcular Brix',
                drawerIcon: ({ tintColor }) =>
                    <Icon
                        name="grid"
                        type="entypo"
                        color={tintColor}
                    />
            }
        },

        Temperatura: {
            screen: Temperatura,
            navigationOptions: {
                drawerLabel: 'Calcular Temperatura',
                drawerIcon: ({ tintColor }) =>
                    <Icon
                        name='thermometer-full'
                        type='font-awesome'
                        color={tintColor}
                    />
            }
        },

    }, {
    contentComponent: DrawerContent,
    drawerBackgroundColor: colors.primary,
    contentOptions: {
        activeTintColor: colors.textColor,
        activeBackgroundColor: 'transparent',
        inactiveTintColor: colors.white,
        inactiveBackgroundColor: 'transparent',
        labelStyle: {
            fontSize: 15,
        },
    },

}
);

export default createAppContainer(TabNavigator)