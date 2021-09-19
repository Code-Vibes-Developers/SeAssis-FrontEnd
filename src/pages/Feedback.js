import React, { Component } from 'react';
import FeedbackSlider from '../components/FeedbackSlider';
import '../HomeGrid.css';
import FeedbackForm from '../components/FeedbackForm';
import axios from 'axios';
export default class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Feedbacks: [],
    };
  }

  handelCreateFeedback = (e) => {
    e.preventDefault();
    const reqBody = {
      name: e.target.name.value,
      mobile: e.target.mobile.value,
      serviceType: e.target.serviceType.value,
      feedback: e.target.feedback.value,
    };
    axios
      .post(`http://localhost:8081/feedback`, reqBody)
      .then((creatFeedbackObject) => {
        this.state.Feedbacks.push(creatFeedbackObject.data);
        this.setState({ Feedbacks: this.state.Feedbacks });
        this.handelDisplayAddModal();
      })
      .catch((error) => console.log(error));
  };

  componentDidMount = () => {
    axios
      .get(`http://localhost:8081/feedback`)

      .then((FeedbacksResponse) => {
        this.setState({ Feedbacks: FeedbacksResponse.data });
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <div>
        <FeedbackSlider Feedbacks={this.state.Feedbacks} />
        <FeedbackForm handelCreateFeedback={this.handelCreateFeedback} />
      </div>
    );
  }
}
