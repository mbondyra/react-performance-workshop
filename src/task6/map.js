import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

const apiKeyObj = {
  apiKey: 'AIzaSyAmD7zkecUt4vX9CrucxrNifRJywuyx4mw'
}

const mapStyles = {
  width: '100%',
  height: '100%'
}

export class MapContainer extends React.Component {

  render() {
    const latLng = {
      lat: this.props.latLng[0],
      lng: this.props.latLng[1]
    }
    return (
      <div className='mapContainer'>
      {
        this.props.latLng &&
        <Map
          google={this.props.google}
          zoom={7}
          style={mapStyles}
          initialCenter={latLng}
          center={latLng}
        />
      }

      </div>

    )
  }
}

MapContainer.defaultProps = {
  latLng: [0,0]
};

export default GoogleApiWrapper(apiKeyObj)(MapContainer)