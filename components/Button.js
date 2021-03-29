import React from "react"
import { StyleSheet } from "react-native"
import { Button } from "galio-framework"

import theme from "../constants/Theme"

const CustomButton = ({ small, shadowless, children, color, style, fontSize, ...props }) => {
  const colorStyle = color && theme.COLORS[color.toUpperCase()]

  const buttonStyles = [
    small && styles.smallButton,
    color && { backgroundColor: colorStyle },
    !shadowless && styles.shadow,
    {...style}
  ]

  return (
    <Button
      style={buttonStyles}
      shadowless
      textStyle={{ fontSize: fontSize || 12, fontWeight: '700' }}
      {...props}
    >
      {children}
    </Button>
  )
}

const styles = StyleSheet.create({
  smallButton: {
    width: 75,
    height: 28
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
})

export default CustomButton
