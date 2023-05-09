import React, { Component } from "react";

export default class EditContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.user.id,
      name: props.user.name,
      phoneNumber: props.user.phoneNumber,
      location: props.user.location,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.saveChanges(this.state.id, this.state);
    this.setState({
      name: "",
      phoneNumber: "",
      location: "",
    });
  }

  render() {
    return (
      <div className="modal">
        <form onSubmit={this.handleSubmit}>
          <h1>Add Contact</h1>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Phone:
            <input
              type="number"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button onClick={this.props.saveChanges}>Save</button>
          <span className="close" onClick={this.props.modalClose}>
            &times;
          </span>
        </form>
      </div>
    );
  }
}
