import { useNavigate } from 'react-router-dom'

import { CheckoutForm } from './styles'

import { FormProvider, useForm } from 'react-hook-form'
/** to integrate hookform with zod */
import { zodResolver } from '@hookform/resolvers/zod'
/** to validate forms */
import zod from 'zod'

import { CoffeeItem } from './components/Cart/components/CoffeeItem'
import React, { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { DeliveryForm } from './components/DeliveryForm'
import { Cart } from './components/Cart'

const newOrderFormValidationSchema = zod.object({
  zipCode: zod.string().min(1, 'Inform a zip code'),
  street: zod.string().min(1, 'Inform a street'),
  number: zod.string().min(1, 'Inform a number'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Inform a neighborhood'),
  city: zod.string().min(1, 'Inform a city'),
  st: zod.string().min(1, 'Inform a state'),
  paymentMethod: zod.string().min(1, 'Inform a Payment Method'),
})

type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
  const { createNewOrder, handleClearCart } = useContext(CartContext)

  const navigate = useNavigate()

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      st: '',
      paymentMethod: '',
    },
  })

  const { handleSubmit, watch, reset } = newOrderForm

  const requiredData = watch([
    'zipCode',
    'street',
    'number',
    'neighborhood',
    'city',
    'st',
    'paymentMethod',
  ])

  const isSubmitDisabled = requiredData.includes('')

  function handleConfirmOrder(data: NewOrderFormData) {
    createNewOrder(data)
    reset() /** to reset the form */
    handleClearCart()
    navigate('/confirmation')
  }

  return (
    <CheckoutForm onSubmit={handleSubmit(handleConfirmOrder)}>
      <FormProvider {...newOrderForm}>
        <DeliveryForm />
      </FormProvider>

      <Cart isSubmitDisabled={isSubmitDisabled} />
    </CheckoutForm>
  )
}
