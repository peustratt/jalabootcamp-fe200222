import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsers, createUser, deleteUser } from "../../services/userService";

export const userSlice = createSlice({
  name: "user",
  initialState: { users: [], status: "idle", error: null },
  reducers: {
    add: (state, users) => {
      console.log("Users inside action", users);
      state.users = state.users.concat(users.payload);
    },
    remove: (state, user) => {
      state.users = state.users.filter((u) => {
        console.log("u._id", u._id !== user.payload);
        return u._id !== user.payload;
      });
    },
    clearStatus: (state) => {
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    // loadUsersThunk
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
    // createUserThunk
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
    // deleteUserThunk
    builder.addCase(deleteUserThunk.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(deleteUserThunk.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.users = state.users.filter((user) => user._id !== action.payload);
    });
    builder.addCase(deleteUserThunk.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error;
      console.log(action)
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

export const deleteUserThunk = createAsyncThunk("users/delete", async (id) => {
  await deleteUser(id);
  return id;
});

export const selectUsers = (state) => state.users.users;
export const selectStatus = (state) => state.users.status;

export const { add, remove, clearStatus } = userSlice.actions;
export default userSlice.reducer;
