import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
  touchablew,
} from 'react-native';
import React, { useState } from 'react';
import { auth } from '../Firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
const LogInStack = (navigation) => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');

  async function SignIn() {
    await signInWithEmailAndPassword(auth, mail, pass);
    auth?.currentUser?.uid
      ? navigation.navigation.push('Main')
      : alert('aaa');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View
        style={{
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 20,
        }}
      >
        <Image
          source={require('../assets/headerLogo.png')}
          style={{ height: 65, resizeMode: 'contain' }}
        />
        <TextInput
          placeholder="Phone number, username or email address"
          style={styles.input}
          placeholderTextColor="#807d7d"
          value={mail}
          onChangeText={setMail}
        />
        <TextInput
          placeholder="Passsword"
          style={styles.input}
          placeholderTextColor="#807d7d"
          value={pass}
          onChangeText={setPass}
        />

        <Text
          style={{
            alignSelf: 'flex-end',
            color: '#489cf0',
            fontWeight: '600',
            fontSize: 12,
          }}
        >
          Forgotten password?
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#489cf0',
            width: '100%',
            paddingVertical: 13,
            borderRadius: 3,
            marginTop: 37,
          }}
          onPress={SignIn}
        >
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: '600',
            }}
          >
            Log In
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          borderTopWidth: 1,
          width: '100%',
          borderTopColor: '#c4c4c4',
          flexDirection: 'row',
          justifyContent: 'center',
          paddingVertical: 15,
        }}
      >
        <Text
          style={{
            color: '#807d7d',
          }}
        >
          Don't have an account?{' '}
        </Text>
        <Text
          style={{ color: '#489cf0', fontWeight: '500' }}
          onPress={() => navigation.navigation.goBack()}
        >
          Sign Up
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LogInStack;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#c4c4c4',
    backgroundColor: '#f5f5f5',
    borderRadius: 3,
    width: '100%',
    paddingLeft: 10,
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
