import React from 'react'
import { View } from 'react-native'

const Ex11 = () => {
    const showAlert = () => {
        Alert.alert(
          "Alert",
          "Hello.",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
      };
    return (
        <View >
            <Button
            onPress={showAlert}
            title="Press Me"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}

export default Ex11
