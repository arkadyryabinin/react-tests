import { getImageUrl } from './utils.js';

function Profile({ person }) {
  return (
    <section className="profile">
        <h2>{person.name}</h2>
        <img
          className="avatar"
          src={getImageUrl(person.image.code)}
          alt={person.name}
          width={person.image.width}
          height={person.image.height}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.awards.length} </b> 
            ({person.awards.join(', ')})
          </li>
          <li>
            <b>Discovered: </b>
            {person.discoveries.join(', ')}
          </li>
        </ul>
      </section>
  )
}

const persons = [
  {
    name: 'Maria Skłodowska-Curie',
    image: {
      code: 'szV5sdG',
      width: 70,
      height: 70
    },
    profession: 'physicist and chemist',
    awards: [ 
      'Nobel Prize in Physics',
      'Nobel Prize in Chemistry',
      'Davy Medal',
      'Matteucci Medal',
    ],
    discoveries: ['polonium (element)'],
  },

  {
    name: 'Katsuko Saruhashi',
    image: {
      code: 'YfeOqp2',
      width: 70,
      height: 70
    },
    profession: 'geochemist',
    awards: [ 
      'Miyake Prize for geochemistry',
      'Tanaka Prize',
    ],
    discoveries: ['a method for measuring carbon dioxide in seawater'],
  },
  
]

export default function Gallery() {
  const list = persons.map((x, i) => (<Profile person={x} key={i} />))
  return (
    <div>
      <h1>Notable Scientists</h1>
      {list}
    </div>
  );
}
