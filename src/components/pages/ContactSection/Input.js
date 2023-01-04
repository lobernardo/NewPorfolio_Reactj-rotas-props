import styles from './Input.module.css'



function Input({type, text, name, placeholder, handleOnChange, value}) {

    return(

        <div className={styles.input_container}>
            

            <input 
            type={text} 
            className={styles.input_sec} 
            id={name} 
            name={name}
            placeholder={placeholder} 
            onChange={handleOnChange}
            value={value}
            size="30" 
            required
            />

            
        </div>
    )
}


export default Input