import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons, Entypo } from '@expo/vector-icons';

export default function PostInputBox() {
  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150?img=3' }}
          style={styles.avatar}
        />
        <TextInput
          placeholder="What's on your mind?"
          style={styles.input}
          placeholderTextColor="#666"
        />
         <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="images" size={20} color="green" />
          <Text style={styles.actionText}>Photo</Text>
        </TouchableOpacity>
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 10,
    borderBottomColor: '#eee',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  input: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    fontSize: 14,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  actionText: {
    marginLeft: 6,
    fontSize: 13,
    color: '#555',
  },
});
