import { View, Text, StyleSheet, Switch, Image } from 'react-native';
import React, { useState, useEffect } from 'react';

import LinearGradient from 'react-native-linear-gradient';

const UserDetail = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [date, setDate] = useState(null);
    const months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    useEffect(() => {
        let today = new Date();
        // let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        let date =  months[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear();
        setDate(date);
    }, []);

    return (
        <View style={{ }}>
            <Text style={styles.headerText}>Let's make today count</Text>
            <View style={styles.headerWrapper}>
                <View>
                    <Text style={styles.dateText}>{date}</Text>
                    <Text style={[styles.basicText, { fontSize: 14, }]}>Welcome Back!</Text>
                </View>
                <Image
                    source={require('../assets/user2.png')}
                    style={styles.userImage}
                />
            </View>
            <View style={styles.userDetailWrapper}>
                <View>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16, marginBottom: 2, }}>Cameron Williamson</Text>
                    <Text style={styles.basicText}>+91 9876543210</Text>
                    <Text style={[styles.basicText, { color: '#51C833', marginTop: 2, }]}>Rs. 10,000.00</Text>
                </View>

                <View >
                    <Switch
                        trackColor={{ false: "#092a3e", true: "#51C833" }}
                        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
                {isEnabled ? <LinearGradient colors={['#F7FC00', '#00D48E']} style={styles.linearGradient} /> : null}                
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
        paddingHorizontal: 12,
        paddingVertical: 10,
        marginTop: 18,
    },
    basicText: {
        color: '#fff',
        fontSize: 15,
    },
    linearGradient: {
        position: 'absolute',
        borderRadius: 5,
        width: '110%',
        height: '125%',
        opacity: .2,
        zIndex: -1,

    },
    headerWrapper: {
        flexDirection: 'row',
        backgroundColor: '#092a3e',
        justifyContent: 'space-between',
        paddingHorizontal: 8,
    },
    headerText: {
        color: '#fff',
        fontSize: 28,
        fontWeight: "bold",
        marginBottom: 12,
    },
    dateText: {
        color: '#fff',
        fontSize: 18,
        marginBottom: 2,
    },
    userImage: {
        height: 45,
        width: 45,
        borderRadius: 5,
    },
    basicText: {
        color: '#fff',
        fontSize: 15,
    }
});

export default UserDetail;