export function getFirstNames(people) {
  return people.map((person) => person.firstName);
}

export function getFullNames(people) {
  return people.map((person) => person.lastName);
}

export function getNameAndAge(people) {
  let nameAndAge = [];
  people.forEach((person) => {
    nameAndAge.push(`${person.firstName} (${person.age})`);
  });
  return nameAndAge;
}

export function getPeopleByAge(people, age) {
  return people.filter((person) => person.age === age);
}

export function getPeopleNamesOlderThan(people, age) {
  return people.filter((person) => person.age > age);
}

export function getPeopleByLastName(people, lastName) {
  return people.filter((person) => person.lastName === lastName);
}

export function findPersonById(people, id) {
  return people.find((person) => person.id === id);
}

export function isAnyoneOlderThan(people, age) {
  return people.some((person) => person.age > age);
}

export function getFullNamesSortedByAge(people) {
  return people.sort((a, b) => a.age - b.age);
}
