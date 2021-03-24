import React from 'react'

import './App.css'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'

import Card from './components/layout/Card'

import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'



export default props => (
    <div className="App">

        <Card titulo="#05 - Component condicional v2">
            <CondicionalComIf numero={10} />
        </Card>

        <Card titulo="#05 - Component condicional v1">
            <Condicional numero={10} />
        </Card>

        <Card titulo="#04 - Component de repetição">
            <Repeticao />
        </Card>

        <Card titulo="#03 - Component com parametros">

            <ComParametro
                titulo="Esse é o titulo"
                subtitulo="Esse é um substitulo" />
            <ComParametro
                titulo="Opa"
                subtitulo="Epa" />
        </Card>

        <Card titulo="#02 - Component com filhos">

            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo='#01 - Primeiro Component'>
            <Primeiro />
        </Card>

        <Card titulo='Exercícios X'>
            Conteudo
        </Card>


    </div>
)