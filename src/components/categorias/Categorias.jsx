import React from 'react'

const Categorias = () => {

    const categorias = [
        {
            nombre: 'CATEGORIA 1',
            imgCategoria: 'https://img.freepik.com/fotos-premium/icono-blanco-negro-bicicleta-moderna-sombra_1057389-35988.jpg?w=740'
        },
        {
            nombre: 'CATEGORIA 2',
            imgCategoria: 'https://img.freepik.com/fotos-premium/icono-blanco-negro-bicicleta-moderna-sombra_1057389-35988.jpg?w=740'
        },
        {
            nombre: 'CATEGORIA 3',
            imgCategoria: 'https://img.freepik.com/fotos-premium/icono-blanco-negro-bicicleta-moderna-sombra_1057389-35988.jpg?w=740'
        },
       

    ]

    return (
        <>
            <h3 className='titulos'>Categorias</h3>
            <div className='categorias-conteiner'>

                {categorias.map((categoria, index) => (
                    <article className='card-categoria' key={index}>
                        <img className='img-categoria' src={categoria.imgCategoria} alt={categoria.nombre} />
                        <span className='nombre-categoria'>{categoria.nombre}</span>
                    </article>
                ))}

            </div>
        </>
    )
}

export default Categorias