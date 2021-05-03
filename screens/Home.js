import React from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

const { width } = Dimensions.get('screen')

const Home = () => {
  const markers = [
    {coordinates: {
      latitude: 37.78825,
      longitude: -122.4324}
    },
    {coordinates: {
      latitude: 37.775825,
      longitude: -122.4424}
    },
    {coordinates: {
      latitude: 37.77,
      longitude: -122.4224}
    }
  ]
  const region = {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
      >
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinates}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})

export default Home
