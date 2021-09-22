import React, { Component } from 'react';
import HomeServiceContent from '../components/HomeServiceContent';
import HomeServiceForm from '../components/HomeServiceForm';
import axios from 'axios';
require('dotenv').config();
class HomeServices extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serviceData: [],
      location: [],
      MapOfLocation: '',
    };
  }
  HandleLocation = async () => {
    await navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        location: [position.coords.latitude, position.coords.longitude],
      });

      const url1 = `https://maps.locationiq.com/v3/staticmap?key=pk.cbecb2703474c628d6f82047cd751d62&zoom=18&center=${this.state.location}&format=jpg`;
      axios.get(url1).then((mapResponse) => {
        this.setState({ MapOfLocation: mapResponse.request.responseURL });
      });
    });
    console.log('hiiiiiiiiiiiiiiiii');
  };

  HandleCreateHomeService = (e) => {
    e.preventDefault();
    const helpBody = {
      Pesron_Name: e.target.personName.value,
      Pesron_Addres: e.target.personAddress.value,
      Pesron_Phone: e.target.personPhone.value,
      Person_Description: e.target.Description.value,
      map: this.state.MapOfLocation,
    };
    console.log('helpbody', helpBody);
    axios
      .post(`${process.env.REACT_APP_SERVER}/services`, helpBody)
      .then((createdService) => {
        this.state.serviceData.push(createdService.data);
        this.setState({ serviceData: this.state.serviceData });
      });
    window.location.reload();
    alert('the help on the way');
  };
  render() {
    return (
      <>
        <HomeServiceContent />
        <HomeServiceForm
          HandleCreateHomeService={this.HandleCreateHomeService}
          HandleLocation={this.HandleLocation}
        />
      </>
    );
  }
}
export default HomeServices;
