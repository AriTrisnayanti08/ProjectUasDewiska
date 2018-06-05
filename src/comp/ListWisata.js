import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  RefreshControl
} from 'react-native';
import { List, ListItem, Card } from "react-native-elements";
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';


class ListScreen extends React.Component {
  static navigationOptions = ({ navigation })=> ({
    title: navigation.state.params.title,
  });

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
      const { params } = this.props.navigation.state;
      const id_kategori= params.kategori.id_kategori;
      const url ='http://nikomangaritrisnayanti.000webhostapp.com/dewiska/getList.php?id_kategori='+id_kategori;
       this.setState({ loading: true });
      fetch (url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log('wisata');
        console.log(responseJson);
        this.setState({
          data: responseJson,
          error: responseJson.error || null,
          loading: false,
          refreshing: false
        });
      }
    );
  }

  render() {
    const { params } = this.props.navigation.state;
    //console.log('judul' +params.kat.nama);
    return (
      <View style={styles.Container}>
          <View style={{flex: 1}}>
          <FlatList
              data={this.state.data}
              keyExtractor={item => item.id_wisata}
              renderItem={({ item }) =>
              <TouchableOpacity activeOpacity={0.7} style={styles.row} 
                onPress={()=>{
                console.log("clicked");
                this.props.navigation.navigate('Detail',
                {
                  wisata: item,
                  title: item.namaWisata
                });
              }}>
                  <View style={styles.iconContainer}>
                  </View>
                  <View style={styles.info}>
                      <Text style={styles.songTitle}>{item.namaWisata}</Text>
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
export default ListScreen;

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#b3e5fc',
    flex: 1,
    marginTop: 5,
    flexDirection: 'column',
  },
   iconContainer: {
      flex: 0.2,
      justifyContent: 'center',
      alignContent: 'center',

  },
  info: {
      flex: 0.8,
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
      height: 60, 
      borderRadius: 5,
      backgroundColor: '#82b3c9' 
  },
});
