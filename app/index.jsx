// import { Link } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import {Text, View } from 'react-native';


// export default function App() {
//   return (
//     <View className="flex-1 items-center justify-center bg-pink-400">
//       <Text className="text-3xl">Aora!</Text>
//       <StatusBar style="auto" />
//       <Link href="/profile" style={{color : 'blue'}}> Go to profile </Link>
//     </View>
//   );
// }



import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { Text, View } from 'react-native';

export default function App() {
  return (

   <View className='flex-1 items-center justify-center bg-pink-100'>
      <Text className="text-3xl font-pblack">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{color : 'blue'}}> Go to Profile 
      </Link>
    </View>
  );
}

