import React from 'react';
import { } from 'react-native';
import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import HalamanHome from './HomeScreen.js';
import KategoriScreen from './KategoriWisata.js';
import LoginScreen from './LoginScreen.js';
import DaftarScreen from './DaftarScreen.js';
import DetailScreen from './DetailWisata.js';
import ListScreen from './ListWisata.js';
import TambahScreen from './TambahWisata.js';
import PetaScreen from './PetaWisata.js';
import Icon from 'react-native-ionicons';
import KomentarScreen from './TambahKomentar.js'

export default class MainApp extends React.Component {
  render() {
    return (
      <Route />
    );
  }
}

const BerandaStack = StackNavigator({
  Home: { screen: HalamanHome },
  Login: { screen: LoginScreen },
  Daftar: { screen: DaftarScreen }},
  { navigationOptions: { header: null },
});

const NavStack = StackNavigator({
  Kategori: { screen: KategoriScreen },
  List: { screen: ListScreen },
  Detail: { screen: DetailScreen },
  //Komentar: { screen: KomentarScreen},
});

const ScreenTabs = TabNavigator(
  {
    Home: { screen: NavStack },
    Tambah: { screen: TambahScreen },
    Peta : {screen: PetaScreen},
  },
  { 
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "md-home";
        } else if (routeName === "Tambah") {
          iconName = "md-add";
        } else if (routeName === "Peta") {
          iconName = "ios-locate-outline";
        } 
        return <Icon android={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: "#000",
      inactiveTintColor: "#fff",
      style: {
        backgroundColor: "#01579b"
      }
    },
    animationEnabled: true,
    swipeEnabled: true
  }
);


const Route = StackNavigator({
  Home: { screen: BerandaStack },
  View: { screen: NavStack},
  Tab: {screen: ScreenTabs},
},
{ navigationOptions: {
    header: null,
    gesturesEnabled: false,
  }
});