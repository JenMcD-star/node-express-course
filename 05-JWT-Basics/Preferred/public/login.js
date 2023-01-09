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
    console.log("got it");
  } catch (error) {
    console.log(error);
    localStorage.removeItem("token");
  }
});

displayBtn.addEventListener ("click", async (e) => {
    const token = localStorage.getItem('token')
    try {
      const { data } = await axios.get('/api/v1/hello', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      display.innerHTML = `<h5>${data.msg}</h5>`
  
    } catch (error) {
      localStorage.removeItem('token')
      display.innerHTML = `<p>${error.response.data.msg}</p>`
    }
  })
  
