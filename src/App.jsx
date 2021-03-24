import React from 'react'

import './App.css'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'

import Card from './components/layout/Card'

export default props => (
    <div className="App">

        <Card titulo="Component com parametros">

            <ComParametro
                titulo="Esse é o titulo"
                subtitulo="Esse é um substitulo" />
            <ComParametro
                titulo="Opa"
                subtitulo="Epa" />
        </Card>
        
        <Card titulo="Component com filhos">

            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo='Primeiro Component'>
            <Primeiro />
        </Card>

        <Card titulo='Exercícios X'>
            Conteudo
        </Card>


    </div>
)