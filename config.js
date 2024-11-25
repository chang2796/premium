const config = {
  challenge: true, // Set to true if you want to enable password protection.
  blocked: {
    // Normal users can ignore this option. This is for the owner of the website.
    "carli.up.railway": "password",
  },
  users: {interstellar: "CARLI",
  },
};

export default config;
