const peoples = [
  {
    name: "tim",
    age: 20,
  },
  {
    name: "alex",
    age: 22,
  },
];
const sortedPeoples = peoples.sort((a, b) => a.name.localeCompare(b.name));

export default sortedPeoples;
