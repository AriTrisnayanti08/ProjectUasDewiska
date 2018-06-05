import React, { Component } from 'react';
import { Alert, Button, Text, View, Image, StyleSheet, TextInput, ActivityIndicator, 
  TouchableOpacity,KeyboardAvoidingView, ImageBackground} from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation'; 

//Home Screen 
class LoginScreen extends React.Component {
  constructor()
    {
        super();
        this.state = { 
          id_login: '',
          Username: '',
          Password: '',
          ActivityIndicator_Loading: false, 

        }
    }
    UserLoginFunction = () =>{
    this.setState({ ActivityIndicator_Loading : true }, () =>
        {
  fetch('http://nikomangaritrisnayanti.000webhostapp.com/dewiska/getLogin.php', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Username : this.state.Username,
      Password : this.state.Password,
   
    })
 
}).then((response) => response.json())
      .then((responseJson) => {
        this.setState({ ActivityIndicator_Loading : false });
        // If server response message same as Data Matched
       if(responseJson === 'Login berhasil!')
        {
            //Then open Profile activity and send user email to profile activity.
             this.props.navigation.navigate('Tab');
            //this.props.navigation.navigate('List');
        }
        else{
          Alert.alert(responseJson);
        }
      }).catch((error) => {
        console.error(error);
        this.setState({ ActivityIndicator_Loading : false});
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
                source={require('../img/user.png')}//image
                style={{width: 100, height: 100, padding: 10}}
              /> 
            </View>
            <View style={{ flex: 0.5, alignItems:'center', justifyContent: 'center' }}>
              <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20 }}>LOGIN</Text>
            </View>
                <TextInput 
                  placeholder = "Username"
                  style = { styles.TextInputStyleClass } 
                  underlineColorAndroid = "transparent"
                  autoCapitalize="none"
                  returnKeyType="next"
                  onSubmitEditing={() => this.passInput.focus()}
                  onChangeText = {(TextInputText) => this.setState({ Username: TextInputText })} />

                <TextInput 
                  placeholder = "Password"
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
                  onPress = { this.UserLoginFunction }>
                    <Text style = { styles.TextStyle }>Login</Text>
                </TouchableOpacity>

                {
                this.state.ActivityIndicator_Loading ? <ActivityIndicator color='#2196F3' size='large'style={styles.ActivityIndicatorStyle} /> : null
                }
                
            </KeyboardAvoidingView>
    </ImageBackground>  
    );
  }
}
export default LoginScreen;

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
      flex: 0.5,
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
      top: 50,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
  }, 
});