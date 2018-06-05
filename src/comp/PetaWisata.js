import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';

class PetaScreen extends React.Component {
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
          latitude:-8.529533,
          longitude:115.514066
        },
        title: 'Pantai Blue Lagoon',
        subtitle: 'Padangbai, Manggis, Kabupaten Karangasem, Bali 80871'
      },
      {
        key:3,
        latlng: {
          latitude:-8.422839,
          longitude: 115.436901
        },
        title: 'Air Terjun Telaga Waja',
        subtitle: 'Desa Batusesa, Menaga, Rendang, Menanga, Karangasem, Kabupaten Karangasem, Bali 80863'
      }
      ,
      {
        key:4,
        latlng: {
          latitude:-8.437744,
          longitude: 115.61416
        },
        title: 'Air Terjun Yeh Labuh',
        subtitle: 'Selumbung, Manggis, Karangasem Regency, Bali 80871'
      },
      {
        key:5,
        latlng: {
          latitude:-8.459828,
          longitude: 115.434168
        },
        title: 'Bukit Asmara',
        subtitle: 'Sangkan Gunung, Sidemen, Sangkan Gn., Karangasem, Kabupaten Karangasem, Bali 80864'
      },
      {
        key:6,
        latlng: {
          latitude:-8.461517,
          longitude: 115.516585
        },
        title: 'Bukit Putung',
        subtitle: 'Selat, Kabupaten Karangasem, Bali 80871'
      },
       {
        key:7,
        latlng: {
          latitude:-8.390422,
          longitude: 115.643343
        },
        title: 'Pura Lempuyang',
        subtitle: 'Bunutan, Abang, Seraya Bar., Kec. Karangasem, Kabupaten Karangasem, Bali 80852'
      },
    {
        key:8,
        latlng: {
          latitude:-8.489178,
          longitude: 115.578735
        },
        title: 'Pura Silayuti',
        subtitle: 'Padangbai, Manggis, Kabupaten Karangasem, Bali 80871'
      },
      {
        key:9,
        latlng: {
          latitude:-8.429395,
          longitude: 115.714108
        },
        title: 'Taman Soekasada Ujung',
        subtitle: 'Jl. Taman Ujung, Seraya Bar., Kec. Karangasem, Kabupaten Karangasem, Bali 80811'
      },
      {
        key:10,
        latlng: {
          latitude:-8.411873,
          longitude: 115.587837
        },
        title: 'Tirta Gangga',
        subtitle: 'Ababi, Abang, Ababi, Abang, Kabupaten Karangasem, Bali 80852'
      }
   ]
  };

  render() {
    return (
      <View style={styles.contMain}>
        <View style={styles.contHeader}>
            <Text style={styles.textHeader}>
              PETA DEWISKA
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
      </View>
    );
  }
}
export default PetaScreen;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  contMain: {
      flex : 1,
      backgroundColor: '#b3e5fc'
  },
  contHeader: {
    backgroundColor: '#01579b',
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
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textFooter: {
    fontSize: 16,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }

});