import { Flex, Spacer, Box, Image, Text } from '@chakra-ui/react'
import logoSaida from '/imagens/saida.png'
import logoPessoa from '/imagens/pessoa.png'
import logoSino from "/imagens/notificação.png";

function Header() {

    return (
        <Flex gap='26px' p='25px' className='HeaderText'>

            <Text fontSize="larger" align='center'>Notificação de Vendas</Text>

            <Spacer />
            <Flex >
                <Image boxSize='20px' objectFit='cover' className='pessoa' src={logoPessoa} alt="Logo de uma pessoa" />
                <a href="#">Olá, João Pires</a>
            </Flex>
            <Flex mb='10px'>
                <Image boxSize='20px' objectFit='cover' className='saida' src={logoSaida} alt="Logo saida" />
                <a href="#">Sair</a>
            </Flex>
            <Flex >
                <Image boxSize='20px' objectFit='cover' src={logoSino} alt="" />
                <a href="#">Notificações</a>
            </Flex>
        </Flex>
    )
}
export default Header
