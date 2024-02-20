export const fetchMeals = async () => {
  const res = await fetch('http://localhost:3000/meals');
  const resData = await res.json();

  if (!res.ok) {
    throw new Error('Failed to fetch meals data');
  }

  return resData;
};

export const fetchUserMeals = async () => {};

export const updateUserMeals = async () => {};
