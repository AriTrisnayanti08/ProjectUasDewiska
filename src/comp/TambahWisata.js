import React, { Component } from 'react';
import { Alert, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator,TouchableOpacity,
  KeyboardAvoidingView, PixelRatio, Picker } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; 
import ImagePicker from "react-native-image-picker";


class TambahScreen extends React.Component {
  constructor()
    {
        super();
        this.state = {
          namaWisata: '',
          fasilitas: '',
          lokasi: '',
          id_kategori:'',
          ActivityIndicator_Loading: false,
        }
    }



  Insert_Data_Into_MySQL = () => {
    const { namaWisata } = this.state;
    const { fasilitas } = this.state;
    const { lokasi } = this.state;
    const { id_kategori } = this.state;

    fetch('http://nikomangaritrisnayanti.000webhostapp.com/dewiska/AddWisata.php', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        namaWisata : namaWisata,
        fasilitas : fasilitas,
        lokasi : lokasi,
        id_kategori : id_kategori,

      })
    }).then((response) => response.json())
      .then((responseJson) => {

        // Showing response message coming from server after inserting records.
        Alert.alert(
          'INFO',
          'Wisata Baru Berhasil Ditambah',
          [
            {text: 'OK', onPress: () => this.props.navigation.navigate('Tab')},
          ],
          { cancelable: false }
        )

      }).catch((error) => {
        console.error(error);
      });

  }
  state = {
    ImageSource: null,
};

choosePicture = () => {
  console.log("upload")
  var ImagePicker = require('react-native-image-picker');
  var options = {
      title: 'Pilih Gambar',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
  };

  ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };
        console.log(source);
        console.log(response.fileName);
        this.setState({
          srcImg: source,
          uri: response.uri,
          fileName: response.fileName

        });
      }
  });
};

