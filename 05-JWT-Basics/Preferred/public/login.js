const usernameInputDOM = document.getElementById("username");
const passwordInputDOM = document.getElementById("password");
const submitBtn = document.getElementById("submitButton");
const displayBtn = document.getElementById("displayBtn");
const display = document.getElementById("display");

submitBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  const username = usernameInputDOM.value;
  const password = passwordInputDOM.value;

  try {
    const { data } = await axios.post("/api/v1/logon", { username, password });
    localStorage.setItem("token", data.token);
  } catch (error) {
    display.innerHTML = `<h5>${error}</h5>`;
    localStorage.removeItem("token");
  }
});

displayBtn.addEventListener("click", async (e) => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const { data } = await axios.get("/api/v1/hello", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      display.innerHTML = `<h5>${data.msg}</h5>`;
    } catch (error) {
      display.innerHTML = `<h5>${error}</h5>`;

      localStorage.removeItem("token");
    }
  } else {
    display.innerHTML = `<h5>Not authorized<h5>`;
  }
});
