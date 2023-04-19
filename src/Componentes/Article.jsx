// Aqui fica a logo e o site da magalu
import iconIncrivel from '/imagens/selo-incrivel.png'
import SeloVerde from '/imagens/selo-verde.png'



import LogoMagalu from "/imagens/logo-magalu.png"
import { Text, Flex, Box, Image } from '@chakra-ui/react'


function Article() {
    return (
        <div>
            <Flex mt='20px'  textAlign='center' justifyContent='center'>
                <Flex className="Article">
                    <Image src={LogoMagalu} boxSize='150px' ml='10px'></Image>
                    <Text fontSize='3xl' ml='10px' mt='40px' as='b' >magazineluiza.com.br</Text>
                    <Image w='80px' h='80px' mb='9px' mt='20px' ml='50px' src={iconIncrivel}></Image>
                    <Image w='80px'h='80px'  ml='10px' mt='17px' mb='9px' src={SeloVerde}></Image>
                </Flex>
            </Flex>
           
            
        </div>
    )
}

export default Article