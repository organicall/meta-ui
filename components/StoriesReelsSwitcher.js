import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';


const indianNames = ['Aarav', 'Ishaan', 'Aanya', 'Saanvi', 'Vihaan', 'Aditya', 'Priya', 'Ravi', 'Shreya', 'Ananya'];
const mexicanNames = ['Carlos', 'Juan', 'Luis', 'Maria', 'Ana', 'Jorge', 'Sofia', 'Guadalupe', 'Pedro', 'Isabella'];
const englishNames = ['Oliver', 'Liam', 'Emma', 'Ava', 'Noah', 'Sophia', 'Isabella', 'Mason', 'James', 'Charlotte'];


const getRandomName = () => {
  const allNames = [...indianNames, ...mexicanNames, ...englishNames];  // Merge all name lists
  const randomIndex = Math.floor(Math.random() * allNames.length); // Random index
  return allNames[randomIndex]; 
};


const demoStories = [
    {
      id: 'your-story',
      profileImage: 'https://i.pravatar.cc/150?img=1',
      storyImage: 'https://picsum.photos/id/1011/200/300', 
      name: 'Your Story',
      isUser: true,
    },
    ...Array.from({ length: 10 }).map((_, i) => ({
      id: `${i + 1}`,
      profileImage: `https://i.pravatar.cc/150?img=${i + 2}`,
      storyImage: `https://picsum.photos/id/${1012 + i}/200/300`,
      name: getRandomName(),
    })),
  ];
  
export default function StoriesReelsSwitcher({ navigation }) {
  const [activeTab, setActiveTab] = useState('Stories');

  const handleTabPress = (tab) => {
    if (tab === 'Reels') {
      navigation.navigate('ReelsScreen');
    } else {
      setActiveTab('Stories');
    }
  };

  const handleStoryPress = (story) => {
    if (!story.isUser) {
      navigation.navigate('StoryViewer', { story });
    }
  };
  

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabRow}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Stories' && styles.activeTab]}
          onPress={() => handleTabPress('Stories')}
        >
          <Text style={activeTab === 'Stories' ? styles.activeText : styles.tabText}>Stories</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'Reels' && styles.activeTab]}
          onPress={() => handleTabPress('Reels')}
        >
          <Text style={activeTab === 'Reels' ? styles.activeText : styles.tabText}>Reels</Text>
        </TouchableOpacity>
      </View>

      {/* Horizontal Story List */}
      {activeTab === 'Stories' && (
        <FlatList
          data={demoStories}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.storyList}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleStoryPress(item)}>
              <View style={styles.storyItem}>
                <View style={styles.storyPreview}>
                  {item.isUser ? (
                    <View style={styles.addStoryButton}>
                      <Text style={styles.plusText}>+</Text>
                    </View>
                  ) : (
                    <>
                    <Image source={{ uri: item.storyImage }} style={styles.backgroundImage} />
                    <View style={styles.profileOverlay}>
                        <Image source={{ uri: item.profileImage }} style={styles.profilePic} />
                    </View>

                    </>
                  )}
                </View>
                <Text style={styles.storyName}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 10,
  },
  tabRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#eee',
    
  },
  activeTab: {
    backgroundColor: '#1877F2',
  },
  tabText: {
    color: '#444',
    fontWeight: '600',
  },
  activeText: {
    color: '#fff',
    fontWeight: '600',
  },
  storyList: {
    paddingLeft: 12,
  },
  storyItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  storyPreview: {
    width: 110,
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#eee',
    marginBottom: 6,
    position: 'relative',
    justifyContent: 'flex-start',
  },
  storyName: {
    fontSize: 12,
    color: '#333',
    maxWidth: 70,
    textAlign: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    opacity: 0.6,
  },
  profileOverlay: {
    position: 'absolute',
    top: 8,
    left: 8,
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#fff',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  profilePic: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
  },
  addStoryButton: {
    flex: 1,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  plusText: {
    fontSize: 32,
    color: '#1877F2',
    fontWeight: 'bold',
  },
});
