import { useEffect, useState } from 'react';
import { fetchMeals } from '../http';
import MealItem from './MealItem';

export default function Meals() {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getMeals = async () => {
      setIsFetching(true);

      try {
        const res = await fetchMeals();
        console.log(res);
        setMeals(res);
        setIsFetching(false);
      } catch (error) {
        setError({
          message:
            error.message || 'Could not fetch places, please try again later',
        });
        setIsFetching(false);
      }
    };

    getMeals();
  }, []);

  if (error) return <p>{error.message}</p>;

  return (
    <>
      {isFetching && <p>Loding...</p>}
      {!isFetching && (
        <ul id='meals'>
          {meals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      )}
    </>
  );
}

// {
//   "id": "m2",
//   "name": "Margherita Pizza",
//   "price": "12.99",
//   "description": "A classic pizza with fresh mozzarella, tomatoes, and basil on a thin and crispy crust.",
//   "image": "images/margherita-pizza.jpg"
// }
