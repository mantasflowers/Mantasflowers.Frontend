import jwtDecode from "jwt-decode";
import axios from "axios";

class AuthService {
  setAxiosInterceptors = ({ onLogout }) => {
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          this.setSession(null);

          if (onLogout) {
            onLogout();
          }
        }

        return Promise.reject(error);
      }
    );
  };

  registerUser = (email, password) =>
    new Promise((resolve, reject) => {
      axios
        .post(
          "/user/create",
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response) {
            resolve(response.data);
          } else {
            let msg = "Sistemos klaida!";
            reject(msg);
          }
        })
        .catch((error) => {
          let msg = "Sistemos klaida!";

          reject(msg);
        });
    });

  handleAuthentication() {
    const accessToken = this.getAccessToken();
    if (!accessToken) {
      return;
    }

    if (this.isValidToken(accessToken)) {
      this.setSession(accessToken);
    } else {
      this.setSession(null);
    }
  }

  loginWithEmailAndPassword = (email, password) =>
    new Promise((resolve, reject) => {
      axios
        .post(
          "/authentication/login",
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.data.idToken) {
            const data = jwtDecode(response.data.idToken);

            let userData = {
              ...response.data,
              email: data.email,
              role: "user",
            };

            if (
              data[
                "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
              ]
            ) {
              userData.role = "admin";
            }

            this.setSession(`Bearer ${response.data.idToken}`);
            resolve(userData);
          } else {
            reject("Nepavyko prisijungti!");
          }
        })
        .catch((error) => {
          let errorMsg = error.response.data;

          let msg = "Sistemos klaida!";

          if (errorMsg === "EMAIL_NOT_FOUND") {
            msg = "Sistemos klaida!";
          }

          if (errorMsg === "INVALID_PASSWORD") {
            msg = "Neteisingas slaptažodis!";
          }

          if (errorMsg === "INVALID_EMAIL") {
            msg = "Neteisingas el. paštas!";
          }

          reject(msg);
        });
    });

  loginInWithToken = () =>
    new Promise((resolve, reject) => {
      const token = localStorage.getItem("accessToken");

      const data = jwtDecode(token);

      let userData = {
        email: data.email,
        role: "user",
      };

      if (
        data["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
      ) {
        userData.role = "admin";
      }
      resolve(userData);
    });

  logout = () => {
    this.setSession(null);
  };

  setSession = (accessToken) => {
    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      localStorage.removeItem("accessToken");
      delete axios.defaults.headers.common.Authorization;
    }
  };

  getAccessToken = () => localStorage.getItem("accessToken");

  isValidToken = (accessToken) => {
    if (!accessToken) {
      return false;
    }

    // console.log({ accessToken });

    // const decoded = jwtDecode(accessToken);

    // console.log({ decoded });
    // const currentTime = Date.now() / 1000;
    // console.log({ decoded });

    // console.log(decoded.exp > currentTime);
    return true;
  };

  isAuthenticated = () => !!this.getAccessToken();
}

const authService = new AuthService();

export default authService;
