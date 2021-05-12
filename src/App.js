const App = () => {
  const pizzas = [
    {
      name: 'Margherita',
      imageUrl:
        'https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274_1280.jpg',
    },
    {
      name: 'Veggie',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/11/29/13/02/cheese-1869708_1280.jpg',
    },
    {
      name: 'Pepperoni',
      imageUrl:
        'https://cdn.pixabay.com/photo/2020/02/04/12/14/pepperoni-4818019_1280.jpg',
    },
  ];

  return (
    <div className="App">
      <h1>NC Pizza Parlour</h1>
      <ul className="menu-list">
        {pizzas.map((pizza) => {
          return (
            <li key={pizza.name} className="menu-item">
              <img
                src={pizza.imageUrl}
                alt={pizza.name}
                className="menu-img"
              ></img>
              <p>{pizza.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;

// Create your new Components here
