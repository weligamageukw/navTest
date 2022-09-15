import { View, Text, FlatList, StyleSheet, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import service from '../services/service';
import ListItem from '../components/listItem';
import UserDetail from '../components/UserDetail';

const Favourite = () => {
  const postIds = useSelector((state) => state.posts);
  const tempPosts = [];
  const [posts, setPosts] = useState([]);

  const setSelectedPosts = (allPosts) => {

    postIds.forEach((value) => {

      allPosts.forEach((element) => {
        if (element.id == value) {
          tempPosts.push(element);
        }
      })
    });
    // console.log(tempPosts);
    setPosts(tempPosts);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await service.get('/get_data.php');
        setSelectedPosts(response.data);
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
  }, [postIds]);

  return (
    <View style={styles.container}>
      <UserDetail />
      <View style={{ height: 30, marginTop: 15, flexDirection: 'row' }}>
        <View style={{ height: 30, backgroundColor: '#51C833', width: 5, borderRadius: 5 }} />
        <Text style={{ color: '#fff', fontSize: 20, marginLeft: 10 }}>Selected Explore</Text>
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

export default Favourite;