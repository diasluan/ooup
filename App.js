import React from 'react'
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
  return (
    <NavigationContainer>
      <GalioProvider customTheme={customTheme}>
        <Block flex>
          <Screens />
        </Block>
      </GalioProvider>
    </NavigationContainer>
  )
}
