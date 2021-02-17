import React, {useState, useEffect} from 'react'
import { useFont }from 'expo-font'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons'
import { Icon } from 'galio-framework'

import ooupConfig from '../assets/selection.json'
const OoupFont = require('../assets/fonts/icomoon.ttf')
const OoupIcons = createIconSetFromIcoMoon(ooupConfig, OoupFont)

const IconExtra = (props) =>{
  const [isFontLoaded] = useFont({ OoupFont })

  if (props.family === 'ooup' && isFontLoaded) {
    return <OoupIcons name={props.name} family={props.family} {...props} />
  }

  return <Icon {...props} />
}

export default IconExtra
