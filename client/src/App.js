import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {getAllHotDogs} from "./features/hotdogsSlice";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import Content from "./components/Content/Content";

function App() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.hotdogs.loading);

    useEffect(() => {
        dispatch(getAllHotDogs());
    }, [])

    return (
        <div className="app">
            <Header/>
            {loading ? <Loader/> : <Content/>}
        </div>
    );
}

export default App;
