
import React from 'react'
import MapView, { Marker } from 'react-native-maps';

const initialRegion = {
    latitude: -18.94264,
    longitude: 32.44437,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}

function getCurrentPosition() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

const Masanganogps = () => {
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
export default  Masanganogps
  