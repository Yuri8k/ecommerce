import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

export const getAllProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching all products:', error);
    throw error;
  }
};

export const getProduct = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with id ${id}:`, error);
    throw error;
  }
};