/* eslint-disable no-param-reassign */

const initialState = {
  user: {
    id: "5e86809283e28b96d2d38537",
    avatar: "/static/avatar-default.png",
    bio: "Nice guy",
    canHire: false,
    country: "Lithuania",
    email: "martynas.padarauskas@gmail.com",
    username: "admin",
    password: "admin",
    firstName: "Martynas",
    isPublic: true,
    lastName: "Padarauskas",
    phone: "862199910",
    role: "admin",
    state: "Vilnius",
    timezone: "4:32PM (GMT-4)",
  },
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};

export default accountReducer;
