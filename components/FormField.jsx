import { View, Text } from 'react-native'
import React from 'react'

const FormField = ({title, value, handleChangeText, 
    otherStyles, placeholder, ...props}) => {
  return (
    <View className={`bg-red-500 space-y-2 ${otherStyles}`}>
      <Text className="text-gray-100 font-pmedium text-base">FormField</Text>
    </View>
  )
}

export default FormField