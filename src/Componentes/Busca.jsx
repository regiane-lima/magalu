import { Input, Flex, Button, ButtonGroup, Box } from '@chakra-ui/react'
function Busca() {
    return (
        <div>
            <Flex mt='6em' w='500px' ml='25em' >
                <Input border='1px' textAlign='center' textColor='black' placeholder='Buscar usuário ou n° do pedido' size='lg' />
                <Button p='24px' ml='40px' colorScheme='blue' variant='outline'>Buscar</Button>
            </Flex>
        </div>
    )
}

export default Busca