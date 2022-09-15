import { View, Text, StyleSheet, Image, } from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

import CheckBox from '@react-native-community/checkbox';
import { selectPosts, removePosts } from '../../redux/postSlice';

const listItem = ({ post }) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    // const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();

    const checkboxHandler = (newValue) => {
        setToggleCheckBox(newValue);
        if (newValue) {
            dispatch(
                selectPosts(post.id)
            );
        } else {
            dispatch(
                removePosts(post.id)
            );
        }
    };

    return (
        <View style={styles.userDetailWrapper}>
            <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={{ uri: post.user.profile }}
                            style={styles.userImage}
                        />
                        <View style={{ marginLeft: 6, }}>
                            <Text style={{ fontSize: 16, marginTop: -2, color: '#fff', }}>{post.user.name}</Text>
                            <Text style={{ fontSize: 12, marginTop: -2, color: '#fff', }}>jane.cooper@example.com</Text>
                        </View>
                    </View>

                    <View>
                        <CheckBox
                            tintColors={{ false: "#CBCFE1", true: "#51C833" }}
                            disabled={false}
                            value={toggleCheckBox}
                            onValueChange={(newValue) => checkboxHandler(newValue)}
                        />
                    </View>
                </View>

                <View style={{ marginTop: 8 }}>
                    <Text style={{ fontSize: 12, color: '#fff', }}>{post.descriptions}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 5 }}>
                        <EvilIcons name="clock" size={22} color='#f4f3f4' />
                        <Text style={{ fontSize: 13, color: '#fff', marginLeft: 5 }}>{post.date_time}</Text>
                    </View>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    userDetailWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#314b5e',
        borderRadius: 10,
        padding: 12,
        marginTop: 15,
    },
    headerText: {
        color: '#fff',
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 15,
    },
    dateText: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 2,
    },
    userImage: {
        height: 36,
        width: 36,
        borderRadius: 4,
    },
    basicText: {
        color: '#fff',
        fontSize: 14,
    }
});

export default listItem;