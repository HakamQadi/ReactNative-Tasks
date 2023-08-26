import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Ex3 = () => {
    const [counter, setCounter] = useState(0)
    const increaseCounter = () => {
        setCounter(counter+1)
    }
    return (
        <View>
            <Text style={{ alignSelf: 'center', marginBottom: 10 }}>{counter}</Text>
            <TouchableOpacity style={{ backgroundColor: 'red', alignItems: 'center' }} onPress={increaseCounter}>
                <Text style={{ margin: 20 }}>Press Me</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Ex3
