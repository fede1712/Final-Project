import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import React from 'react'


function Map(props) {

    return (
        <>
            <GoogleMap defaultZoom={10} defaultCenter={{ lat: 40.392631471366755, lng: - 3.6986193540171675 }} />
            {props.shop.map(elm =>
                < Marker position={{ lat: elm.address.coordinates[0], lng: elm.address.coordinates[1] }} />
            )}

        </>
    )
}

export default withScriptjs(withGoogleMap(Map))