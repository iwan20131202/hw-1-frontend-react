import "./App.css";

function App() {
  // Змінна з ім’ям
  const name = "Іван";

  // Дані для зображення
  const imageUrl =
    "https://cdn.pixabay.com/photo/2026/01/30/12/34/sinitsa-10093389_1280.jpg";
  const imageAlt = "Синиця біля годівниці";

  // Об’єкт із посиланням
  const favoriteSite = {
    назва_сайту: "Google",
    url: "https://www.google.com/",
  };

  // Числа та їх сума
  const num1 = 5;
  const num2 = 7;
  const sum = num1 + num2;

  // Масив кольорів
  const colors = ["Червоний", "Синій", "Зелений"];

  return (
    <div className="App">
      {/* Ім'я */}
      <h1>{name}</h1>

      {/* Вітальний текст */}
      <p>Ласкаво просимо до нашого сайту!</p>

      {/* Зображення */}
      <img src={imageUrl} alt={imageAlt} />

      {/* Посилання */}
      <p>
        Улюблений сайт:{" "}
        <a href={favoriteSite.url} target="_blank" rel="noopener noreferrer">
          {favoriteSite.назва_сайту}
        </a>
      </p>

      {/* Сума чисел */}
      <p>Сума чисел: {sum}</p>

      {/* Список кольорів */}
      <ul className="color-list">
        {colors.map((color, index) => (
          <li key={index} className="color-item" data-color={color}>
            {color}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
