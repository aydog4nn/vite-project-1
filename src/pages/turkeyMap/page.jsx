import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import './turkeyMap.css'

const containerStyle = {
    width: '100%',
    height: '80vh'
};

const center = {
    lat: 39.9334,
    lng: 32.8597
};

const TurkeyMap = () => {
    return (
        <div className="turkey-map-container">
            <h1>Türkiye Haritası</h1>
            <div className="map-content">
                <LoadScript googleMapsApiKey="AIzaSyBQybEBtBm6KB8aE4-g3JYUNzrVg8LLRe4">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={6}
                    >
                        {/* Ankara Marker */}
                        <Marker
                            position={{ lat: 39.9334, lng: 32.8597 }}
                            title="Ankara"
                        />
                        {/* İstanbul Marker */}
                        <Marker
                            position={{ lat: 41.0082, lng: 28.9784 }}
                            title="İstanbul"
                        />
                        {/* İzmir Marker */}
                        <Marker
                            position={{ lat: 38.4237, lng: 27.1428 }}
                            title="İzmir"
                        />
                    </GoogleMap>
                </LoadScript>
            </div>
        </div>
    )
}

export default TurkeyMap 