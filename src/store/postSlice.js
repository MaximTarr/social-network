import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const endpoint = process.env.REACT_APP_ENDPOINT || "";

const PostSlice = createSlice({
    name: "post",
    initialState: {
        
    }
})

export default PostSlice