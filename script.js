'use strict'

const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

const playAgain = () => {
  const again = confirm('Хотите сыграть еще?');

  if (again) game();

  else alert('Как хотите!')
}

const game = () => {

  const getRandomNumber = (min, max) => {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  const randomNum = getRandomNumber(1, 100)
  console.log(randomNum);

  return ( function repeatGame() {

    const num = prompt ('Введите число');

    if ( isNumber(num) ) {

      if ( num < randomNum ) {
        alert ('Загаданное число больше');
        
      } else if ( num  > randomNum ) {
        alert ('Загаданное число меньше');
        
      } else {
        alert ('Вы угадали!');
        return playAgain();
      }   

    }
    
    repeatGame();

  })()

}

game();
