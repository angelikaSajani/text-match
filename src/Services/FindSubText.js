// returns an object, items:
//   indices (array of numbers, only if successful)
//   error (string, only if an error ocurred)

function FindSubText(text, subText, caseSensitive) {
  // helpful values
  const lSub = subText.length;
  const lText = text.length;

  // sanity checking for edge cases

  if (subText === "") return { error: "Subtext must not be empty." };
  if (text === "")
    return {
      error: `How do you expect to find '${subText}' in an empty string?`,
    };
  if (lSub > lText)
    return {
      error: "You dufus: your subtext is longer than the text you entered.",
    };

  // normal cases
  let result = [];
  let startIndex = 0;
  let t = text,
    s = subText;
  if (!caseSensitive) {
    t = t.toLowerCase();
    s = s.toLowerCase();
  }

  while (startIndex <= lText - lSub) {
    const foundIndex = t.indexOf(s, startIndex);
    // no substring found -> end the loop
    if (foundIndex < 0) break;
    // found something -> add to result array, and search again from first character after found substring
    result.push(foundIndex);
    startIndex = foundIndex + lSub;
  } // end while
  return { indices: result };
}

export default FindSubText;
