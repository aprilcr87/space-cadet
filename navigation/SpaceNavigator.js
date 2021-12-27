import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Apod from '../screens/Apod';
import Asteroids from '../screens/Asteroids';
import MarsRover from '../screens/MarsRover';
import Home from '../screens/Home';

const SpaceNavigator = createStackNavigator({
    Home: Home,
    Apod: Apod,
    Asteroids: Asteroids,
    Rover: MarsRover
});

export default createAppContainer(SpaceNavigator);