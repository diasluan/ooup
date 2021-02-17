import React, { useState, useEffect } from 'react'
import { AppLoading } from 'expo'
import { useFont } from 'expo-font'
import { Block, GalioProvider } from 'galio-framework'
import { NavigationContainer } from '@react-navigation/native'

import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
Amplify.configure(awsconfig)

import { enableScreens } from 'react-native-screens'
enableScreens()

import Screens from './navigation/Screens'
import { customTheme } from './constants'
export default function App() {
  const [isLoadingComplete] = useFont({
    'open-sans-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if (isLoadingComplete) {
    return (
      <NavigationContainer>
        <GalioProvider customTheme={customTheme}>
          <Block flex>
            <Screens />
          </Block>
        </GalioProvider>
      </NavigationContainer>
    )
  } else {
    return (
      <AppLoading />
    )
  }
}
