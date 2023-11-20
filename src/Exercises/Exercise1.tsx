const firstName = 'Walter';
const age = 49;
const isAdult = isAbove18(age);

const countCharacters = (word: string): number => {
    return word.split('').length;
};

const isEven = (num: number):boolean => (num % 2 === 0 ? true : false);
const getParityMessage = (isEven: boolean): string =>
isEven ? 'ta liczba jest parzysta' : 'ta liczba nie jest parzysta';
const processString = (word: string): string =>{
const wordLength = countCharacters(word);
const isWordEven = isEven(wordLength);
const parityMessage = getParityMessage(isWordEven);
return `${word}, ${wordLength}, ${parityMessage}, `
};

function isAbove18(age: number): boolean {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

/* NAPISZ 4 FUNKCJE:
1. funkcję countCharacters liczącą ilość znaków w stringu
2. funkcję isEven mówiącą czy liczba jest parzysta czy nie (zwracająca boolean)
3. funkcję getParityMessage która na podstawie boolean zwraca komunikat ta liczba jest
parzysta/ta liczba nie jest parzysta
4. funkcję processString która na podstawie stringa, wypisuje go, wypisuje liczbę jego znaków
oraz informację czy liczba znaków jest/nie jest parzysta. Funkcja ta powinna wywoływać 3
powyższe funkcje (zwraca string)
*/

    function Exercise1() {
    return (
        <>
        <h2>Exercises 1</h2>
        <ol>
            <li>{firstName}</li>
            <li>{String(isAdult)}</li>
            <li>{String(isAbove18(16))}</li>
        </ol>
        <div>
            count chars of word hello:{' '}
            <span>{countCharacters('hello')}</span>
        </div>
        <div>
            is even: <span>{String(isEven(56))}</span>
        </div>
        <div>
            parity message: <span>{getParityMessage(isEven(13))}</span>
        </div>
        <div>
            Exe 4: <span>{processString('slowo')}</span>
        </div>
        </>
    );
}

 export default Exercise1;

// # const firstName = 'Walter';
// const age = 49;
// const isAdult = isAbove18(age);

// function isAbove18(age: number): boolean {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function addTwoNumbers(a: number, b: number): number {
//   return a + b;
// }



// // /* NAPISZ 4 FUNKCJE:
// // 1. funkcję countCharacters liczącą ilość znaków w stringu
// // 2. funkcję isEven mówiącą czy liczba jest parzysta czy nie (zwracająca boolean)
// // 3. funkcję getParityMessage która na podstawie boolean zwraca komunikat:
// //  - 'ta liczba jest parzysta'
// //  - 'ta liczba nie jest parzysta'
// // 4. funkcję processString która na podstawie stringa, wypisuje go, wypisuje liczbę jego znaków oraz informację czy liczba znaków jest/nie jest parzysta. Funkcja ta powinna wywoływać 3 powyższe funkcje (zwraca string)
// // */

// function Exercise1() {
//   return (
//     <>
//       <h2>Exercise 1</h2>
//       <ol>
//         <li>{firstName}</li>
//         <li>{String(isAdult)}</li>
//         <li>{String(isAbove18(16))}</li>
//         <li>{addTwoNumbers(2, 1)}</li>
//       </ol>
//     </>
//   );
// }

// # export default Exercise1;



// ## const firstName = 'Walter';
// const age = 49;
// const isAdult = isAbove18(age);

// function isAbove18(age: number): boolean {
//   if (age >= 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function addTwoNumbers(a: number, b: number): number {
//   return a + b;
// }

// /* NAPISZ 4 FUNKCJE:
// 1. funkcję countCharacters liczącą ilość znaków w stringu
// 2. funkcję isEven mówiącą czy liczba jest parzysta czy nie (zwracająca boolean)
// 3. funkcję getParityMessage która na podstawie boolean zwraca komunikat:
//  - 'ta liczba jest parzysta'
//  - 'ta liczba nie jest parzysta'
// 4. funkcję processString która na podstawie stringa, wypisuje go, wypisuje liczbę jego znaków oraz informację czy liczba znaków jest/nie jest parzysta. Funkcja ta powinna wywoływać 3 powyższe funkcje (zwraca string)
// */

// const countCharacters = (str: string): number => str.length;
// const isEven = (num: number): boolean => num % 2 === 0;
// const getParityMessage = (isEven: boolean): string => {
//   return isEven ? 'ta liczba jest parzysta' : 'ta liczba nie jest parzysta';
// };
// const processString = (str: string): string => {
//   const strLength = countCharacters(str);
//   const isStrLengthEven = isEven(strLength);
//   const strParityMsg = getParityMessage(isStrLengthEven);

//   return `${str}. Liczba znaków: ${strLength} - ${strParityMsg}`;
// };

// function Exercise1() {
//   return (
//     <>
//       <h2>Exercise 1</h2>
//       <ol>
//         <li>{firstName}</li>
//         <li>{String(isAdult)}</li>
//         <li>{String(isAbove18(16))}</li>
//         <li>{addTwoNumbers(2, 1)}</li>
//         <li>countCharacters(Walter): {countCharacters(firstName)}</li>
//         <li>isEven(49) {String(isEven(age))}</li>
//         <li>{getParityMessage(true)}</li>
//         <li>{processString(firstName)}</li>
//       </ol>
//     </>
//   );
// }

// ## export default Exercise1;