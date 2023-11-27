/* Ćwiczenie | Operacje logiczne i opcjonalność
   Napisz funkcje która na podstawie przekazanej liczby wyświetli nam informacje ile osób online.
   - nazwa funkcji: getUsersOnlineMessage
   - do funkcji moze nie byc przekazany argument, wtedy wyswietl info ze "Nikt nie jest dostępny 😭"
*/

const getUsersOnlineMessage = (num?: number): string => {
    if (!num || num <= 0) {
      return '🔴 Nikt nie jest dostępny 😭';
    }
  
    return `🟢 Jest ${num} uzytkownikow dostępnych!`;
  };
  
  // Boolean() === !!
  
  function Exercise2() {
    return (
      <>
        <h2>Exercise 2</h2>
        <li>{getUsersOnlineMessage(60)}</li>
        <li>{getUsersOnlineMessage(0)}</li>
        <li>{getUsersOnlineMessage()}</li>
        <li>{getUsersOnlineMessage(-1)}</li>
        <li>{getUsersOnlineMessage(NaN)}</li>
      </>
    );
  }
  
  export default Exercise2;

//   // Zmień argument funkcji processString na opcjonalny, w przypadku braku argumentu funkcja zwraca string 'Nie podano argumentu'.
// const processString = (str?: string): string => {
//   if (str === undefined) {
//     return 'Nie podano argumentu.';
//   }

//   const strLength = countCharacters(str);
//   const isStrLengthEven = isEven(strLength);
//   const strParityMsg = getParityMessage(isStrLengthEven);

//   return `${str}. Liczba znaków: ${strLength} - ${strParityMsg}`;
// };