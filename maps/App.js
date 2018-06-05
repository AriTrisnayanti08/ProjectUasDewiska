import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
export default class App extends Component {

  state = {
    region: {
      latitude: -8.149407,
      longitude: 115.216667,
      latitudeDelta: 0.8922,
      longitudeDelta: 0.8421,
    },
    markers : [
      {
        key:1,
        latlng: {
          latitude:-8.50110,
          longitude: 115.610519
        },
        title: 'Pantai Virgin Beach',
        subtitle: 'Jalan Pantai Bias Putih Sengkidu Manggis, Kabupaten Karangasem, Bali'
      },
      {
        key:2,
        latlng: {
          latitude:-8.535810,
          longitude: 115.508942
        },
        title: 'Bias Tugel Beach',
        subtitle: 'Padangbai, Manggis, Kabupaten Karangasem, Bali'
      },
      {
        key:3,
        latlng: {
          latitude:-8.3508238,
          longitude: 115.6801434
        },
        title: 'Pantai Amed',
        subtitle: 'Jl. Raya Amed, Bunutan, Abang, Kabupaten Karangasem, Bali'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.5297928,
          longitude: 115.5111155
        },
        title: 'Blue Lagoon Beach',
        subtitle: 'Padangbai, Manggis, Kabupaten Karangasem, Bali'
      },
      {
        key:5,
        latlng: {
          latitude:-8.5029932,
          longitude: 115.5560646
        },
        title: 'Pantai Candi Dasa',
        subtitle: 'Jl. Raya Candidasa, Sengkidu, Manggis, Kabupaten Karangasem, Bali'
      },
      {
        key:6,
        latlng: {
          latitude:-8.3381385,
          longitude: 115.6581073
        },
        title: 'Pantai Jemeluk',
        subtitle: 'Jl. Raya Amed, Bunutan, Abang, Kabupaten Karangasem, Bali'
      }

   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              Peta Wisata Pantai Karangasem
            </Text>
        </View>
        <View style={styles.contMaps}>
              <MapView
                style={styles.map}
                region={this.state.region}
              >
              {this.state.markers.map(mark => (
              <Marker
                  key = {mark.key}
                  coordinate={mark.latlng}
                  title={mark.title}
                  description={mark.subtitle}
                />
              ))}
              </MapView>
        </View>
        <View style={styles.contFooter}>
           <Text style={styles.textFooter}> Copyright@Ari_Trisnayanti</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1
  },
  contHeader: {
    backgroundColor: '#00838f',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1.2,
    position: 'relative'
  },
  contMaps : {
    flex : 10
  },
  textHeader: {
    padding: 10,
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contFooter: {
    backgroundColor: '#00838f',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    position: 'relative'
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});