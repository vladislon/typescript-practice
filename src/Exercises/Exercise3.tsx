const name = 'James';
const age = 19;
const name2 = 'Ania';
const age2 = 24;

// Array - string[]
const nameArr: string[] = [name, name2];

// Array - Array<number>
const numberArr: Array<number> = [age, age2];
console.log(numberArr);

// Combined array
// const combinedArr: (string | number)[] = [...nameArr, ...numberArr];
const combinedArr: Array<string | number> = [...nameArr, ...numberArr];
console.log(combinedArr);

// Tuple
type StringNumberPair = [string, number];
const tupleArr: StringNumberPair = [name, age];
console.log(tupleArr);

// Obiekty
interface Address {
  country: string;
  city: string;
  street: string;
}

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  address?: Address;
}

const person: Person = {
  id: 1,
  firstName: 'Kuba',
  lastName: 'Nowak',
  age: 87,
  address: {
    country: 'Poland',
    city: 'Wrocław',
    street: 'Kolorowa',
  },
};

const person2: Person = {
  id: 2,
  firstName: name,
  lastName: 'Kowalski',
  age: age,
};

const people: Person[] = [person, person2];

function Exercise3() {
  return (
    <>
      <h2>Exercise 3</h2>
      <ol>
        {nameArr.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ol>
      <div>
        {people.map((person) => {
          const { id, firstName, lastName, age, address } = person;

          return (
            <div
              key={id}
              style={{
                background: 'white',
                color: 'black',
                borderRadius: '8px',
                padding: '8px',
                marginBottom: '8px',
              }}
            >
              <p>
                Name: {firstName} {lastName}
              </p>
              <p>Age: {age}</p>
              {address && (
                <div>
                  <p>Country: {address.country}</p>
                  <p>City: {address.city}</p>
                  <p>Street: {address.street}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Exercise3;