export async function getData(from, num) {
  const y = `Lorem ipsum dolor sit amet. Ut corrupti fuga ea consequuntur saepe et debitis amet ut incidunt accusantium qui nobis sunt! A dolorum deleniti aut nisi neque eos sint recusandae sed tenetur nihil ad rerum asperiores aut autem voluptas. Et omnis impedit ab optio voluptatum ad magnam dolor.Id velit rerum quo incidunt quaerat est cupiditate internos ad dicta natus. Qui illo deserunt qui quam dolores ut rerum impedit aut ullam consectetur et odit repellat in tempore repellendus. Qui voluptates fuga et dolore inventore et incidunt enim. 33 molestiae consequatur ut dolorum animi qui corporis vero.At fugit asperiores qui minus earum a numquam quia ut culpa optio ea facilis nemo sed quod praesentium. Et maiores quis et laudantium rerum et debitis dolores eos excepturi laudantium.`;

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  return new Promise((res, rej) => {
    setTimeout(() => {
      const x = [];
      for (let i = from; i > from - num; i += -1) {
        x.push({
          id: i,
          header: y.substring(0, getRandomInt(50)),
          body: y.substring(0, getRandomInt(y.length)),
        })
      }
      res(x);
    }, 1000);
  })
}