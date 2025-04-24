// screens/StoryViewer.js

import React from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function StoryViewer({ route, navigation }) {
  const { story } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: story.storyImage }} style={styles.storyImage} />
      <View style={styles.overlay}>
        <Image source={{ uri: story.profileImage }} style={styles.profilePic} />
        <Text style={styles.userName}>{story.name}</Text>
      </View>

      <TouchableOpacity style={styles.closeBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.closeText}>×</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  storyImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 50,
    left: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },
  userName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeBtn: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  closeText: {
    fontSize: 28,
    color: '#fff',
  },
});
