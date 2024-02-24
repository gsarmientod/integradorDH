import React from 'react'
import { BiSearch } from 'react-icons/bi';
const Buscador = () => {
    return (
        <><div className='container-buscador'>
            <h1 className='titulo-slogan'>Encontrá la bicicleta ideal para cada viaje</h1>
            <form className='form-buscador'>
                <label htmlFor="buscador"></label>
                <div className="search-container">
                    <BiSearch className="search-icon" />
                    <input className="forms-busca-tu-bici"
                        type="text"
                        placeholder="Buscá tu bicicleta favorita"
                        id="nombre"
                    />
                </div>
            </form>
        </div>
        </>
    )
}

export default Buscador