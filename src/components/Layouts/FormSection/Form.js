import './style.css';



export default function Form() {

  return(
    <section>
        <form className='form__ctt'>

              <div className="form-group">
                <label className='label' for="exampleFormControlInput1">Seu email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="seu@email.com"></input>
              </div>
              
            
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Fale comigo!</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Escreva aqui sua mensagem" mailto='leo.olivbernardo@gmail.com'></textarea>
              </div>

              <button type='submit' className='btn__form'>Enviar</button>

        </form>     

    </section>
  )
}