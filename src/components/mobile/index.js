import React from 'react'
import {Container,Image,Text} from './styles'
import logo from '../../logo.png';

export default function Index(){
    return(
        <Container>
            <Image src={logo}/>
            <Text>O lançamento do site será em alguns dias!!! </Text>
        </Container>
    )
}