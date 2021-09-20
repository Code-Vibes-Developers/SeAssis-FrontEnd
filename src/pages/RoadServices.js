import React, { Component } from 'react';
import RoadServiceContent from '../components/RoadServiceContent';
import RoadServiceForm from '../components/RoadServiceForm';
import axios from 'axios';
require('dotenv').config();
class RoadServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serviceData: [],
      location: [],
      MapOfLocation: '',
    };
  }
  HandleLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        location: [position.coords.latitude, position.coords.longitude],
      });

      const url1 = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_IQ_KEY}&zoom=18&center=${this.state.location}&format=jpg`;
      axios.get(url1).then((mapResponse) => {
        this.setState({ MapOfLocation: mapResponse.request.responseURL });
      });
    });
  };

  HandleCreateService = (e) => {
    e.preventDefault();
    const helpBody = {
      Pesron_Name: e.target.personName.value,
      Pesron_Addres: e.target.personAddress.value,
      Pesron_Phone: e.target.personPhone.value,
      Person_Description: e.target.Description.value,
      map: this.state.MapOfLocation,
    };
    axios
      .post(`${process.env.REACT_APP_SERVER}/services`, helpBody)
      .then((createdService) => {
        this.state.serviceData.push(createdService.data);
        this.setState({ serviceData: this.state.serviceData });
      });
  };
  render() {
    return (
      <>
        <RoadServiceContent />
        <RoadServiceForm
          HandleCreateService={this.HandleCreateService}
          HandleLocation={this.HandleLocation}
        />
      </>
    );
  }
}
export default RoadServices;
