import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';



export default function Task({ data, deleteItem }) {
    return (
        <View style={style.container}>
            <TouchableOpacity style={style.trashButton}>
                <FontAwesome name='trash' size={20} color="#22272e" onPress={deleteItem}/>
            </TouchableOpacity>

            <Text>{data.item}</Text>
        </View>
    )

}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(196,196,196,0.20)',
        marginTop: 12,
        padding: 12,
        borderRadius: 4,
        flexDirection: 'row'
    }, trashButton: {
        marginRight: 8
    }
});