import { View, Text, ScrollView, Image} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

const SignIn = () => {

  const [form, setForm] = useState({
    email : '',
    password : ''
  })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const submit = () => {

    }

  return (
      <SafeAreaView className="bg-primary h-full">

      <ScrollView>
        <View className='w-full, justify-center min-h-[90vh] px-4 my-6'>
        <Image
            source={images.logo}
            className='w-[115px] h-[35px]'
            resizeMode = 'contain'
          />
          <Text className="text-white text-2xl mt-10 text-semibold font-psemibold">Log into Aora</Text>
          <FormField
            title="Email"
            Value={form.email}
            handleChangeText={(e) => setForm({...form, email: e})}
            otherStyles = "mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            Value={form.password}
            handleChangeText={(e) => setForm({...form, password: e})}
            otherStyles = "mt-7"
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-gray-100 text-lg font-pregular">Don't have an account?</Text>
            <Link href="/sign-up" className="text-lg text-secondary font-psemibold">Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn