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



import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';

export default function App() {
  return (

   <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className={'w-full items-center justify-center px-4'}>
        {/* <View className={'w-full items-center justify-center h-full px-4'}> */}
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode = 'contain'
          />
          <Image
            source={images.cards}
            className='max-w-[380px] w-full h-[300px]'
            resizeMode = 'contain'
          />

          <View className='relative mt-5'>
            <Text className='text-white text-3xl font-bold text-center'>
              Discover Endless Possibilities With {' '}
              <Text className='text-secondary-200'>Aora</Text>
            </Text>
            <Image
                source={images.path}
                className='w-[136px] h-[15px] absolute -bottom-2 -right-8'
                resizeMode='contain'
              />
          </View>

        </View>
      </ScrollView>
   </SafeAreaView>    
  );
}

