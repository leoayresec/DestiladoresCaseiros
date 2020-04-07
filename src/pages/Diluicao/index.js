import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import colors from '../../colors'

export default class Diluicao extends PureComponent {

    render() {
        return (
            <View style={{flex:1,backgroundColor:colors.white}}>
                <Text style={{color:colors.black}}>Diluicao</Text>
            </View>
        )
    }
}