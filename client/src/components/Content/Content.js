import React, {useState} from "react";
import styles from './Content.module.css';
import Wrapper from "../Wrapper/Wrapper";
import {useDispatch, useSelector} from "react-redux";
import Card from "../Card/Card";
import AddForm from "../AddForm/AddForm";
import {addHotDog, toggleModal} from "../../features/hotdogsSlice";

function Content() {
    const dispatch = useDispatch();
    const hotdogs = useSelector(state => state.hotdogs.allHotdogs);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const showModal = useSelector(state => state.hotdogs.showModal);

    const onAdd = async (formData) => {
        dispatch(addHotDog(formData));
        dispatch(toggleModal(false));
    }

    return <div className={styles.content}>
        <Wrapper>
            <div className={styles.title}>All hot-dogs <hr style={{marginTop: 20, opacity: 0.5}}/></div>
            <div className={styles.contentWrapper}>
                {hotdogs.map(h => <Card
                    id={h.id}
                    key={h.id}
                    img={h.img}
                    name={h.name}
                    price={h.price}
                    description={h.description}
                    disabled={buttonDisabled}
                    setDisabled={setButtonDisabled}
                />)}
            </div>
            {showModal && <div className={styles.modal}>
                <p className={styles.addTitle}>Add new hot-dog</p>
                <AddForm onSubmit={onAdd} onClose={() => dispatch(toggleModal(false))}/>
            </div>}
        </Wrapper>
    </div>
}

export default Content;
