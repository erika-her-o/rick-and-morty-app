import React from 'react'

const Charecters = ({characters}) => {
    return (
        <div className="row">
            {characters.map((item, index) => (
                <div key={index} className="col mb-4">
                    <div className="card" style={{minWidth:"50px"}}>
                        <img src={item.image} alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <hr/>
                            <p>Especie: {item.species}</p>
                            <p>Genero: {item.gender}</p>
                            <p>Estado: {item.status}</p>
                            <p>Locación: {item.location.name}</p>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Charecters
