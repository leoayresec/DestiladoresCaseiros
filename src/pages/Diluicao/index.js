import React, { PureComponent } from 'react'
import { View, Text } from 'react-native'
import colors from '../../colors'
import { TextInput } from 'react-native-paper';

export default class Diluicao extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            diluir: ''
        }
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                <View style={{ width:"100%",  paddingTop: 40, flexDirection:'row', justifyContent:'space-around' }}>

                    <TextInput
                        label={'Diluir'}
                        style={{ height: 60, width: "20%", backgroundColor:colors.white }}
                        value={this.state.diluir}
                        keyboardType={'number-pad'}
                        autoCompleteType={'off'}
                        returnKeyType={'next'}
                        onChangeText={text => this.setState({ diluir: text })}
                        blurOnSubmit={false}
                    />

                    <TextInput
                        label={'% abv destilado'}
                        style={{ height: 60, width: "20%", backgroundColor:colors.white }}
                        value={this.state.diluir}
                        keyboardType={'number-pad'}
                        onChangeText={text => this.setState({ diluir: text })}
                        blurOnSubmit={true}
                    />   
                </View>
            </View>
        )
    }
}