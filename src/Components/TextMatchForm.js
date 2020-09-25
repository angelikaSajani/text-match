import React from "react";

class TextMatchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      subText: "",
      caseSensitive: props.defaultCaseSensitive,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const newValue =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    this.setState({ [name]: newValue });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { text, subText, caseSensitive } = this.state;
    console.log(
      `text: ${text}, subtext: ${subText}, caseSensitive: ${caseSensitive}`
    );
    this.props.process(text, subText, caseSensitive);
  }

  render() {
    const caseSensitive = this.state.caseSensitive;

    return (
      <div className="TextMatchForm">
        <h2>Find all ocurrances of 'Subtext' within 'Text'</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="text">Text</label>
            <textarea
              className="form-control"
              name="text"
              naidme="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subText">Subtext</label>
            <input
              type="text"
              className="form-control"
              name="subText"
              id="subText"
              value={this.state.subText}
              onChange={this.handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="caseSensitive">Case senstitive&nbsp;&nbsp;</label>
            <input
              type="checkbox"
              name="caseSensitive"
              id="caseSensitive"
              checked={caseSensitive}
              onChange={this.handleChange}
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default TextMatchForm;
