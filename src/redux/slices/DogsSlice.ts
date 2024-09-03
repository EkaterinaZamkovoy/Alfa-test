import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/Api";


//Создадим слайс для работы с данными о собаках, который будет содержать действия для получения данных с API.

type Dog = {
  id: number;
  name: string;
  description: string;
  image: string;
  liked: boolean;
};

interface DogsState {
  dogs: Dog[];
  loading: boolean;
  error: string | null;
}

const initialState: DogsState = {
  dogs: [],
  loading: false,
  error: null,
};

// Асинхронный thunk для получения данных с API
export const fetchDogs = createAsyncThunk("dogs/fetchDogs", async () => {
  const response = await axiosInstance.get("/breeds");
  return response.data.map((dog: any) => ({
    id: dog.id,
    name: dog.name,
    description: dog.temperament || "No description available",
    image: dog.image.url,
    liked: false,
  }));
});

const dogsSlice = createSlice({
  name: "dogs",
  initialState,
  reducers: {
    toggleLike(state, action) {
      const dog = state.dogs.find((dog) => dog.id === action.payload);
      if (dog) {
        dog.liked = !dog.liked;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDogs.fulfilled, (state, action) => {
        state.loading = false;
        state.dogs = action.payload;
      })
      .addCase(fetchDogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch dogs";
      });
  },
});

export const { toggleLike } = dogsSlice.actions;
export default dogsSlice.reducer;
