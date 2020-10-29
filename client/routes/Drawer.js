import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './HomeStack';

const RootDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    'What harsh truths do you prefer to ignore?': {
      screen: HomeStack,
    },
  },
  {
    drawerBackgroundColor: 'orange',
    drawerWidth: 200,
    contentOptions: {
      activeTintColor: 'black',
      itemsContainerStyle: {
        marginVertical: 0,
      },
      iconContainerStyle: {
        opacity: 1,
      },
    },
  }
);

export default createAppContainer(RootDrawerNavigator);
