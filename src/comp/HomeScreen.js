import React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { SocialIcon } from 'react-native-elements';


class HalamanHome extends React.Component {
  render() {
    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../img/gambar.jpg')}>
          {this.props.children}
      
        <View style={ styles.box2 }>
          <View style={{ margin: 8, alignItems: 'center', flex: 1, paddingTop: 5, paddingBottom: 20 }}>
              <Image source={require('../img/logo2.png')} style={styles.image} />
          </View>
        </View>
        <View style={ styles.box1 }>
          <Text style={{ fontSize: 25, textAlign: 'center', color: 'black', fontWeight: 'bold'}}>
           DEWISKA{'\n'}</Text>
            <View style={{ margin: 5 }}>
              <Text style={{ fontSize: 22, textAlign: 'center', fontWeight: 'bold', color: 'black'}}>
              Destinasi Wisata Karangasem{'\n'}</Text>
            </View>
        </View>
          <View style={{ margin: 20, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.TouchableOpacityStyle}
              onPress={() => this.props.navigation.navigate('Login')}
            >
              <Text style={styles.TextStyle}>Sign In</Text>
              </TouchableOpacity>

              <Text style={{color: 'black'}}>Or{'\n'}</Text>

              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.TouchableOpacityStyle}
                onPress={() => this.props.navigation.navigate('Daftar')}
              >
                <Text style={styles.TextStyle}>Sign Up</Text>
              </TouchableOpacity>
          </View>
        
          </ImageBackground>
    );
  } 
}
export default HalamanHome;

const styles = StyleSheet.create({
  box1: {
    marginLeft: 15,
    marginRight: 15,
    borderWidth: 1,
    paddingTop: 10,
    marginTop: 100,
    borderColor: 'black',
    justifyContent: 'center',
    borderRadius: 22
  },
  box2: {
    flex: 0.6,
    paddingTop: 10,
    paddingBottom: 15,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: 'center',
  },
    TextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18
    },
  image: {
    width: 190,
    height: 190,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
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
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    }
});
