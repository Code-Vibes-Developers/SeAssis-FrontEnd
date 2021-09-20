import React, { Component } from 'react';
import RoadService from '../pages/RoadServices';
import HomeService from '../pages/HomeServices';
// import axios from "axios";

class Requests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serviceData: [],
    };
  }
  HandleCreateService = (e) => {
    console.log('defualt');
    e.preventDefault();
    const helpBody = {
      Pesron_Name: e.target.personName.value,
      Pesron_Addres: e.target.personAddress.value,
      Pesron_Phone: e.target.personPhone.value,
      Person_Description: e.target.Description.value,
    };
    console.log("helpbody", helpBody);
    console.log(this.props);
    // axios
    //   .post(`${process.env.REACT_APP_SERVER}/services`, helpBody)
    //   .then((createdService) => {
    //     this.state.serviceData.push(createdService.data);
    //     this.setState({ serviceData: this.state.serviceData });
    //   });
  };


  render() {

    return (
      <div>
        <RoadService HandleCreateService={this.HandleCreateService} />
        <HomeService HandleCreateService={this.HandleCreateService} />
      </div>
    );
  }
}
export default Requests;
