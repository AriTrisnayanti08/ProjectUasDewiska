import React, { Component } from 'react';
import { Alert, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, 
  TouchableOpacity,KeyboardAvoidingView, ImageBackground } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; 
import { Content, Container, List, ListItem, Body, Thumbnail } from 'native-base';

class DaftarScreen extends React.Component {
  constructor()
    {
        super();
        this.state = {
          nama: '',
          email: '',
          Username: '',
          Password: '',
          ActivityIndicator_Loading: false,
        }
    }

    Insert_Data_Into_MySQL = () =>
    {
        this.setState({ ActivityIndicator_Loading : true }, () =>
        {
          //mengirim data ke database melalui api
            fetch('http://nikomangaritrisnayanti.000webhostapp.com/dewiska/AddUser.php',
            {
                method: 'POST',
                headers:
                {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                {
                  nama : this.state.nama,
                  email : this.state.email,
                  Username : this.state.Username,
                  Password : this.state.Password,
                })

            }).then((response) => response.json()).then((responseJsonFromServer) => {
                    Alert.alert(responseJsonFromServer);
                    this.setState(
                        {
                            id_login: '',
                            nama: '',
                            email: '',
                            Username: '',
                            Password: '',
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
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../img/bg.jpg')}>
          {this.props.children}

      <KeyboardAvoidingView style = { styles.box }>
            <View style={{ flex: 0.8, alignItems:'center', justifyContent: 'center', marginBottom: 15, paddingTop: 10}}>
              <Image
                source={require('../img/add.png')}//image
                style={{width: 100, height: 100, padding: 10}}
              /> 
            </View>
            <View style={{ flex: 0.5, alignItems:'center', justifyContent: 'center' }}>
              <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20 }}>DAFTAR AKUN BARU</Text>
            </View>
          <TextInput 
            placeholder = "Masukkan Nama"
            style = { styles.TextInputStyleClass } 
            underlineColorAndroid = "transparent"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => this.passInput.focus()}
            onChangeText = {(TextInputText) => this.setState({ nama: TextInputText })} />

          <TextInput 
            placeholder = "Masukkan Email"
            style = { styles.TextInputStyleClass } 
            underlineColorAndroid = "transparent"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => this.passInput.focus()}
            onChangeText = {(TextInputText) => this.setState({ email: TextInputText })} />

          <TextInput 
            placeholder = "Masukkan Username"
            style = { styles.TextInputStyleClass } 
            underlineColorAndroid = "transparent"
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => this.passInput.focus()}
            onChangeText = {(TextInputText) => this.setState({ Username: TextInputText })} />

          <TextInput 
            placeholder = "Masukkan Password"
            style = { styles.TextInputStyleClass } 
            underlineColorAndroid = "transparent"
            returnKeyType="go"
            autoCapitalize="none"
            secureTextEntry
            ref={(input) => this.passInput = input}
            onChangeText = {(TextInputText) => this.setState({ Password: TextInputText })} />
            
            <TouchableOpacity
              activeOpacity = { 0.5 }
              style = { styles.TouchableOpacityStyle }
              onPress = { this.Insert_Data_Into_MySQL }>
              <Text style = { styles.TextStyle }>Daftar</Text>

            </TouchableOpacity>
              {
              this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null
              }
      </KeyboardAvoidingView>
    </ImageBackground>  
    );
  }
}
export default DaftarScreen;

const styles = StyleSheet.create(
{
  backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
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