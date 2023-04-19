import CompraAceita from '/imagens/COMPRA-ACEITA.png'
import CompraNegada from '/imagens/COMPRA-NEGADA.png'
import Sino from '/imagens/sino.png'
import { Image, Text, Center, Card, CardBody, Stack, Heading, Divider } from '@chakra-ui/react'



function Compras() {
    return (

        <div>
            <Center       gap='30px' mt='40px'>
                <Card maxW='sm' className='Card'  >
                    <CardBody >
                        <Image ml='4em' boxSize='100px' objectFit='cover' src={Sino} alt='Sino' borderRadius='lg' />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' textAlign='center'>COMPRAS NOTIFICADAS</Heading>
                            <Text textAlign='center' fontSize='4xl'>14k</Text>
                            <Text textAlign='center' as='b' fontSize='2xl'>R$ 50k</Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>
                <Card maxW='sm'>
                    <CardBody >
                        <Image ml='5em' boxSize='100px' objectFit='cover'
                            src={CompraAceita}
                            alt='Compras Reconhecidas'
                            borderRadius='lg' />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' textAlign='center'>COMPRAS RECONHECIDAS</Heading>
                            <Text textAlign='center' fontSize='4xl'> 423 </Text>
                            <Text textAlign='center' as='b' fontSize='2xl'> R$ 46K</Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>
                <Card maxW='sm'>
                    <CardBody >
                        <Image mt='5px' ml='7em' boxSize='100px' objectFit='cover'
                            src={CompraNegada}
                            alt='COMPRAS NÃO RECONHECIDAS'
                            borderRadius='lg' />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md' textAlign='center'>COMPRAS NÃO RECONHECIDAS</Heading>
                            <Text textAlign='center' fontSize='4xl'>3</Text>
                            <Text textAlign='center' as='b' fontSize='2xl'>R$ 10K</Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                </Card>
            </Center>
        </div>
    )
}
export default Compras