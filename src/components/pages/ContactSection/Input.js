import styles from './Input.module.css'

function Enviar() {

    var name = document.getElementById("nameid");

    if (name.value != "") {
        alert('Obrigado,' + ' ' + name.value + '!' + 'A sua mensagem foi encaminhada com sucesso');
    }

}



function Input() {

    return(

        <div className={styles.input_container}>
            

            <input type="text" className={styles.input_sec} id="nameid" name="name" placeholder="Seu nome" size="30" required></input>
            <input type="email" className={styles.input_sec} name="email" placeholder="seu@email.com" size="30" required></input>

            <textarea className={styles.input_sec} name="Textarea" placeholder="Digite aqui" cols="50" rows="8" minlength="3" maxlength="500" required></textarea>

            <button 
            type="submit" 
            className={styles.btn_input} 
            onclick='Enviar();' 
            value='Enviar' >Enviar</button>.

    
            
        </div>
    )
}


export default Input