import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>facebook</Text>
      <View style={styles.icons}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="chatbubble-ellipses" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    //borderBottomWidth: 1,
    //borderBottomColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: 28,
    color: '#1877F2',
    fontWeight: 'bold',
  },
  icons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 16,
  },
});
