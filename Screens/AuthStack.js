import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const AuthStack = (navigation) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <View style={styles.main}>
        <Image
          source={require('../assets/headerLogo.png')}
          style={{ height: 65, resizeMode: 'contain' }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: '#489cf0',
            width: '100%',
            paddingVertical: 13,
            borderRadius: 3,
            marginTop: 37,
          }}
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: '600',
            }}
          >
            Create New Account
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            color: '#489cf0',
            marginTop: 25,
            fontWeight: '600',
          }}
          onPress={() => navigation.navigation.push('LogIn')}
        >
          Log In
        </Text>
      </View>
    </View>
  );
};

export default AuthStack;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
    height: '30%',
    alignItems: 'center',
    marginHorizontal: 25,
  },
});
