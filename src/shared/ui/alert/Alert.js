import styles from './Alert.module.scss';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

const Alert = (props) => {

    const isAlertOpen = useSelector(state => state.alert.isAlertOpen);
    const alertTitle = useSelector(state => state.alert.title);
    const alertInstructions = useSelector(state => state.alert.instructions);
    const dispatch = useDispatch();

    const closeAlert = () => {
        dispatch({type : 'HIDE_ALERT'})
    }

    return createPortal(
        <div className={styles.overly} onClick={closeAlert} style={{display: isAlertOpen ? 'flex' : 'none'}}>
            <div className={styles.box}>
                <div>
                    <h2>{alertTitle}</h2>
                    <h4>{alertInstructions}</h4>
                </div>
                <button onClick={closeAlert}>zamknij</button>
            </div>
        </div>,
        document.getElementById("portal")
    )
}

export default Alert