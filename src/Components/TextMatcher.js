// This component controls the overall behaviour of the application
// It's state includes the most recent result array (null if no result has ever been calculated)
// and an error string (empty string initially, or if last calculation was successful )

// It contains two child components
//  - one form to capture the input and trigger the calculation
//  - one to display the result
// The method to process the form data is passed to the child form component as a property.
// This allows the entered information to be stored as state in the form component, where it naturally belongs
// while still allowing the parent component access to this information when required.

import React from "react";
import TextMatchForm from "./TextMatchForm";
import TextMatchResult from "./TextMatchResult";
import FindSubText from "../Services/FindSubText";

class TextMatcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: null,
      error: "",
    };

    this.processFormData = this.processFormData.bind(this);
  }

  // This will be called from the child form when submit is clicked,
  // to which it is passed as the property 'process'
  processFormData(text, subText, caseSensitive) {
    let result = FindSubText(text, subText, caseSensitive);

    if (result.error) {
      this.setState({ results: [], error: result.error });
    } else {
      this.setState({ results: result.indices, error: "" });
    }
  }

  render() {
    const defaultCaseSensitive = this.props.defaultCaseSensitive;
    console.log(`dcs: ${defaultCaseSensitive}`);
    return (
      <div className="TextMatcher">
        <TextMatchForm
          process={this.processFormData}
          defaultCaseSensitive={defaultCaseSensitive}
        />
        <br />
        <TextMatchResult
          // results can be array (including empty), or null
          results={this.state.results}
          // error must not be null, but can be empty string
          error={this.state.error}
        />
      </div>
    );
  }
}

export default TextMatcher;
