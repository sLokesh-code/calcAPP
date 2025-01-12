const app = require("./app");

const PORT = process.env.NODE_ENV === "test" ? 5000 : process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Started on PORT: ${PORT}`);
});
