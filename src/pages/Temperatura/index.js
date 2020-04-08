import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import Header from '../../components/Header'
import colors from '../../colors'

export default class Temperatura extends PureComponent {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                <Header title={"Calcular Temperatura"} navigation={this.props.navigation} />

                <Text>Temperatura</Text>
            </View>
        )
    }
}