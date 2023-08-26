import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Ex5 = () => {
    return (
        <View>
            <View>
                <TouchableOpacity style={{ backgroundColor: 'blue', alignItems: 'center', marginBottom: 20, borderRadius: 10, }}>
                    <Text style={{ margin: 20 }}>Say hello</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: 'red', alignItems: 'center' }}>
                    <Text style={{ margin: 20 }}>Say Bye</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Ex5
