import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const posts = [
  {
    id: '1',
    name: 'Arpita Gupta',
    profileImage: 'https://i.pravatar.cc/150?img=10',
    caption: 'Loving the new Kindle!',
    postImage: 'https://picsum.photos/500/300?random=1',
    likes: 120,
    comments: 34,
  },
  {
    id: '2',
    name: 'Jack Frost',
    profileImage: 'https://i.pravatar.cc/150?img=11',
    caption: 'Nothing beats this view <3',
    postImage: 'https://picsum.photos/500/300?random=2',
    likes: 98,
    comments: 21,
  },
  {
    id: '3',
    name: 'Alex',
    profileImage: 'https://i.pravatar.cc/150?img=12',
    caption: 'Hiking adventures in the mountains 🏔️',
    postImage: 'https://picsum.photos/500/300?random=3',
    likes: 150,
    comments: 45,
  },
  {
    id: '4',
    name: 'George Bush',
    profileImage: 'https://i.pravatar.cc/150?img=13',
    caption: 'Last day in India. Loved every bit of it <<<<3',
    postImage: 'https://picsum.photos/500/300?random=4',
    likes: 87,
    comments: 19,
  },
  {
    id: '5',
    name: 'Juan Fonseca',
    profileImage: 'https://i.pravatar.cc/150?img=14',
    caption: 'Humble Photography attempt',
    postImage: 'https://picsum.photos/500/300?random=5',
    likes: 205,
    comments: 60,
  },
  {
    id: '6',
    name: 'Cheng Longhair',
    profileImage: 'https://i.pravatar.cc/150?img=15',
    caption: 'Sunsetzzz',
    postImage: 'https://picsum.photos/500/300?random=6',
    likes: 142,
    comments: 33,
  },
];


export default function PostFeed() {
  const handleDotsPress = (id) => {
    console.log(`Three dots pressed for post ${id}`);
  };

  const handleXPress = (id) => {
    console.log(`Post ${id} closed`);
  };

  return (
    <View>
      {posts.map((post) => (
        <View key={post.id} style={styles.postContainer}>
          {/* Top right three dots and X */}
          <View style={styles.topRightIcons}>
            <TouchableOpacity onPress={() => handleDotsPress(post.id)}>
              <Icon name="more-horiz" size={30} color="#333" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleXPress(post.id)}>
              <Icon name="close" size={30} color="#333" style={styles.icon} />
            </TouchableOpacity>
          </View>

          {/* Profile and Post */}
          <View style={styles.postHeader}>
            <Image source={{ uri: post.profileImage }} style={styles.profileImage} />
            <Text style={styles.name}>{post.name}</Text>
          </View>

          <Text style={styles.caption}>{post.caption}</Text>
          <Image source={{ uri: post.postImage }} style={styles.postImage} />
          
          {/* Likes and Comments */}
          <View style={styles.postActions}>
            <Text style={styles.actionText}>{post.likes} Likes</Text>
            <Text style={styles.actionText}>{post.comments} Comments</Text>
          </View>

          {/* Like, Comment, and Send Buttons */}
          <View style={styles.actionsRow}>
  <TouchableOpacity style={styles.button}>
    <Icon name="thumb-up" size={20} color="#1877F2" />
    <Text style={styles.buttonText}>Like</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button}>
    <Icon name="comment" size={20} color="#1877F2" />
    <Text style={styles.buttonText}>Comment</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.button}>
    <Icon name="send" size={20} color="#1877F2" />
    <Text style={styles.buttonText}>Send</Text>
  </TouchableOpacity>
</View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  topRightIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
  },
  icon: {
    marginLeft: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  caption: {
    marginVertical: 10,
    fontSize: 14,
    color: '#333',
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  postActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  actionText: {
    fontSize: 14,
    color: '#333',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  buttonText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#444',
  }
  
});
