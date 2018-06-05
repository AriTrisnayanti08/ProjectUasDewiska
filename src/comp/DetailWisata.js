import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView, 
  TouchableHighlight, 
  TextInput, 
  FlatList
} from 'react-native';
import { SocialIcon, List, ListItem, Card,Rating, ButtonGroup, Icon} from "react-native-elements";


class DetailScreen extends React.Component {
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
      selectedIndex: 2
    };
    this.updateIndex = this.updateIndex.bind(this)
  }
  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

  _componentDidMount()  {
      const { params } = this.props.navigation.state;
      const id_kategori= params.kategori.id_kategori;
      const url = 'http://nikomangaritrisnayanti.000webhostapp.com/dewiska/getList.php?id_kategori='+id_kategori;
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
    const { selectedIndex } = this.state
    const { params } = this.props.navigation.state;
    //console.log('judul' +params.kat.nama);
    return (
      <View style={styles.contWisata}>
        <View style={styles.contJudul} >
            <Text style={styles.textJudul1}>{params.wisata.namaWisata}</Text>
        </View>
         <View style={styles.contDeskripsi}>
            <ScrollView>
              <View style={styles.box}>
                <Text style={styles.Judul}>DESKRIPSI</Text>
                <Text style={styles.teksDeskripsi}>{params.wisata.deskripsi} </Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.Judul}>Fasilitas</Text>
                <Text style={styles.teksDeskripsi}>{params.wisata.fasilitas} </Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.Judul}>Lokasi</Text>
                <Text style={styles.teksDeskripsi}>{params.wisata.lokasi} </Text>
              </View>
            </ScrollView>
         </View>
     </View>
    );
  } 
}
export default DetailScreen;

const styles = StyleSheet.create({
  Judul: {
    fontSize: 20, 
    padding: 5, 
    fontWeight: 'bold', 
    color: 'black'
  },

    box: {
      backgroundColor: '#82b3c9',
      padding: 5, 
      marginBottom: 10, 
      borderWidth: 0.5, 
      borderRadius: 6
    },
    image: {
      flex: 3,
      height: 120

    },
    contWisata: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#b3e5fc'

    },
    teksDeskripsi: {
        fontSize: 16,
        textAlign: 'justify',
        padding: 5,
        color: 'black'

    },
    textJudul1: {
      fontSize: 20,
      color: '#fff',
      paddingLeft: 5,
    },
    textJudul2: {
      fontSize: 16,
      color: '#fff',
      paddingLeft: 5

    },
    listButton: {
      flex: 1,
      backgroundColor: '#b2ebf2'
    },

    contJudul: {
      flex: 2,
      justifyContent: 'center',
      backgroundColor: '#01579b'

    },
    contDeskripsi: {
      flex: 4,
      backgroundColor: '#b3e5fc', 
      margin: 10, 
    }
});
