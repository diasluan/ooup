import React from 'react'
import * as Font from 'expo-font'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import { Icon } from 'galio-framework'

import ooupConfig from '../assets/selection.json'
const OoupFont = require('../assets/fonts/icomoon.ttf')
const OoupIcons = createIconSetFromIcoMoon(ooupConfig, OoupFont)

const IconExtra = ({name, family, ...rest}) =>{
  if (family === 'ooup') {
    return <OoupIcons name={name} family={family} {...rest} />
  }

  return <Icon {...this.props} />
}

export default IconExtra
