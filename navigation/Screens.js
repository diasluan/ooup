import React from "react"

import { createStackNavigator } from "@react-navigation/stack"

import Onboarding from "../screens/Onboarding"

const Stack = createStackNavigator()

export default function OnboardingStack(props) {
  return (
    <Stack.Navigator mode="card" headerMode="none">
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        option={{
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  )
}
