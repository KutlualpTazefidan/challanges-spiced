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

export function getPeopleNamesOlderThan(people, age) {}

export function getPeopleByLastName(people, lastName) {}

export function findPersonById(people, id) {}

export function isAnyoneOlderThan(people, age) {}

export function getFullNamesSortedByAge(people) {}
