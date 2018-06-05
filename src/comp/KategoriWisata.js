import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  RefreshControl, 
  ListView,
  FlatList,
  ActivityIndicator
} from 'react-native';
import { List, ListItem } from "react-native-elements";
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

class LogoTitle extends React.Component { // header
  render() {
    return (
      <View style={styles.Header}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 25, color: 'white', padding: 5, fontWeight: 'bold' }}>Kategori Wisata</Text>
        </View>
      </View>
    );
  }
}

class KategoriScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerLeft: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      error: null,
      refreshing: false,
      ActivityIndicator_Loading: false, 
    };
  }

  componentDidMount()  {
    this.setState({ ActivityIndicator_Loading : true }, () =>
    {
        this.setState({refreshing: true});
        const url = 'https://nikomangaritrisnayanti.000webhostapp.com/dewiska/getKategori.php';
        fetch (url)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log("comp");
          console.log(responseJson);
          this.setState({
            data: responseJson,
            error: responseJson.error || null,
            loading: false,
            refreshing: false,
            ActivityIndicator_Loading: false,
          });
        }
      );
    });
  }
  
  render() {
    return (
      <View style={styles.Container}>
          <View style={{flex: 1}}>
          <FlatList
              data={this.state.data}
              keyExtractor={(item, index) => index}
              renderItem={({ item }) =>
              <TouchableOpacity activeOpacity={0.7} style={styles.row} 
                onPress={()=>{
                  console.log('ini item:')
                  console.log(item)
                  console.log(item.id_kategori)
                  this.props.navigation.navigate('List',
                  {
                    kategori: item,
                    title: item.namaKategori
                  }
                  )
                  ;
                }}
                >
                  <View style={styles.iconContainer}>
                  </View>
                  <View style={styles.info}>
                      <Text style={styles.songTitle}>{item.namaKategori}</Text>
                  </View>
              </TouchableOpacity>
              }
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.refreshing}
                    onRefresh={this.componentDidMount.bind(this)}
                  />
                }
          />
          </View>
        </View>
    );
  } 
}
export default KategoriScreen;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#b3e5fc',
    flex: 1,
    marginTop: 5,
    flexDirection: 'column',
  },
  Header: {
     flex: 1,
     backgroundColor: '#01579b',
  },
   iconContainer: {
      flex: 0.4,
      justifyContent: 'center',
      alignContent: 'center',

  },
  info: {
      flex: 0.6,
      paddingLeft: 16,
      paddingRight: 16,
      marginTop: 15,

  },
  songTitle: {
      fontWeight: 'bold',
      fontSize: 18,
      alignItems: 'center',
      marginBottom: 5,
      color: 'black'
  },
  songDetails: {
      color: '#000',
      fontSize: 16,
  },
  row: {
      marginTop: 10,
      marginRight: 10,
      marginLeft: 20,
      flexDirection: 'row', 
      width: '90%', 
      height: 70, 
      borderRadius: 5,
      backgroundColor: '#82b3c9' 
  },
});
