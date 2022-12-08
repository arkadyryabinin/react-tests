// say we have nested object
const person = {
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
  }
};

// clone person
const clonePerson = {
  ...person,
  artwork: {
    ...person.artwork,
  }
};

// clone with mutation
const cloneWithMutation = {
  ...person, // Copy other fields
  artwork: { // but replace the artwork
    ...person.artwork, // with the same one
    city: 'New Delhi' // but in New Delhi!
  }
}
