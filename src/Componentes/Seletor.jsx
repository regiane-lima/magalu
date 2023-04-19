import { Flex, Select, Button, ButtonGroup } from '@chakra-ui/react';

function Seletor() {
    return (
        <div>
            <Flex  mb='10px'  borderRadius='md' alignItems='center' border='1px' ml='15%' w='70px' justifyContent='center'>
                <Select placeholder='12'>
                    <option value='option1'>13</option>
                    <option value='option2'>14</option>
                    <option value='option3'>15</option>
                </Select>
            </Flex>
           
        </div>
    )
}

export default Seletor