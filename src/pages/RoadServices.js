import React, { Component } from "react";
import RoadServiceContent from "../components/RoadServiceContent";
import RoadServiceForm from "../components/RoadServiceForm";

class RoadServices extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <RoadServiceContent />
        <RoadServiceForm HandleCreateService={this.props.HandleCreateService} />
      </div>
    );
  }
}
export default RoadServices;
