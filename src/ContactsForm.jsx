import React, { Component } from "react";
import { v4 as uuid } from "uuid";

export default class ContactsForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      phoneNumber: "",
      location: "",
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
    const newUser = {
      name: this.state.name,
      phoneNumber: this.state.phoneNumber,
      location: this.state.location,
    };
    this.props.handleAddUser(newUser);
    this.setState({ name: "", phoneNumber: "", location: "", id: uuid() });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Add contact</h1>
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
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
