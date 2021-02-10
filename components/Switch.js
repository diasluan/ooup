import React from 'react'
import { Switch, Platform } from 'react-native'

import theme from '../constants/Theme'

const CustomSwitch = ({ value, ...props }) => {
  const thumbColor = Platform.OS === 'ios' ? null :
    Platform.OS === 'android' && value ? theme.COLORS.SWITCH_ON : theme.COLORS.SWITCH_OFF

  return (
    <Switch
      value={value}
      thumbColor={thumbColor}
      ios_backgroundColor={theme.COLORS.SWITCH_OFF}
      trackColor={{ false: theme.COLORS.SWITCH_ON, true: theme.COLORS.SWITCH_ON }}
      {...props}
    />
  )
}

export default CustomSwitch;