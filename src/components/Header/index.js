import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements';
import colors from '../../colors';
export default class Header extends React.PureComponent {


    render() {
        return (
            <View style={{ alignSelf: 'stretch', flexDirection: 'row', backgroundColor: colors.primary, width: '100%', height: '8%', alignItems: 'center', borderBottomWidth: 4, borderColor: colors.textColor }}>
                <View style={{ flex: 0.2 }}>
                    <TouchableOpacity onPress={()=>this.props.navigation.openDrawer()}>
                        <Icon
                            name='bars'
                            type='font-awesome'
                            color={colors.textColor}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.7, alignItems: 'center' }}>
                    <Text style={{ fontSize: 24, color: colors.textColor }}>{this.props.title}</Text>
                </View>
            </View>
        )
    }
}