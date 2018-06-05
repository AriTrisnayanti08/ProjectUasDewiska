import React, { Component } from 'react';
import { Alert, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, 
  TouchableOpacity,KeyboardAvoidingView, ImageBackground } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; 
import { Content, Container, List, ListItem, Body, Thumbnail } from 'native-base';

class LogoTitle extends React.Component { // header
  render() {
    return (
      <View style={styles.Header}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 25, color: 'white', padding: 5, fontWeight: 'bold' }}>Tambah Komentar</Text>
        </View>
      </View>
    );
  }
}

class KomentarScreen extends React.Component {
static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerLeft: null,
  };

  constructor()
    {
        super();
        this.state = {
          id_komentar: '',
          id_wisata: '',
          id_login: '',
          komentar: '',
          ActivityIndicator_Loading: false,
        }
    }

  _componentDidMount()  {
      const { params } = this.props.navigation.state;
      const id_kategori= params.id_kategori;
      const id_wisata= params.id_wisata;
      const id_login= params.id_kategori;

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


    Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
          //mengirim data ke database melalui api
            fetch('http://nikomangaritrisnayanti.000webhostapp.com/dewiska/AddKomentar.php',
            {
                method: 'POST',
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  komentar : this.state.komentar,
                })

            }).then((response) => response.json()).then((responseJsonFromServer) => {
                    Alert.alert(responseJsonFromServer);
                    this.setState(
                        {
                            id_komentar: '',
                            id_wisata: '',
                            id_login: '',
                            komentar: '',
                            ActivityIndicator_Loading: false
                        });

                }).catch((error) => {
                    console.error(error);

                    this.setState({ ActivityIndicator_Loading: false });
                });
        });
    }

  render() {
    return (
      <View style= { styles.containerMain}>
      <KeyboardAvoidingView style = { styles.box }>
        <View style={{ flex: 0.8, alignItems:'center', justifyContent: 'center', marginBottom: 15, paddingTop: 10}}>
              <Image
                source={require('../img/edit.png')}//image
                style={{width: 100, height: 100, padding: 10}}
              /> 
          </View>
          <View style={{ flex: 0.5, alignItems:'center', justifyContent: 'center' }}>
              <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20 }}>TAMBAH KOMENTAR</Text>
          </View>
          <TextInput 
            placeholder = "Masukkan Komentar"
            style = { styles.TextInputStyleClass } 
            underlineColorAndroid = "transparent"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => this.passInput.focus()}
            onChangeText = {(TextInputText) => this.setState({ komentar: TextInputText })} />

            <TouchableOpacity
              activeOpacity = { 0.5 }
              style = { styles.TouchableOpacityStyle }
              onPress = { this.Insert_Data_Into_MySQL }>
              <Text style = { styles.TextStyle }>Kirim</Text>

            </TouchableOpacity>
              {
              this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null
              }
      </KeyboardAvoidingView>
    </View>  
    );
  }
}
export default KomentarScreen;

const styles = StyleSheet.create(
{
   containerMain: {
    backgroundColor: '#b3e5fc',
    flex: 1,
    flexDirection: 'column',
  },
  Header: {
     flex: 1,
     backgroundColor: '#01579b',
  },
    box:
    {
      paddingTop: 20,
      borderRadius: 5,
      flex: 0.7,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 25,
      marginLeft: 15,
      marginRight: 15,
      flexDirection: 'column',
    },
    TextInputStyleClass:
    {
      textAlign: 'center',
      height: 40,
      backgroundColor : "white",
      marginBottom: 10,
      width: '90%'
    },
 
    TouchableOpacityStyle:
   {
      paddingTop: 10,
      paddingBottom:10,
      backgroundColor:'#01579b',
      marginBottom: 10,
      marginTop: 5, 
      width: '50%',
      borderRadius: 7 
    },
 
    TextStyle:
    {
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    },

    ActivityIndicatorStyle:{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
  }, 
});