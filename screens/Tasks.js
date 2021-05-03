import React, {useState} from "react"
import { ScrollView } from "react-native"
import { Block } from "galio-framework"
import { Task } from "../components"
import { getRandomId } from "../constants/utils"

const AvailableTasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: getRandomId,
      value: 30,
      body: 'Share on Facebook',
      brand: 'facebook',
      onPress: () => {console.log('Pressed')}
    },
    {
      id: getRandomId,
      value: 40,
      body: 'Message a friend on Facebook',
      brand: 'facebook',
      onPress: () => {console.log('Pressed')}
    },
    {
      id: getRandomId,
      value: 30,
      body: 'Share on Instagram',
      brand: 'instagram',
      onPress: () => {console.log('Pressed')}
    },
    {
      id: getRandomId,
      value: 30,
      body: 'Create Instagram story',
      brand: 'instagram',
      onPress: () => {console.log('Pressed')}
    },
    {
      id: getRandomId,
      value: 30,
      body: 'Clean a scoouter',
      brand: 'ooup',
      onPress: () => {console.log('Pressed')}
    }
  ])

  return (
    <Block middle flex>
      <Block flex style={{ width: "90%" }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {tasks.map(task => (
            <Task
              {...task}
              style={{ marginTop: 15 }}
            />
          ))}
          <Block style={{ marginBottom: 20 }} />
        </ScrollView>
      </Block>
    </Block>
  )
}

export default AvailableTasks