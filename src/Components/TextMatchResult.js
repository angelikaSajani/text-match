import React from "react";

// expects either a property called results (array)    OR
// error (string)
function TextMatchResult(props) {
  console.log(`Now in TextMatchResult: ${props.error}`);
  console.log(`Now in TextMatchResult: ${props.results}`);
  const error = props.error;
  const results = props.results;

  // this will be true after user clicked submit, ibut inputs were invalid
  if (error !== "") {
    return (
      <div className="alert alert-warning">
        <strong>You doofus</strong> {error}
      </div>
    );
  }

  // this will be true if we never submitted the form
  if (!results) return <div></div>;

  // this will be true if user clicked submit, inputs were valid, but nothing was found
  if (results.length === 0) {
    return (
      <div className="alert alert-info">
        <strong>Oops</strong> Nothing was found
      </div>
    );
  }

  return (
    <div className="TextMatchResult">
      <div className="alert alert-success">
        <strong>Success!</strong>{" "}
        {`TextMatcher found ${results.length} matches`}
      </div>

      <ul className="list-group list-group-flush">
        {results.map((item, index) => {
          return (
            <li className="list-group-item" key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TextMatchResult;
