import { View, Text, Switch, Image, FlatList, StyleSheet, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ListItem from '../components/listItem';
import UserDetail from '../components/UserDetail';

import service from '../services/service';

const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await service.get('/get_data.php');
                setPosts(response.data);
            } catch (err) {
                if (err.response) {
                    console.log(err.response.data);
                    Alert.alert('Error getting posts');
                } else {
                    console.log(`Error: ${err.message}`);
                    Alert.alert('Unknown error!');
                }
            }
        }
        fetchPosts();
    }, []);

    return (
        <View style={styles.container}>
            <UserDetail />
            <View style={{ height: 30, marginTop: 15, flexDirection: 'row', marginBottom: 5 }}>
                <View style={{ height: 30, backgroundColor: '#51C833', width: 5, borderRadius: 5 }} />
                <Text style={{ color: '#fff', fontSize: 20, marginLeft: 10 }}>Explore</Text>
            </View>

            <View style={{ flex: 1, paddingBottom: 54 }}>
                <FlatList
                    data={posts}
                    renderItem={({ item }) => (
                        <ListItem post={item} />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    container: {
        flex: 1,
        backgroundColor: '#092a3e',
        padding: 20,
    },
});

export default Home;
