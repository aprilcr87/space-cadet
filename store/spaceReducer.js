import { apod, asteroids, roverPhotos } from '../data/mockData';
import { GET_APOD } from './actions';

const initialState = {
    apod: apod,
    asteroids: asteroids,
    roverPhotos: roverPhotos
};

const spaceReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_APOD:
            return state.apod;
        default:
            return state;
    }
    return state;
}

export default spaceReducer;