import React from "react"
import { StyleSheet } from "react-native"

import { Input } from "galio-framework"

import Icon from './Icon'
import { customTheme } from "../constants"

const CustomInput = ({ shadowless, success, error, ...props }) => {
  const inputStyles = [
    styles.input,
    !shadowless && styles.shadow,
    success && styles.success,
    error && styles.error,
    {...props.style}
  ]

  return (
    <Input
      placeholder="write something here"
      placeholderTextColor={customTheme.COLORS.MUTED}
      style={inputStyles}
      color={customTheme.COLORS.HEADER}
      iconContent={
        <Icon
          size={14}
          color={customTheme.COLORS.ICON}
          name="link"
          family="AntDesign"
        />
      }
      {...props}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 4,
    borderColor: customTheme.COLORS.BORDER,
    height: 44,
    backgroundColor: '#FFFFFF'
  },
  success: {
    borderColor: customTheme.COLORS.INPUT_SUCCESS,
  },
  error: {
    borderColor: customTheme.COLORS.INPUT_ERROR,
  },
  shadow: {
    shadowColor: customTheme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 0.5 },
    shadowRadius: 1,
    shadowOpacity: 0.13,
    elevation: 2,
  }
})

export default CustomInput
