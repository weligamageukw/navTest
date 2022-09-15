import React from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

const TodoItem = ({ item }) => {

    return (
        <View style={styles.listItem} >
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    listItem: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 6,
        borderWidth: .5,
        borderColor: '#ddd',
        justifyContent: 'center',
        borderRadius: 8,
    },
    title: {
        fontSize: 16,
        color: '#fff',
        marginLeft: 10,
        marginBottom: 5,
        fontStyle: 'italic',
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#fff',
        marginLeft: 10,
    },
});

export default TodoItem;