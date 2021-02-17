import React, {useState} from 'react'
import { Auth } from 'aws-amplify'
import {
  Alert,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
import { Block, Text } from 'galio-framework'

import { Button, Icon, Input } from '../components'
import { Images, customTheme } from '../constants'

const { width, height } = Dimensions.get('screen')

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

const Register = (props) => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [passwordStrength, setPasswordStrength] = useState({
    color: customTheme.COLORS.ERROR,
    strength: 'weak'
  })

  const onSubmit = async () => {
    await Auth.signUp({
      username: email,
      password,
      attributes: {
        preferred_username: username,
        name
      }
    }).then(user => 
      props.navigation.navigate('Home')
    ).catch(e => {
      if (e.code === 'UsernameExistsException') {
        Alert.alert('You already have an account. Please Login')
        props.navigation.navigate('Login')
      }
    })
  }

  const handlePassword = (pass) => {
    const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})')
    const mediumRegex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})')
    setPassword(pass)
    if (strongRegex.test(pass)) {
      setPasswordStrength({
        color: customTheme.COLORS.SUCCESS,
        strength: 'strong'
      })
    } else if (mediumRegex.test(pass)) {
      setPasswordStrength({
        color: customTheme.COLORS.INFO,
        strength: 'medium'
      })
    } else {
      setPasswordStrength({
        color: customTheme.COLORS.ERROR,
    strength: 'weak'
      })
    }
  }

  return (
    <DismissKeyboard>
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          <Block flex middle>
            <Block style={styles.registerContainer}>
              <Block flex space='between'>
                <Block flex={0.8} middle space='between'>
                  <Block flex={0.2} middle>
                    <Text
                      style={{
                        fontFamily: 'open-sans-regular',
                        textAlign: 'center'
                      }}
                      color='#8898AA'
                      size={12}
                    >  
                      Sign up to Ooup
                    </Text>
                  </Block>
                  <Block center flex={0.9}>
                    <Block flex space='between'>
                      <Block>
                        <Block
                          width={width * 0.8}
                          style={{ marginBottom: 5 }}
                        >
                          <Input
                            borderless
                            placeholder='Name'
                            onChangeText={setName}
                            iconContent={
                              <Icon
                                size={16}
                                color='#ADB5BD'
                                name='signature'
                                family='font-awesome-5'
                                style={styles.inputIcons}
                              />
                            }
                          />
                        </Block>
                        <Block
                          width={width * 0.8}
                          style={{ marginBottom: 5 }}
                        >
                          <Input
                            borderless
                            placeholder='Email'
                            onChangeText={setEmail}
                            iconContent={
                              <Icon
                                size={16}
                                color='#ADB5BD'
                                name='envelope'
                                family='font-awesome-5'
                                style={styles.inputIcons}
                              />
                            }
                          />
                        </Block>
                        <Block
                          width={width * 0.8}
                          style={{ marginBottom: 5 }}
                        >
                          <Input
                            borderless
                            placeholder='Username'
                            onChangeText={setUsername}
                            iconContent={
                              <Icon
                                size={16}
                                color='#ADB5BD'
                                name='user'
                                family='font-awesome-5'
                                style={styles.inputIcons}
                              />
                            }
                          />
                        </Block>
                        <Block width={width * 0.8}>
                          <Input
                            password
                            borderless
                            placeholder='Password'
                            onChangeText={handlePassword}
                            iconContent={
                              <Icon
                                size={16}
                                color='#ADB5BD'
                                name='lock'
                                family='font-awesome-5'
                                style={styles.inputIcons}
                              />
                            }
                          />
                          <Block row style={styles.passwordCheck}>
                            <Text
                              style={{ fontFamily: 'open-sans-regular' }}
                              size={12}
                              color={customTheme.COLORS.MUTED}
                            >
                              password strength:
                            </Text>
                            <Text
                              style={{ fontFamily: 'open-sans-bold' }}
                              size={12}
                              color={passwordStrength.color}
                            >
                              {' '}
                              {passwordStrength.strength}
                            </Text>
                          </Block>
                        </Block>
                        <Block center>
                          <Button
                              color='transparent'
                              textStyle={{
                                color: customTheme.COLORS.PRIMARY,
                                fontSize: 14,
                                fontFamily: 'open-sans-regular',
                                marginRight: 5
                              }}
                              onPress={() => 
                                props.navigation.navigate('Login')
                              }
                            >
                              I already have an account
                            </Button>
                        </Block>
                      </Block>
                      <Block center>
                        <Button 
                          color='primary' 
                          style={styles.createButton}
                          onPress={onSubmit}
                        >
                          <Text
                            style={{ fontFamily: 'open-sans-bold' }}
                            size={14}
                            color={customTheme.COLORS.WHITE}
                          >
                            CREATE ACCOUNT
                          </Text>
                        </Button>
                      </Block>
                    </Block>
                  </Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </ImageBackground>
      </Block>
    </DismissKeyboard>
  )
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height < 812 ? height * 0.9 : height * 0.8,
    backgroundColor: '#F4F5F7',
    borderRadius: 4,
    shadowColor: customTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden'
  },
  socialConnect: {
    backgroundColor: customTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(136, 152, 170, 0.3)'
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: '#fff',
    shadowColor: customTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: customTheme.COLORS.PRIMARY,
    fontWeight: '800',
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 2,
    paddingTop: 6,
    paddingBottom: 15
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25,
    marginBottom: 40
  }
})

export default Register