uploadPicture = () => {
  console.log('mulai upload');
  this.setState  ({loading : true })
    const { namaWisata } = this.state;
    const { fasilitas } = this.state;
    const { lokasi } = this.state;
    const { id_kategori } = this.state;

  const data = new FormData();
  //data.append('name', 'Fotoku'); // you can append anyone.
  data.append('fileToUpload', {
    uri: this.state.uri,
    type: 'image/jpeg', // or photo.type
    name: this.state.fileName,
  });

  const url= "http://nikomangaritrisnayanti.000webhostapp.com/dewiska/upload.php"
  fetch(url, {
    method: 'post',
    body: data
  })
  .then((response) => response.json())
  .then((responseJson) =>
    {
      // console.log(responseJson);
      this.setState  ({
          loading : false
         }, function(){
          fetch('http://nikomangaritrisnayanti.000webhostapp.com/dewiska/AddWisata.php', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
           namaWisata : namaWisata,
           fasilitas : fasilitas,
           lokasi : lokasi,
           id_kategori : id_kategori,
          }),
        });
        })
        Alert.alert(
          'INFO',
          'Wisata Baru Berhasil Ditambah',
          [
            {text: 'OK', onPress: () => this.props.navigation.navigate('Tab')},
          ],
          { cancelable: false }
        )
    });
    //here for alert
   
}

  static navigationOptions = {
    header: null
  };


 render() {
    return (
      <View style= { styles.containerMain}>
      <KeyboardAvoidingView style = { styles.box }>
            <View style={{ flex: 0.5, alignItems:'center', justifyContent: 'center', paddingBottom: 10 }}>
              <Text style={{fontWeight: 'bold', color: 'black', fontSize: 25 }}>TAMBAH WISATA BARU</Text>
            </View>
          <TextInput 
            placeholder = "Nama Wisata"
            style = { styles.TextInputStyleClass } 
            underlineColorAndroid = "transparent"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => this.passInput.focus()}
            onChangeText = {(TextInputText) => this.setState({ namaWisata: TextInputText })} />

          <TextInput 
            placeholder = "Fasilitas"
            style = { styles.TextInputFasilitas } 
            underlineColorAndroid = "transparent"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => this.passInput.focus()}
            onChangeText = {(TextInputText) => this.setState({ fasilitas: TextInputText })} />

          <TextInput 
            placeholder = "Lokasi"
            style = { styles.TextInputLokasi} 
            underlineColorAndroid = "transparent"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => this.passInput.focus()}
            onChangeText = {(TextInputText) => this.setState({ lokasi: TextInputText })} />

            <Picker
              selectedValue={this.state.id_kategori}
              style={styles.Picker}
              onValueChange={(itemValue, itemIndex) => this.setState({id_Kategori: itemValue})}>
              <Picker.Item label="Pilih Kategori" value="id_kategori" />
              <Picker.Item label="Wisata Pantai" value="K01" />
              <Picker.Item label="Wisata Air Terjun" value="K02" />
              <Picker.Item label="Wisata Bukit" value="K03" />
              <Picker.Item label="Wisata Pura" value="K04" />
              <Picker.Item label="Wisata Rekreasi" value="K05" />
              <Picker.Item label="Wisata Kuliner" value="K06" />
            </Picker>

            <View style={{ flex: 1, paddingBottom: 20, alignItems: 'center', justifyContent: 'center', 
            marginBottom: 10 }}>
                <Text style={{fontSize: 18, color: '#000'}}>Tambah Foto</Text>
                <TouchableOpacity onPress={this.choosePicture.bind(this)}>
                            <View style={styles.ImageContainer}>
                                {this.state.srcImg === null ? (
                                    <Text>Ambil Photo Wisata</Text>
                                ) : (
                                        
                                        <Image
                                            style={styles.ImageContainer}
                                            source={this.state.srcImg}
                                        />
                                    )}
                            </View>
                 </TouchableOpacity>
            </View>
            <TouchableOpacity
              activeOpacity = { 0.5 }
              style = { styles.TouchableOpacityStyle }
              block info onPress={this.uploadPicture}>
              <Text style = { styles.TextStyle }>Tambah</Text>
            </TouchableOpacity>
              {
              this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null
              }
      </KeyboardAvoidingView>
    </View>  
    );
  }
}
export default TambahScreen;

const styles = StyleSheet.create(
{
  containerMain: {
    backgroundColor: '#b3e5fc',
    flex: 1,
    flexDirection: 'column',
  },
  kotak: {
      backgroundColor: '#80deea',
      padding: 5, 
      marginBottom: 10, 
      borderWidth: 0.5, 
      borderRadius: 6
    },
    box:
    {
      paddingTop: 10,
      borderRadius: 5,
      flex: 1,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 10,
      marginLeft: 15,
      marginRight: 15,
      flexDirection: 'column',
    },
    TextInputStyleClass:
    {
      textAlign: 'center',
      height: 40,
      backgroundColor : "white",
      marginBottom: 7,
      width: '90%'
    },
    TextInputFasilitas:
    {
      textAlign: 'center',
      height: 60,
      backgroundColor : "white",
      marginBottom: 7,
      width: '90%'
    },
    TextInputLokasi:
    {
      textAlign: 'center',
      height: 40,
      backgroundColor : "white",
      marginBottom: 7,
      width: '90%',
    },
    Picker: {
      height: 40,
      backgroundColor : "white",
      marginBottom: 40,
      width: '90%',
    },
    TouchableOpacityStyle:
   {
      paddingTop: 10,
      paddingBottom:10,
      backgroundColor:'#01579b',
      marginBottom: 20,
      marginTop: 5, 
      width: '30%',
      borderRadius: 7 
    },
  ImageContainer: {
      borderRadius: 10,
      marginBottom: 20,
      width: 300,
      height: 170,
      borderColor: "#2196F3",
      borderWidth: 1 / PixelRatio.get(),
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'rgba(255,255,255, .4)'

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