import { View, Text, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import icons from '../constants/icons'

const FormField = ({title, value, handleChangeText, 
    otherStyles, placeholder, ...props}) => {

    const [showPassword, setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 bg-pink-300 ${otherStyles}`}>
      <Text className="text-gray-100 font-pmedium text-base">{title}</Text>

      <View className="bg-black-100 w-full h-16 px-4 
      border-2 border-black-200 rounded-2xl
       focus:border-secondary items-center">

      <TextInput
        className="flex-1 text-white bg-cyan-300 font-psemibold text-base"
        value={value}
        placeholder={placeholder}
        // placeholderTextColor="#7b7b8b"
        placeholderTextColor="#2727bf"
        onChangeText={handleChangeText}
        secureTextEntry={title === 'password' && !showPassword}
      />
      {title === 'Password' && (
        <TouchableOpacity onPress={ () => 
          setShowPassword(!showPassword)}>
          <Image source={showPassword ? icons.eye : icons.eyeHide }
           className='w-6 h-6'
          />
          </TouchableOpacity>
      )}
      </View>
    </View>
  )
}

export default FormField