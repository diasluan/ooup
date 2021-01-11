import React, {useState} from "react"
import { Alert } from "react-native"
import { Auth } from 'aws-amplify'
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native"
import { Block, Text } from "galio-framework"

import { Button, Icon, Input } from "../components"
import { Images, customTheme } from "../constants"

const { width, height } = Dimensions.get("screen")

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
)

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async () => {
    await Auth.signIn({
      username: email.toLowerCase(),
      password,
    }).then(user => 
      props.navigation.navigate('Home')
    ).catch(e => {
      if (e.code === 'UserNotFoundException') {
        Alert.alert("User doesn't exist, please create a new account")
        props.navigation.navigate('Register')
      }
    })
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
              <Block flex space="between">
                <Block flex={0.8} middle space="between">
                  <Block flex={0.2} middle>
                    <Text
                      style={{
                        fontFamily: "open-sans-regular",
                        textAlign: "center"
                      }}
                      color="#8898AA"
                      size={12}
                    >  
                      Sign in
                    </Text>
                  </Block>
                  <Block center flex={0.9}>
                    <Block flex space="between">
                      <Block>
                        <Block
                          width={width * 0.8}
                          style={{ marginBottom: 5 }}
                        >
                          <Input
                            borderless
                            placeholder="Email"
                            onChangeText={setEmail}
                            iconContent={
                              <Icon
                                size={16}
                                color="#ADB5BD"
                                name="mail"
                                family="Feather"
                                style={styles.inputIcons}
                              />
                            }
                          />
                        </Block>
                        <Block width={width * 0.8}>
                          <Input
                            password
                            borderless
                            placeholder="Password"
                            onChangeText={setPassword}
                            iconContent={
                              <Icon
                                size={16}
                                color="#ADB5BD"
                                name="lock"
                                family="Feather"
                                style={styles.inputIcons}
                              />
                            }
                          />
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
                              props.navigation.navigate('Register')
                            }
                          >
                            Create new account
                          </Button>
                      </Block>
                      <Block center>
                        <Button 
                          color="primary" 
                          style={styles.createButton}
                          onPress={onSubmit}
                        >
                          <Text
                            style={{ fontFamily: "open-sans-bold" }}
                            size={14}
                            color={customTheme.COLORS.WHITE}
                          >
                            SIGN IN
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
    height: height < 812 ? height * 0.4 : height * 0.35,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: customTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
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
    marginBottom: 40
  }
})

export default Login
