import React, {memo, useState} from "react";
import styles from './Card.module.css';
import EditForm from "../EditForm/EditForm";
import {useDispatch} from "react-redux";
import {deleteHotdog, updateHotDog} from "../../features/hotdogsSlice";

const Card = React.memo(({img, name, price, description, id, disabled, setDisabled}) => {
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();

    const onSubmit = async (formData) => {
        console.log(formData);
         dispatch(updateHotDog({id, ...formData}));
        setEdit(false);
        setDisabled(false);
    };

    const onDelete = async () => {
        dispatch(deleteHotdog(id));
        setEdit(false);
        setDisabled(false);
    };


    return <div className={styles.card}>
        <div className={styles.imgWrapper}>
            <img src={img} alt="" className={styles.img}/>
        </div>
        {edit ? <EditForm onDelete={onDelete} id={id} img={img} name={name} price={price} description={description} onSubmit={onSubmit}/> : <>
            <div className={styles.name}>{name}</div>
            <div className={styles.price}>{price}$</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.buttonWrapper}><button disabled={disabled} onClick={() => {
                setEdit(true);
                setDisabled(true);
            }}  className={styles.buttonEdit}>Edit</button></div>
        </>}

    </div>
});

export default Card;
