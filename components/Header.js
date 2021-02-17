import React from 'react'
import { TouchableOpacity, StyleSheet, Platform, Dimensions } from 'react-native'
import { Button, Block, NavBar, Text, theme } from 'galio-framework'
import { useNavigation } from '@react-navigation/native'

import Icon from './Icon'
import Tabs from './Tabs'
import customTheme from '../constants/Theme'

const { height, width } = Dimensions.get('window')
const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812 || height === 896 || width === 896)

const BellButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Notifications')}>
    <Icon
      family="ArgonExtra"
      size={16}
      name="bell"
      color={customTheme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
    <Block middle style={styles.notify} />
  </TouchableOpacity>
)

const BasketButton = ({isWhite, style, navigation}) => (
  <TouchableOpacity style={[styles.button, style]} onPress={() => navigation.navigate('Cart')}>
    <Icon
      family="ArgonExtra"
      size={16}
      name="basket"
      color={customTheme.COLORS[isWhite ? 'WHITE' : 'ICON']}
    />
  </TouchableOpacity>
)

const Header = (props) => {
  const navigation = useNavigation()
  const title = props.title ?? 'Title'
  const handleLeftPress = () => {
    return (props.back ? navigation.goBack() : navigation.openDrawer())
  }

  const renderRight = () => {
    if (title === 'Title') {
      return [
        <BellButton key='chat-title' navigation={navigation} isWhite={props.white} />,
        <BasketButton key='basket-title' navigation={navigation} isWhite={props.white} />
      ]
    }

    switch (title) {
      case 'Home':
      case 'Deals':
      case 'Categories':
      case 'Category':
      case 'Profile':
      case 'Product':
      case 'Search':
      case 'Settings':
        return ([
          <BellButton key='chat-categories' navigation={navigation} isWhite={props.white}/>,
          <BasketButton key='basket-categories' navigation={navigation} isWhite={props.white}/>
        ])
      default:
        break
    }
  }
  
  const renderOptions = () => {
    const { optionLeft, optionRight } = props

    return (
      <Block row style={styles.options}>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Ride')}>
          <Block row middle style={styles.tabIcon}>
            <Icon size={16} name="electric-scooter" family="MaterialIcons" color={customTheme.COLORS.PRIMARY}/>
          </Block>
          <Block row middle>
            <Text style={{ fontFamily: 'open-sans-regular' }} size={16} style={styles.tabTitle}>{optionRight || 'Ride'}</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Service')}>
          <Block row middle style={styles.tabIcon}>
            <Icon size={16} name="tool" family="Feather" color={customTheme.COLORS.PRIMARY}/>
          </Block>
          <Block row middle>
            <Text style={{ fontFamily: 'open-sans-regular' }} size={16} style={styles.tabTitle}>{optionRight || 'Service'}</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} onPress={() => navigation.navigate('Clean')}>
          <Block row middle style={styles.tabIcon}>
            <Icon size={16} name="wash" family="MaterialIcons" color={customTheme.COLORS.PRIMARY}/>
          </Block>
          <Block row middle>
            <Text style={{ fontFamily: 'open-sans-regular' }} size={16} style={styles.tabTitle}>{optionRight || 'Clean'}</Text>
          </Block>
        </Button>
      </Block>
    )
  }
  const renderTabs = () => {
    const { tabs, tabIndex } = props
    const defaultTab = tabs && tabs[0] && tabs[0].id
    
    if (!tabs) return null

    return (
      <Tabs
        data={tabs || []}
        initialIndex={tabIndex || defaultTab}
        onChange={id => navigation.setParams({ tabId: id })} />
    )
  }
  const renderHeader = () => {
    const { search, options, tabs } = props
    if (search || tabs || options) {
      return (
        <Block center>
          {options ? renderOptions() : null}
          {tabs ? renderTabs() : null}
        </Block>
      )
    }
  }

  const headerStyles = [
    props.transparent ? { backgroundColor: 'rgba(0,0,0,0)' } : null,
  ]

  const navbarStyles = [
    styles.navbar,
    props.bgColor && { backgroundColor: props.bgColor }
  ]

  return (
    <Block style={headerStyles}>
      <NavBar
        back={false}
        title={title}
        style={navbarStyles}
        transparent={props.transparent}
        right={renderRight()}
        rightStyle={{ alignItems: 'center' }}
        onLeftPress={handleLeftPress}
        left={
          <Icon
            name={props.back ? 'chevron-left' : "menu"} family="entypo" 
            size={props.back ? 20 : 20} onPress={handleLeftPress}
            color={props.iconColor || (props.white ? customTheme.COLORS.WHITE : customTheme.COLORS.ICON)}
            style={{ marginTop: 2 }}
          />
        }
        leftStyle={{ paddingVertical: 12, flex: 0.2 }}
        titleStyle={[
          styles.title,
          { color: customTheme.COLORS[props.white ? 'WHITE' : 'HEADER'] },
          props.titleColor && { color: props.titleColor }
        ]}
        {...props}
      />
      {renderHeader()}
    </Block>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: 'relative',
  },
  title: {
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: iPhoneX ? theme.SIZES.BASE * 4 : theme.SIZES.BASE,
    zIndex: 5,
  },
  shadow: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  notify: {
    backgroundColor: customTheme.COLORS.LABEL,
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: 'absolute',
    top: 9,
    right: 12,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
  },
  divider: {
    borderRightWidth: 0,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: customTheme.COLORS.BORDER
  },
  options: {
    marginBottom: 10,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabIcon: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: customTheme.COLORS.PRIMARY,
    elevation: 1,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '400',
    color: customTheme.COLORS.HEADER
  },
})

export default Header
