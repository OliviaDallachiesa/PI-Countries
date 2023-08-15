import style from './CardSelected.module.css'

const CardSelected = ({name,onClose}) => {
    return(
        <div>
            <div className={style.cardCountryContainer}>
                <input className={style.btnClose} type='button' value='x' onClick={()=>onClose(name)}/>
                <span>{name}</span>
            </div>
        </div>
    )
}

export default CardSelected;