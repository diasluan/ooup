import React from "react"
import { StyleSheet, TouchableWithoutFeedback } from "react-native"
import { Block, Text } from "galio-framework"
import Icon from "./Icon"
import { customTheme } from "../constants"

const Notification = ({
    body,
    color,
    iconColor,
    iconFamily,
    iconName,
    iconSize,
    onPress,
    style,
    system,
    time,
    title,
    transparent
  }) => {
  const iconContainer = [
    styles.iconContainer,
    { backgroundColor: color || customTheme.COLORS.PRIMARY },
    system && { width: 34, height: 34 },
    !system && styles.iconShadow
  ]

  const container = [
    styles.card,
    !transparent && { backgroundColor: customTheme.COLORS.WHITE },
    !transparent && styles.cardShadow,
    system && { height: 78 },
    style
  ]
  return (
    <Block style={container} middle>
      <TouchableWithoutFeedback onPress={onPress}>
        <Block row style={{ width: "95%" }}>
          <Block top flex={system ? 0.12 : 0.2} middle>
            <Block middle style={iconContainer}>
              <Icon
                name={iconName}
                family={iconFamily}
                size={iconSize || system ? 16 : 22}
                color={
                  iconColor || system ? customTheme.COLORS.DEFAULT : customTheme.COLORS.WHITE
                }
              />
            </Block>
          </Block>
          <Block flex style={{ paddingRight: 3, paddingLeft: 12 }}>
            {system && (
              <Block row space="between" style={{ height: 18 }}>
                <Text color={customTheme.COLORS.MUTED} style={{ fontFamily: 'open-sans-bold' }} size={13}>{title}</Text>
                <Block row style={{ marginTop: 3 }}>
                  <Icon
                    family="material-community"
                    name="clock"
                    size={12}
                    color={customTheme.COLORS.MUTED}
                  />
                  <Text
                    color={customTheme.COLORS.MUTED}
                    style={{
                      fontFamily: "open-sans-regular",
                      marginLeft: 3,
                      marginTop: -3
                    }}
                    size={12}
                  >
                    {time}
                  </Text>
                </Block>
              </Block>
            )}
            <Text
              color={customTheme.COLORS.TEXT}
              size={system ? 13 : 14}
              style={{ fontFamily: system ? "open-sans-bold" : "open-sans-regular" }}
            >
              {body}
            </Text>
          </Block>
          {!system && (
            <Block row flex={0.2} style={{ marginTop: 3 }}>
              <Icon
                family="material-community"
                name="clock"
                size={12}
                color={customTheme.COLORS.MUTED}
              />
              <Text
                color={customTheme.COLORS.MUTED}
                style={{
                  fontFamily: "open-sans-regular",
                  marginLeft: 3,
                  marginTop: -2
                }}
                size={12}
              >
                {time}
              </Text>
            </Block>
          )}
        </Block>
      </TouchableWithoutFeedback>
    </Block>
  )
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 46,
    height: 46,
    borderRadius: 23,
    marginTop: 2
  },
  iconShadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2
  },
  card: {
    zIndex: 2,
    height: 127,
    borderRadius: 6
  },
  cardShadow: {
    shadowColor: customTheme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2
  }
})

export default Notification