import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text, SafeAreaView } from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
const handleLogin = () => {
  if (email === "test@example.com" && password === "123456") {
    alert("Login successful");
    // navigate to next screen
  } else {
    alert("Invalid credentials");
  }
};

    // Dummy validation
    if (email === 'employee@example.com' && password === 'password123') {
      Alert.alert('Success', 'Login Successful!');
    } else {
      Alert.alert('Failed', 'Invalid Credentials');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Employee Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Login" onPress={handleLogin} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
    marginVertical: 10,
    padding: 10,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: '#000',
  },
});
