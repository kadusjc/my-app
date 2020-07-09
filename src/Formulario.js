import React from 'react'
import { useForm } from 'react-hook-form'

export default function Formulario(props) {
    const { register, handleSubmit, errors } = useForm()

    const submitForm = (newAutor) => _submitForm(newAutor, props)

    return (
        <form onSubmit={handleSubmit(submitForm)} >

            <div className="row">
                <div className="input-field col s4">
                    <label htmlFor="nome">Nome</label>
                    <input
                        ref={register({ required: true, maxLength: { value: 50, message: 'Obrigatório...Maximo 50' } })}
                        id="nome"
                        type="text"
                        name="nome"
                    />
                    {errors.nome && errors.nome.type === "required" && <span>This is required</span>}
                    {errors.nome && errors.nome.type === "maxLength" && <span>Max length exceeded</span>}
                </div>

                <div className="input-field col s4">
                    <label htmlFor="livro">Livro</label>
                    <input
                        aria-invalid={errors.name ? "true" : "false"}
                        ref={register({ required: true, maxLength: { value: 50, message: 'Obrigatório...Maximo 50' } })}
                        id="livro"
                        type="text"
                        name="livro"
                    />
                    {errors.livro && errors.livro.type === "required" && <span>This is required</span>}
                    {errors.livro && errors.livro.type === "maxLength" && <span>Max length exceeded</span>}
                </div>

                <div className="input-field col s4">
                    <label htmlFor="preco">Preço</label>
                    <input
                        aria-invalid={errors.name ? "true" : "false"}
                        ref={register({ required: true, max: { value: 1000, message: 'Maximo 100' }, min: { value: 1, message: 'Minimo 1' } })}
                        id="preco"
                        type="number"
                        name="preco"
                    />
                    {errors.preco && errors.preco.type === "required" && <span>This is required</span>}
                    {errors.preco && errors.preco.type === "max" && <span>Max price exceeded</span>}
                    {errors.preco && errors.preco.type === "min" && <span>Min price is 1</span>}

                </div>

                <button className="waves-effect waves-light green lighten-1 btn" type="submit">Salvar
                </button>
            </div>
        </form>
    )
}

async function _submitForm(newAutor, props) {
    await props.adicionaAutor(newAutor)    
}