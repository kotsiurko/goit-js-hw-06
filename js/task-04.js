// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
// ===============================================================


let counterValue = 0;
const decrementBtnRef = document.querySelector('button[data-action="decrement"]');
const incrementBtnRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

// ================================================================
// Початково код нижче був моїй варіантом розв'язку цієї задачі:
// ================================================================

// decrementBtnRef.addEventListener("click", () => {
//     counterValue -= 1;
//     valueRef.textContent = counterValue;
// });

// incrementBtnRef.addEventListener("click", () => {
//     counterValue += 1;
//     valueRef.textContent = counterValue;
// });

// ================================================================
// Але потім наша одногрупниця Вероніка запропонувала DRY
// і мені цей варіант сподобався більше
// ================================================================

const targetButtonClickHandler = (value) => {
    counterValue += value;
    valueRef.innerHTML = counterValue;
};

incrementBtnRef.addEventListener('click', function() {targetButtonClickHandler(1)});
decrementBtnRef.addEventListener('click', function() {targetButtonClickHandler(-1)});