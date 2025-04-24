import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ReelsScreen from './screens/ReelsScreen'; 
import StoryViewer from './screens/StoryViewer';
import PostFeed from './components/PostFeed';
import SimplePage from './screens/SimplePage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="TabPage" component={SimplePage} />
          <Stack.Screen name="ReelsScreen" component={ReelsScreen} />
          <Stack.Screen name="StoryViewer" component={StoryViewer} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}
