import React from 'react'
import { Input } from '@chakra-ui/react'

function InputForm({ name, value, onChange, label, placeholder}) {
  return (
    <div>
      <label htmlFor="name">{label}</label>
        <Input name={name} value={value} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

export default InputForm