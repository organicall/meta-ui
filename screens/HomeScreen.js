// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import Header from '../components/Header';
// import TabMenu from '../components/TabMenu';
// import PostInputBox from '../components/PostInputBox';
// import StoryList from '../components/StoryList';
// import StoriesReelsSwitcher from '../components/StoriesReelsSwitcher';
// import ReelsScreen from './ReelsScreen';

// export default function HomeScreen({ navigation }) {
//     return (
//       <View style={styles.container}>
//         <Header />
//         <TabMenu navigation={navigation} />
//         <PostInputBox />
//         <StoriesReelsSwitcher navigation={navigation} />
//         <ReelsScreen navigation = {navigation} />
//       </View>
//     );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });

// import React from 'react';
// import { ScrollView } from 'react-native';
// import Header from '../components/Header';
// import TabMenu from '../components/TabMenu';
// import PostInputBox from '../components/PostInputBox';
// import StoriesReelsSwitcher from '../components/StoriesReelsSwitcher';

// export default function HomeScreen({ navigation }) {
//   return (
//     <ScrollView>
//       <Header />
//       <TabMenu navigation={navigation} />
//       <PostInputBox />
//       <StoriesReelsSwitcher navigation={navigation} />
//     </ScrollView>
//   );
// }

// screens/HomeScreen.js

import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import TabMenu from '../components/TabMenu';
import PostInputBox from '../components/PostInputBox';
import StoriesReelsSwitcher from '../components/StoriesReelsSwitcher';
import PostFeed from '../components/PostFeed';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <TabMenu navigation={navigation} />
        <PostInputBox />
        <StoriesReelsSwitcher navigation={navigation} />
        <View style={styles.container1} />
        <PostFeed />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  
  container1: {
    paddingVertical : 6,
  },
  

});

