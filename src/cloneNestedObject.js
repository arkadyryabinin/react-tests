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

// THEORY: OBJECTS ARE NOT REALLY NESTED
// An object like this appears “nested” in code:

const obj = {
  name: 'Niki de Saint Phalle',
  artwork: {
    title: 'Blue Nana',
    city: 'Hamburg',
  }
};

// However, “nesting” is an inaccurate way to think about how objects behave.
// When the code executes, there is no such thing as a “nested” object.
// You are really looking at two different objects:

const obj1 = {
  title: 'Blue Nana',
  city: 'Hamburg',
};

const obj2 = {
  name: 'Niki de Saint Phalle',
  artwork: obj1,
};

// Immer is a popular React library that lets you write using the convenient
// but mutating syntax and takes care of producing the copies for you.
// With Immer, the code you write looks like you are “breaking the rules”
// and mutating an object:

// updatePerson(draft => {
//   draft.artwork.city = 'Lagos';
// });

// To try Immer:

//     Add use-immer to your package.json as a dependency
//     Run npm install
//     Then replace import { useState } from 'react' with import { useImmer } from 'use-immer'
