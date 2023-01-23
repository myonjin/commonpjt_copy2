import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const action = {
  getEmployees: createAsyncThunk("GET/EMPLOYEES", async () => {
    return axios({
      method: "get",
      url: "https://dummy.restapiexample.com/api/v1/employees"
    }).then(response => response.data);
  }),
};

const initialState = {
  employees: [],
}

export const reducer = {
  getEmployees: (state, action) => {
    state.getEmployees = action.payload.data;
  }
};

const employeeReducer = createReducer(initialState, builder => {
  builder.addCase(action.getEmployees.fulfilled, reducer.getEmployees)
});

export default employeeReducer;