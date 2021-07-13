function reverse(sentence) {
  const wordsReversedArray = sentence.split(" ").reverse();
  // we need to join the elements of the array back together
  // to reform our sentence  as a string
  const reversedSentence = wordsReversedArray.join(" ");
  return reversedSentence;
}

module.exports = reverse;
