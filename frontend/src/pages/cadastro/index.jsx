import { Link } from "react-router-dom"

function Cadastro() {
    return (
        <div className="mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Cadastro</h2>
            <form>
                <input placeholder="Nome" type="text"></input>
                <input placeholder="Email" type="email"></input>
                <input placeholder="Senha" type="password"></input>
                <button type="submit">Cadastrar</button>
            </form>
            <Link to="/login">Já tem uma conta? Faça login</Link>

        </div>
    )

}

export default Cadastro