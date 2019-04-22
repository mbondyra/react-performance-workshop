import React, { Component } from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react'

const mapStyles = {
  width: '100%',
  height: '100%'
}

export class MapContainer extends Component {
  render() {
    return (
      <div style={{zIndex:100 , position: 'fixed', bottom:0, left: 0, width: '300px', height: '300px'}}>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
          lat: 52.2884,
          lng: 36.8233
          }}
        />
      </div>

    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAmD7zkecUt4vX9CrucxrNifRJywuyx4mw'
})(MapContainer)