import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import Brix from '../pages/Brix'
import Diluicao from '../pages/Diluicao'
import Temperatura from '../pages/Temperatura'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


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


const TabNavigator = createMaterialBottomTabNavigator(
    {
        Diluição: {
            screen: Diluicao,
            navigationOptions: () => {
                const TabIcon = ({ tintColor }) => (
                    <View style={{ width: 26 }}>
                        <Icon
                            name="flask"
                            type="font-awesome"
                            color={tintColor}
                        />
                    </View>
                );
                return {
                    tabBarIcon: TabIcon,
                };
            },
        },
        Brix: {
            screen: Brix,
            navigationOptions: () => {
                const TabIcon = ({ tintColor }) => (
                    <View style={{ width: 26 }}>
                        <Icon
                            name="grid"
                            type="entypo"
                            color={tintColor}
                        />
                    </View>
                );
                return {
                    tabBarIcon: TabIcon,
                };
            },
        },
        Temperatura: {
            screen: Temperatura,
            navigationOptions: () => {
                const TabIcon = ({ tintColor }) => (
                    <View style={{ width: 26 }}>
                        <Icon
                            name='thermometer-full'
                            type='font-awesome'
                            color={tintColor}
                        />
                    </View>
                );
                return {
                    tabBarIcon: TabIcon,
                };
            },
        },


    },
    {
    animationEnabled: true,
    swipeEnabled: true,
    barStyle: { color: '#fff' },
    tabBarOptions: { activeTintColor: 'black', tintColor: 'black',
},
},

)

export default createAppContainer(TabNavigator)