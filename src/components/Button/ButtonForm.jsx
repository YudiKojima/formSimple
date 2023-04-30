import React from 'react'
import { Button } from '@chakra-ui/react'

function ButtonForm({ type, onClick }) {
  return (
    <div>
        <Button type={type} onClick={onClick} colorScheme='green'>Enviar</Button>
    </div>
  )
}

export default ButtonForm