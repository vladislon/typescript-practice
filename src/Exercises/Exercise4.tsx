import { useEffect } from 'react';

// Promise<void>
function processDelay(time: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise został rozwiązany po ${time} sekundach`);
    }, time * 1000);
  });
}

processDelay(1).then((result) => console.log(result));
processDelay(2).then((result) => console.log(result));
processDelay(3).then((result) => console.log(result));
processDelay(4).then((result) => console.log(result));

// Generic types
function getFirstElement<T>(array: Array<T>): T {
  return array[0];
}

const numArr: Array<number> = [1, 2, 3, 4, 5];
const strArr: Array<string> = ['orange', 'banana', 'apple'];
const boolArr: Array<boolean> = [true, false, false];

// Utility types
interface User {
  name: string;
  age: number;
}

function updateUser(user: User, update: Partial<User>): User {
  return { ...user, ...update };
}
const userEwa = { name: 'Ewa', age: 27 };
const karolUser: Partial<User> = { name: 'Karol' };
const readonlyUser: Readonly<User> = { name: 'Jacek', age: 30 };
// readonlyUser.name = 'Marlena'; - error
type UserNames = 'ewa' | 'jacek';

const users: Record<UserNames, User> = {
  ewa: userEwa,
  jacek: readonlyUser,
};

const users2: Record<string, Partial<User>> = {
  user1: userEwa,
  user2: karolUser,
  user3: readonlyUser,
};

console.log(users);
console.log(users2);

function Exercise4() {
  function fetchData(): Promise<void> {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Exercise4</h2>
      <ol>
        <li>{getFirstElement(numArr)}</li>
        <li>{getFirstElement(strArr)}</li>
        <li>{String(getFirstElement(boolArr))}</li>
        <li>
          {userEwa.name} - {userEwa.age} lat
        </li>
        <li>
          {updateUser(userEwa, karolUser).name} - {userEwa.age} lat
        </li>
        <li>{karolUser.name}</li>
        <li>{readonlyUser.name}</li>
      </ol>
    </>
  );
}

export default Exercise4;