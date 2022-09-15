import React from 'react';

import HomeScreen from '../screens/Home';
import FavouriteScreen from '../screens/Favourite';
import AddTodoScreen from '../screens/AddTodo';
import TodoListScreen from '../screens/TodoList';

import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

const ICON_SIZE = 25;
const Tab = createBottomTabNavigator();

const AppNavigation = () => {

  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        elevation: 0,
        backgroundColor: '#51C833',
        height: 60,
      }
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
            <Octicons name="three-bars" size={ICON_SIZE} color={focused ? '#f4f3f4' : 'teal'} />
          </View>
        )
      }
      } />
      <Tab.Screen name="Favourite" component={FavouriteScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
            <Feather name="edit" size={ICON_SIZE} color={focused ? '#f4f3f4' : 'teal'} />
          </View>
        )
      }
      } />
      <Tab.Screen name="AddTodo" component={AddTodoScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
            <Feather name="edit-3" size={ICON_SIZE} color={focused ? '#f4f3f4' : 'teal'} />
          </View>
        )
      }
      } />
      <Tab.Screen name="TodoList" component={TodoListScreen} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
            <Ionicons name="reload-circle-sharp" size={ICON_SIZE} color={focused ? '#f4f3f4' : 'teal'} />
          </View>
        )
      }
      } />
      
    </Tab.Navigator>
  );
};

export default AppNavigation;

