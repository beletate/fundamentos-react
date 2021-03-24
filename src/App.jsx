import React from 'react'

import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'

import Card from './components/layout/Card'

import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'

import Pai from './components/comunicacao/direta/Pai'
import Super from './components/comunicacao/indireta/Super'



export default props => (
    <div className="App">

        <Card titulo="#07 - Comunicação indireta" color="#000">
            <Super></Super>
        </Card>

        <Card titulo="#07 - Comunicação direta" color="#4298B5">
            <Pai sobrenome="Freitas"></Pai>
        </Card>

        <Card titulo="#06 - Component condicional v2" color="#FA6900">
            <CondicionalComIf numero={10} />
        </Card>

        <Card titulo="#05 - Component condicional v1" color="#E94C6F">
            <Condicional numero={10} />
        </Card>

        <Card titulo="#04 - Component de repetição" color="#008BBA">
            <Repeticao />
        </Card>

        <Card titulo="#03 - Component com parametros" color="#D96459">

            <ComParametro
                titulo="Esse é o titulo"
                subtitulo="Esse é um substitulo" />
            <ComParametro
                titulo="Opa"
                subtitulo="Epa" />
        </Card>

        <Card titulo="#02 - Component com filhos" color="#FF85CB">

            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo='#01 - Primeiro Component' color="#92B06A">
            <Primeiro />
        </Card>

        <Card titulo='Exercícios X'>
            Conteudo
        </Card>


    </div>
)