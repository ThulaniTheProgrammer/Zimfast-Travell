
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import Hippocrick from './hippocrick';

const initialRegion = {
    latitude: -20.07696,
    longitude: 30.83290,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}

function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

const  Museumgps = () => {
    const [region, setRegion] = React.useState(initialRegion);

    React.useEffect(() => {
        (async () => {
            const { coords } = await getCurrentPosition();
            setRegion({
                ...region,
                latitude: coords.latitude,
                longitude: coords.longitude,
            });
        })();
    }, []);

    return (
        <MapView style={{ flex: 1 }} region={region}>
            <Marker coordinate={region} />
        </MapView>
    );
};
export default  Museumgps
  