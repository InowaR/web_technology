const celsius = Number(prompt('Введите температуру в градусах цельсия:'));
const fahrenheit = (9 / 5) * celsius + 32;
alert(`Цельсий: ${celsius}, Фаренгейт: ${fahrenheit.toFixed(1)}`);