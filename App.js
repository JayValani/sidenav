import React from 'react';
import {createAppContainer} from '@react-navigation/native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {Dimension} from 'react-native';
import {Feather} from '@expo/vector-icons';
import {
  ProfileScreen, 
  MessageScreen, 
  ActivityScreen ,
  ListScreen, 
  ReportScreen, 
  StatistaticScreen,
  SignOutScreen,  
}from './screens';

import SideBar from './components/SideBar';

const DrawerNavigator = createDrawerNavigator({
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOption: {
      title: "Profile",
      drawerIcon: ({ tintColor }) => <Feather name="user" size={16} color={tintColor} />
    }
  },
  MessageScreen: {
    screen: MessageScreen,
    navigationOption: {
      title: "Message",
      drawerIcon: ({ tintColor }) => <Feather name="message-square" size={16} color={tintColor} />
    }
  },
  ActivityScreen: {
    screen: ActivityScreen,
    navigationOption: {
      title: "Activities",
      drawerIcon: ({ tintColor }) => <Feather name="activity" size={16} color={tintColor} />
    }
  },
  ListScreen: {
    screen: ListScreen,
    navigationOption: {
      title: "Lits",
      drawerIcon: ({ tintColor }) => <Feather name="list" size={16} color={tintColor} />
    }
  },
  ReportScreen: {
    screen: ReportScreen,
    navigationOption: {
      title: "Reports",
      drawerIcon: ({ tintColor }) => <Feather name="bar-chart" size={16} color={tintColor} />
    }
  },
  StatistaticScreen: {
    screen: StatistaticScreen,
    navigationOption: {
      title: "Statistatics",
      drawerIcon: ({ tintColor }) => <Feather name="trending-up" size={16} color={tintColor} />
    }
  },
  SignOutScreen: {
    screen: SignOutScreen,
    navigationOption: {
      title: "SignOut",
      drawerIcon: ({ tintColor }) => <Feather name="log-out" size={16} color={tintColor} />
    }
  },

},
{
  contentComponent: props => <SideBar {...props} />,

  drawerWidth: Dimension.get('window').width*0.95,
  hideStatusBar: true,

  contentOptions: {
    activeBackgroundColor: "lightblue",
    activeTitnColor: "lightblue",
    itemContainerStyle: {
      marginTop: 16,
      marginHorizontal: 8
    },
    itemStyle: {
      borderRadius: 4
    }
  }
}
);

export default createAppContainer(DrawerNavigator);