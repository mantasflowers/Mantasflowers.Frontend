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

  registerUser = (data) =>
    new Promise((resolve, reject) => {
      axios
        .post("/auth/register", data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response) {
            resolve(response.data.user);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          reject(error);
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
          "/userbase/tokens",
          { email, password },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log("response in service ->", response);

          if (response.data.idToken) {
            this.setSession(response.data.idToken);
            resolve(response.data);
          } else {
            reject("Nepavyko prisijungti!");
          }
        })
        .catch((error) => {
          let errorMsg = error.response.data;

          let msg;

          if (errorMsg === "EMAIL_NOT_FOUND") {
            msg = "Tokio vartotojo sistemoje nėra!";
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
      axios
        .get("/auth/login-token", {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          if (response.data.error) {
            localStorage.clear();
            window.location.replace("/");
          }
          if (response.data.user) {
            resolve(response.data.user);
          } else {
            reject(response.data.error);
          }
        })
        .catch((error) => {
          localStorage.clear();
          window.location.replace("/");
          reject(error);
        });
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

    const decoded = jwtDecode(accessToken);
    const currentTime = Date.now() / 1000;

    return decoded.exp > currentTime;
  };

  isAuthenticated = () => !!this.getAccessToken();
}

const authService = new AuthService();

export default authService;
