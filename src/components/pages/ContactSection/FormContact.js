import styles from './FormContact.module.css'
import Button from '../../Layouts/ButtonSection/Button'
import Title from '../../Layouts/TitleSection/Title'

function FormContact() {

    return(

        <div className={styles.form_container}>

                <Title 
                className={styles.title__form}
                titulo="Me envie uma mensagem!" />
            

                    <input 
                        className={styles.input_sec}
                        type="text" 
                        name="Seu nome"
                        placeholder="Qual o seu nome?" 
                        required
                    />

                    <input 
                         type="text" 
                         className={styles.input_sec}
                         name="Seu melhor email"
                         placeholder="Digite o seu melhor email" 
                         required
                    />  

                <textarea className={styles.input_sec} name="Textarea" placeholder="Digite aqui a sua mensagem" cols="50" rows="8" minlength="3" maxlength="500" required></textarea>

            <Button 
            name="Enviar"
            caminho=""
            />


            
        </div>
    )
}


export default FormContact