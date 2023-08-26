import React from 'react'
import { Button, View ,Alert} from 'react-native'

const Ex2 = () => {
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

export default Ex2
