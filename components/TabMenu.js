// import React from 'react';
// import { View, TouchableOpacity, StyleSheet } from 'react-native';
// import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';

// export default function TabMenu({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity style={styles.tab}>
//         <Ionicons name="home" size={24} color="#1877F2" />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.tab}>
//         <Ionicons name="people" size={24} color="#1877F2" />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.tab}>
//         <MaterialIcons name="video-library" size={24} color="#1877F2" />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.tab}>
//         <Ionicons name="person-circle" size={24} color="#1877F2" />
//       </TouchableOpacity>
//       <TouchableOpacity style={styles.tab}>
//         <Ionicons name="notifications" size={24} color="#1877F2" />
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#eee',
//     backgroundColor: '#fff',
//   },
//   tab: {
//     paddingHorizontal: 10,
//     paddingVertical: 6,
//   },
// });


import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function TabMenu({ navigation }) {
  const tabs = [
    { icon: <Ionicons name="home" size={24} color="#1877F2" />, title: 'Home' },
    { icon: <Ionicons name="people" size={24} color="#1877F2" />, title: 'Friends' },
    { icon: <MaterialIcons name="video-library" size={24} color="#1877F2" />, title: 'Reels' },
    { icon: <Ionicons name="person-circle" size={24} color="#1877F2" />, title: 'Account' },
    { icon: <Ionicons name="notifications" size={24} color="#1877F2" />, title: 'Notification' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.tab}
          onPress={() => navigation.navigate('TabPage', { title: tab.title })}
        >
          {tab.icon}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  tab: {
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
});
