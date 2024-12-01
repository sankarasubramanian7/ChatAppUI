import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://i.pravatar.cc/150?img=3"/>
          </div>
          <h4>Sankara Subramanian</h4>
          <p>CEO & Founder at San Inc</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
          Sankara Subramanian is the CEO and Founder of San Inc, a company focused on streamlining and enhancing digital experiences
          </div>
        </div>
      </div>
    );
  }
}
