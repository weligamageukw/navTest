import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import UserDetail from '../components/UserDetail';

import { addNewTodo } from '../../redux/todoSlice';

const AddTodo = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const onTitleChangeHandler = (text) => {
    setTitle(text)
  };

  const ontDescriptionChangeHandler = (text) => {
    setDescription(text)
  };

  const submitTodoHandler = () => {
    if (title.length > 2 && description.length > 3) {
      dispatch(
        addNewTodo({
          title,
          description
        })
      );
    } else {
      Alert.alert('OOPS!', 'a todo must be over 3 chars long...', [
        { text: 'Ok' }
      ])
    }
  }

  return (
    <ScrollView style={{ flex: 1, }} contentContainerStyle={{flexGrow: 1}}>
      <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
        <View style={styles.container}>

          <UserDetail />

          <View style={{ height: 30, marginTop: 15, flexDirection: 'row' }}>
            <View style={{ height: 30, backgroundColor: '#51C833', width: 5, borderRadius: 5 }} />
            <Text style={{ color: '#fff', fontSize: 20, marginLeft: 10 }}>Add Todo's</Text>
          </View>

          <View style={styles.todoContainer}>
            <Text style={{ color: '#fff', fontSize: 16, marginLeft: 10, marginBottom: 3 }}>Title</Text>
            <TextInput
              style={styles.input}
              placeholder='Enter title...'
              placeholderTextColor={'#fff'}
              value={title}
              onChangeText={onTitleChangeHandler} />
          </View>

          <View style={styles.todoContainer}>
            <Text style={{ color: '#fff', fontSize: 16, marginLeft: 10, marginBottom: 3 }}>Description</Text>
            <TextInput
              style={styles.input}
              placeholder='Enter description...'
              placeholderTextColor={'#dfe2e6'}
              value={description}
              onChangeText={ontDescriptionChangeHandler} />
          </View>

          <View style={{ marginTop: 12, backgroundColor: '#51C833', borderRadius: 8, marginBottom: 100 }}>
            <TouchableOpacity onPress={() => submitTodoHandler()} style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>ADD</Text>
            </TouchableOpacity>
          </View>

        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
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
  },
  todoContainer: {
    marginVertical: 4,
  },
  input: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    color: '#fff',
    placeholderTextColor: '#fff',
    borderRadius: 8,
    backgroundColor: '#304559'

  }
});

export default AddTodo;