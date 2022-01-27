const fetch = require("axios").default;
const { PORT } = require("../configs/common");

const name = "andy";
const last_name = "avcı";
const email_address = "canavci2022@gmail.com";

var query = `mutation Can($user: UserInput) {
    createUser(user: $user) {
      name
      id
    }
  }`;

fetch({
  url: `http://localhost:${PORT}/graphql`,
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  data: JSON.stringify({
    query,
    variables: {
      user: { name, last_name, email_address },
    },
  }),
})
  .then((response) => response.data)
  .then((data) => console.log("data returned:", data));
