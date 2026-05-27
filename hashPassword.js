const bcrypt = require("bcryptjs");

async function generateHash() {
  const plainPassword = "dushan123"; // <- this is the password you want to hash
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(plainPassword, salt);
  console.log("Your hashed password:\n", hashed);
}

generateHash();
