import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';

const Ex9 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/?results=100&inc=name');
            const json = await response.json();
            setData(json.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const renderItem = ({ item }) => (
        <Text style={{
            padding: 10,
            fontSize: 18,
            borderBottomWidth: 1,
            borderColor: 'gray',
        }}>{`${item.name.first} ${item.name.last}`}</Text>
    );

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

export default Ex9
