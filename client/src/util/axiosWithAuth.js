import axios from "axios";

export const axiosWithAuth = () => {
  // const token = localStorage.getItem("token");
  const userSession = localStorage.getItem("userSession");
  console.log("userSession", userSession);
  return axios.create({
    baseURL: "http://localhost:5000/api",

    //http://127.0.0.1
    // Session: {
    //   //Session: { user: userSession },
    //   user: userSession,
    // },
    // headers: {
    //   Authorization: userSession,
    // },
  });
};

// sessionID: 'qMM-wu-FO31pteSpEr-GHhqs2--cNic6',
// session: Session {
//   cookie: {
//     path: '/',
//     _expires: 2020-08-04T00:38:27.305Z,
//     originalMaxAge: 3600000,
//     httpOnly: true,
//     secure: false
//   },
//   user: {
//     id: 1,
//     username: 'u1',
//     password: '$2a$08$Wp4oIMmYG1btztmCBAVX0ex7Rt8JbgVrYbZDfmTut9az1AlG6UYTS',
//     role: 1
//   }
// }
