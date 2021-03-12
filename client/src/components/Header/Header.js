import React from "react";
import styles from './Header.module.css';
import HotImg from '../../img/hot.png';
import CrudImg from '../../img/crud.png';
import Wrapper from "../Wrapper/Wrapper";
import {useDispatch} from "react-redux";
import {toggleModal} from "../../features/hotdogsSlice";

function Header() {
    const dispath = useDispatch();

    const onAdd = () => {
        dispath(toggleModal(true));
    }

    return <div className={styles.header}>
        <Wrapper>
            <div className={styles.headerWrapper}>
                <img src={HotImg} alt="fd" className={styles.headerLogo}/>
                <img src={CrudImg} alt="fd" className={styles.headerCrud}/>
                <div className={styles.buttonWrap}>
                    <button className={styles.addButton} onClick={onAdd}>Add hot-dog</button>
                </div>
            </div>
        </Wrapper>

    </div>
}

export default Header;
