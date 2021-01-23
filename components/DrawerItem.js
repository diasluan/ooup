import React from "react"
import { StyleSheet, TouchableOpacity, Linking } from "react-native"
import { Block, Text, theme } from "galio-framework"

import Icon from "./Icon"
import customTheme from "../constants/Theme"

const DrawerItem = ({ focused, title, navigation }) => {
  const renderIcon = () => {
    switch (title) {
      case "Home":
        return (
          <Icon
            name="ooup"
            family="ooup"
            size={14}
            color={focused ? "white" : customTheme.COLORS.PRIMARY}
          />
        )
      default:
        return null
    }
  }

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null
    ]

    return (
      <TouchableOpacity
        style={{ height: 60 }}
        onPress={() => navigation.navigate(title)}
      >
        <Block flex row style={containerStyles}>
          <Block middle flex={0.1} style={{ marginRight: 5 }}>
            {renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              style={{ fontFamily: "open-sans-regular" }}
              size={15}
              bold={focused ? true : false}
              color={focused ? "white" : "rgba(0,0,0,0.5)"}
            >
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 2
  },
  activeStyle: {
    backgroundColor: customTheme.COLORS.ACTIVE,
    borderRadius: 4
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
})

export default DrawerItem
