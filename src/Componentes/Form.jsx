import DedoCima from "/imagens/dedo-pra-cima.png"
import DedoBaixo from "/imagens/dedo-pra-baixo.png"
import {
    Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer, Image
} from '@chakra-ui/react'

function Form() {
    return (
        <div className="caixaForm">
            <TableContainer ml='14%' w='70%'   colorScheme="gray" >
                <Table border='none' mt='37px' size='sm' variant='striped' >
                    <TableCaption>Dados</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Datas</Th>
                            <Th>Nome</Th>
                            <Th isNumeric>Número do pedido</Th>
                            <Th isNumeric>Valor</Th>
                            <Th>FeedBack</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>12/01/2019</Td>
                            <Td>Matheus Henrique Lopes</Td>
                            <Td isNumeric>#1212121212</Td>
                            <Td isNumeric>R$ 1.210,00 </Td>
                            <Td><Image boxSize='50px' objectFit='cover' src={DedoCima} alt="Dedo pra Cima" /></Td>

                        </Tr>
                        <Tr>
                            <Td>12/01/2019</Td>
                            <Td>Matheus Henrique Lopes</Td>
                            <Td isNumeric>#1212121212</Td>
                            <Td isNumeric>R$ 1.210,00 </Td>
                            <Td><Image boxSize='50px' objectFit='cover'  src={DedoBaixo} alt="" /></Td>
                        </Tr>
                        <Tr>
                            <Td>12/01/2019</Td>
                            <Td>Matheus Henrique Lopes</Td>
                            <Td isNumeric>#1212121212</Td>
                            <Td isNumeric>R$ 1.210,00 </Td>
                            <Td><Image boxSize='50px' objectFit='cover'   src={DedoCima} alt="" /></Td>
                        </Tr>
                        <Td>12/01/2019</Td>
                        <Td>Matheus Henrique Lopes</Td>
                        <Td isNumeric>#1212121212</Td>
                        <Td isNumeric>R$ 1.210,00 </Td>
                        <Td><Image boxSize='50px' objectFit='cover' src={DedoBaixo} alt="Dedo pra baixo" /></Td>

                    </Tbody>
                    <Tfoot>
                        <Tr>
                            <Td>12/01/2019</Td>
                            <Td>Matheus Henrique Lopes</Td>
                            <Td isNumeric>#1212121212</Td>
                            <Td isNumeric>R$ 1.210,00 </Td>
                            <Td><Image  boxSize='50px' objectFit='cover'  src={DedoCima} alt="Dedo pra cima" /></Td>
                        </Tr>
                    </Tfoot>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Form