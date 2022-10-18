let person = {
  name: "Pursalane",
  age: 11,
  gender: "Female",
  hairColor: "black",
  personality: "Not Existant",
};

for (const propertyName in person) {
  const value = person[propertyName];
  console.log(propertyName, value);
}
