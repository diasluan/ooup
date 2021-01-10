import { Platform, StatusBar } from 'react-native'
import { theme } from 'galio-framework'

export const getRandomId = () => '_' + Math.random().toString(36).substr(2, 9)

export const StatusHeight = StatusBar.currentHeight
export const HeaderHeight = (theme.SIZES.BASE * 3.5 + (StatusHeight || 0))
export const iPhoneX = () => Platform.OS === 'ios' && (height === 812 || width === 812);