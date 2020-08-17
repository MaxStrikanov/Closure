'use strict'

const getRandomNumber = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}
console.log(getRandomNumber(1, 100));

const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

const playAgain = () => {
  const again = confirm('Хотите сыграть еще?');

  if (again) game();

  else alert('Как хотите!')
}

const game = () => {
  const randomNum = getRandomNumber(1, 100)

  return ( function repeatGame() {

    const num = prompt ('Введите число');

    if ( isNumber(num) ) {

      let hiddenNumber = 
        ( num < randomNum ) ? alert ('Загаданное число больше'):
        ( num  > randomNum ) ? alert ('Загаданное число меньше'):
        alert ('Вы угадали!') 
        return playAgain();
        
    }
    
    repeatGame();

  })()

}

game();