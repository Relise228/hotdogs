import {createSlice} from '@reduxjs/toolkit';
import {hotAPI} from "../api/api";


export const hotdogsSlice = createSlice({
    name: 'hotdogs',
    initialState: {
        allHotdogs: [],
        loading: false,
        showModal: false,
    },
    reducers: {
        setAllHotDogs: (state, action) => {
            state.allHotdogs = action.payload;
        },
        toggleLoading: (state, action) => {
            state.loading = action.payload;
        },
        toggleModal: (state, action) => {
            state.showModal = action.payload;
        },
    },
});

export const {setAllHotDogs, toggleLoading, toggleModal} = hotdogsSlice.actions;

//Thunks
export const getAllHotDogs = () => async dispatch => {
    dispatch(toggleLoading(true));
    let data = await hotAPI.getHotDogs();
    console.log(data)
    await dispatch(setAllHotDogs(data));
    dispatch(toggleLoading(false));
};

export const updateHotDog = ({id, img, name, price, description}) => async dispatch => {
    let data = await hotAPI.updateHotDog(id, img, name, price, description);
    console.log(data);
    await dispatch(setAllHotDogs(data));
};

export const deleteHotdog = (id) => async dispatch => {
    let data = await hotAPI.deleteHotDog(id);
    console.log(data);
    await dispatch(setAllHotDogs(data));

};

export const addHotDog = ({img, name, price, description}) => async dispatch => {
    let data = await hotAPI.addHotDog(img, name, price, description);
    console.log(data);
    await dispatch(setAllHotDogs(data));
};

export default hotdogsSlice.reducer;
