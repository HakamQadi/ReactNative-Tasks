import React from 'react'
import { FlatList, Text, View } from 'react-native'

const Ex8 = () => {
    const data = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
    ];

    const renderItem = ({ item }) => (
        <Text>{item.title}</Text>
    );
    return (
        <View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default Ex8
