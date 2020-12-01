const users = [
  {
    name: "Chrystal Washington",
    gender: "female",
    age: 23,
    state: "Northern_Mariana_Islands",
    tags: ["voluptate", "adipisicing"],
  },
  {
    name: "Natalia Shields",
    gender: "female",
    age: 39,
    state: "Vermont",
    tags: ["reprehenderit", "non", "incididunt", "culpa"],
  },
  {
    name: "Petersen Vega",
    gender: "male",
    age: 21,
    state: "Missouri",
    tags: ["cillum", "nostrud", "in", "incididunt", "amet"],
  },
  {
    name: "Barrett Ford",
    gender: "male",
    age: 29,
    state: "Texas",
    tags: ["dolor", "nostrud", "cupidatat", "non"],
  },
  {
    name: "Jennie Gardner",
    gender: "female",
    age: 39,
    state: "North_Carolina",
    tags: ["ullamco", "excepteur", "laboris", "in", "ipsum", "sit"],
  },
  {
    name: "Fitzgerald_Olson",
    gender: "male",
    age: 25,
    state: "South_Dakota",
    tags: ["fugiat", "ex", "consequat", "pariatur"],
  },
  {
    name: "Eugenia Travis",
    gender: "female",
    age: 40,
    state: "Massachusetts",
    tags: ["tempor", "dolore", "tempor", "non", "aliqua", "sit"],
  },
  {
    name: "Alice Hayes",
    gender: "female",
    age: 25,
    state: "Alabama",
    tags: ["mollit", "cillum", "nisi", "voluptate", "qui", "nulla"],
  },
  {
    name: "Porter Mendez",
    gender: "male",
    age: 35,
    state: "Federated_States_Of_Micronesia",
    tags: ["officia", "magna", "sunt", "aliquip", "dolor", "magna", "proident"],
  },
  {
    name: "Barker Mcgowan",
    gender: "male",
    age: 25,
    state: "Kansas",
    tags: ["esse", "dolor", "est", "aliqua", "amet", "magna"],
  },
  {
    name: "Rush Valentine",
    gender: "male",
    age: 21,
    state: "Montana",
    tags: ["sunt", "do"],
  },
  {
    name: "Sybil Watkins",
    gender: "female",
    age: 27,
    state: "Georgia",
    tags: ["adipisicing", "ex", "veniam", "culpa"],
  },
  {
    name: "Louella Gates",
    gender: "female",
    age: 20,
    state: "Marshall_Islands",
    tags: ["labore", "mollit", "labore", "cillum", "cillum", "nulla"],
  },
  {
    name: "Angelina Rose",
    gender: "female",
    age: 37,
    state: "West_Virginia",
    tags: ["nulla", "cupidatat"],
  },
  {
    name: "Wolfe Irwin",
    gender: "male",
    age: 37,
    state: "Colorado",
    tags: ["voluptate", "ipsum", "cillum"],
  },
  {
    name: "Tammi Prince",
    gender: "female",
    age: 39,
    state: "Indiana",
    tags: ["quis", "occaecat", "aliquip", "in", "duis", "consequat"],
  },
  {
    name: "Adams Santana",
    gender: "male",
    age: 36,
    state: "Arkansas",
    tags: ["excepteur", "occaecat", "tempor", "pariatur", "nostrud"],
  },
  {
    name: "Cassandra Hodge",
    gender: "female",
    age: 33,
    state: "Guam",
    tags: ["pariatur", "culpa"],
  },
];

/**
 * 1) Quantidade de female e male
 *
 *  {
 *    male: 5,
 *    female: 3
 *  }
 *
 */

// com for

const femaleMaleQuantity = {};

for (let i = 0; i < users.length; i++) {
  if (!femaleMaleQuantity[users[i].gender]) {
    femaleMaleQuantity[users[i].gender] = 0;
  }

  femaleMaleQuantity[users[i].gender] += 1;
}

console.log(femaleMaleQuantity);

const femaleMaleQuantityReduce = users.reduce(
  (acc, user) => {
    return {
      ...acc,
      [user.gender]: acc[user.gender] + 1,
    };
  },
  { female: 0, male: 0 }
);

console.log(femaleMaleQuantityReduce);

/**
 * 2) Tags por state
 *
 *  {
 *    Colorado: ["nulla", "cupidatat"],
 *    Georgia: ["voluptate", "ipsum", "cillum"],
 *    Kansas: ["pariatur", "culpa"]
 *  }
 *
 */

const tagByState = {};

for (let i = 0; i < users.length; i++) {
  if (!tagByState[users[i].state]) {
    tagByState[users[i].state] = [];
  }

  tagByState[users[i].state] = tagByState[users[i].state].concat(users[i].tags);
}

console.log(tagByState);

/**
 * 3) Tags por quantidade de pessoas
 *
 *  {
 *    pariatur: 5,
 *    nostrud: 3,
 *    quis: 1
 *  }
 *
 */

/**
 * 4) Tags por pessoas
 *
 *  {
 *    pariatur: ['Cassandra Hodge', 'Louella Gates', 'Rush Valentine'],
 *    nostrud: [...],
 *    quis: [...]
 *  }
 *
 */
