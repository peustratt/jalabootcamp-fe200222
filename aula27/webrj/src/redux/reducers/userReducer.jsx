import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, createUser } from "../../services/userService";

export const userSlice = createSlice({
  name: "user",
  initialState: { users: [], status: "idle", error: null },
  reducers: {
    add: (state, users) => {
      console.log("Users inside action", users);
      state.users = state.users.concat(users.payload);
    },
    remove: (state, user) => {
      state = state.filter((u) => u.id !== user.payload.id);
    },
    clearStatus: (state) => {
      state.status = "idle";
    }, 
  },
  extraReducers: (builder) => {
    builder.addCase(loadUsersThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(loadUsersThunk.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.users = action.payload;
    });
    builder.addCase(loadUsersThunk.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error;
    });

    builder.addCase(createUserThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(createUserThunk.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.users = state.users.concat(action.payload);
      console.log("Users inside action", action.payload);
    });
    builder.addCase(createUserThunk.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error;
    });
  },
});

// {
// Multiple possible status enum values
// status: 'idle' | 'loading' | 'succeeded' | 'failed',
// error: string | null
// type : pending | fulfilled | rejected
// }

// Alredy takes care of pending, fulfilled and rejected action types, dispensing the use o try catch to handle errors
export const loadUsersThunk = createAsyncThunk("users/load", async () => {
  const users = await getUsers();
  return users;
});

export const createUserThunk = createAsyncThunk(
  "users/create",
  async (user) => {
    const users = await createUser(user);
    return users;
  }
);

export const selectUsers = (state) => state.users.users;
export const selectStatus = (state) => state.users.status;

export const { add, remove, clearStatus } = userSlice.actions;
export default userSlice.reducer;
