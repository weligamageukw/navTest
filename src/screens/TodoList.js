import {
    View,
    Text,
    FlatList,
    StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import UserDetail from '../components/UserDetail';
import TodoItem from '../components/TodoItem';

const TodoList = () => {

    const todos = useSelector((state) => state.todos);

    // const [todos, setTodos] = useState([
    //     { title: 'sports', description: 'Play cricket in the evening', key: '1' },
    //     { title: 'Mobile Apps', description: 'Create a mobile app', key: '2' },
    //     { title: 'Learning', description: 'Read a history book', key: '5' }
    // ]);

    return (
        <View style={styles.container}>
            <UserDetail />

            <View style={{ height: 30, marginTop: 15, flexDirection: 'row', marginBottom: 5, }}>
                <View style={{ height: 30, backgroundColor: '#51C833', width: 5, borderRadius: 5 }} />
                <Text style={{ color: '#fff', fontSize: 20, marginLeft: 10, }}>Todo's</Text>
            </View>

            <View style={{ flex: 1, paddingBottom: 50 }}>
                <FlatList
                    data={todos}
                    renderItem={({ item }) => (
                        <TodoItem item={item} />
                    )}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#092a3e',
        padding: 20,
    },
    userDetailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#314b5e',
        borderRadius: 10,
        padding: 12,
        marginTop: 25,
    },
    basicText: {
        color: '#fff',
        fontSize: 16,
    }
});

export default TodoList;