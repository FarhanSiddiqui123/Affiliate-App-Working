import { createSwitchNavigator,createAppContainer, } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
//import login from "../pages/login";
import catalog from "../pages/catalog/catalog";
import dashboard from '../pages/dashboard/dashboard';
import orders from '../pages/orders/orders';
import cms from '../pages/cms/cms';

/*
const loginStack = createStackNavigator({
    Login: login,
  });*/

  // Add all screens for Home Stack
  const catalogStack = createStackNavigator({
    Affiliate: catalog,
  });
  const dashboardStack = createStackNavigator({
    Affiliate: dashboard,
  });
  const orderStack = createStackNavigator({
    Affiliate: orders,
  });
  const cmsStack = createStackNavigator({
    Affiliate: cms,
  });

const mainTab=createBottomTabNavigator({
    Catalog: {
        screen: catalogStack,
        navigationOption:{
          title:'Catalog',
       },
      },
      Dashboard:{
          screen: dashboardStack,
          navigationOption:{
            title:'Dashboard',
         },
      },
      Orders:{
        screen: orderStack,
        navigationOption:{
          title:'Orders',
       },
    },
    CMS:{
        screen: cmsStack,
        navigationOption:{
          title:'CMS',
       },
    },
})

  var SwitNav = createSwitchNavigator({
    //login: loginStack,
    app: mainTab,
   
  });
  

  export var AppContainer = createAppContainer(mainTab);

