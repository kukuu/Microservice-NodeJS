import axios from "axios";

/*let one = "https://api.github.com/users/iliakan";
let two = "https://api.github.com/users/remy";
let three = "https://api.github.com/users/jeresig";
*/

let one = "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/ftse-fsi.json";
let two = "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-hkd.json";
let three = "https://ft-tech-test-example.s3-eu-west-1.amazonaws.com/gbp-usd.json";

const requestOne = axios.get(one);
const requestTwo = axios.get(two);
const requestThree = axios.get(three);

axios
  .all([requestOne, requestTwo, requestThree])
  .then(
    axios.spread((...responses) => {
      const responseOne = responses[0];
      const responseTwo = responses[1];
      const responesThree = responses[2];

      // results
      console.log(responseOne, responseTwo, responesThree);
    })
  )
  .catch(errors => {
    // react on errors.
    console.error(errors);
  });
