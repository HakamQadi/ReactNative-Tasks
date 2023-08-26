import React, { useState } from 'react'
import { ScrollView, Text, TextInput, View } from 'react-native'

const Ex7 = () => {
    const showAlert = () => {
        Alert.alert(
          "Alert",
          "Hello.",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
      };
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e)
    }
    // console.log(inputValue)
    return (
        <View>
            <TextInput
                style={{ borderColor: 'gray', borderWidth: 1, padding: 10 }}
                onChangeText={handleInputChange}
                value={inputValue}
                placeholder="Type something..."
            />
        </View>
    )
}

export default Ex7
