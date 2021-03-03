import buildClient from "../api/build-client";

const LandingPage = ({ currentUser }) => {
  console.log("c", currentUser);
  // axios.get("api/users/currentUser");

  // return <h1>landing page</h1>;
  return currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT signed in</h1>
  );
};

LandingPage.getInitialProps = async (context) => {
  console.log("LANDING PAGE!");
  const client = buildClient(context);
  let data = {};
  console.log("??????");
  try {
    console.log("start axios");
    const response = await client.get("/api/users/currentuser");
    data = response.data;
    console.log("ld", data);
  } catch (error) {}

  return data;
};

export default LandingPage;
