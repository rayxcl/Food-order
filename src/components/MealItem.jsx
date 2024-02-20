const MealItem = ({ meal }) => {
  return (
    <li className='meal-item'>
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt='meal-image' />
        <h3>{meal.name}</h3>
        <div className='meal-item-actions'>
          <div className='meal-item-price'>{meal.price}</div>
          <div className='meal-item-description'>{meal.description}</div>
          <button className='button'>Add to Cart</button>
        </div>
      </article>
    </li>
  );
};

export default MealItem;

// {
//   "id": "m2",
//   "name": "Margherita Pizza",
//   "price": "12.99",
//   "description": "A classic pizza with fresh mozzarella, tomatoes, and basil on a thin and crispy crust.",
//   "image": "images/margherita-pizza.jpg"
// }
