const App = () => {
  const shopOwner = 'Some cool northcoder';
  const pizzas = [
    {
      name: 'Margherita',
      imageUrl:
        'https://cdn.pixabay.com/photo/2017/12/05/20/09/pizza-3000274_1280.jpg',
      orderCount: 1,
    },
    {
      name: 'Veggie',
      imageUrl:
        'https://cdn.pixabay.com/photo/2016/11/29/13/02/cheese-1869708_1280.jpg',
      orderCount: 3,
    },
    {
      name: 'Pepperoni',
      imageUrl:
        'https://cdn.pixabay.com/photo/2020/02/04/12/14/pepperoni-4818019_1280.jpg',
      orderCount: 2,
    },
  ];
  const basket = {
    Margherita: 1,
    Veggie: 3,
    Pepperoni: 2,
  };
  const todaysSpecial = 'Veggie';

  return (
    <div className="App">
      <h1>Pizza Parlour</h1>
    </div>
  );
};

export default App;

// Create your new Components here
