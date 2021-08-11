import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
export function useRequestForm(fn) {
    const { isSubmitting, handleSubmit } = useForm({
        initialValues: {
            status: 'active'
        }
    })

    const { value: name, errorMessage: errorName, handleBlur: handleName } = useField('name', yup.string().trim().required('Name darf nicht Leer sein'))
    const { value: phone, errorMessage: errorPhone, handleBlur: handlePhone } = useField('phone', yup.string().trim().required('Telefon darf nicht Leer sein'))
    const { value: amount, errorMessage: errorAmount, handleBlur: handleAmount } = useField('amount', yup.number().required('Zahl eingeben').min(0, 'Summe kann nicht weniger als 0 sein.'))
    const { value: status } = useField('status')

    const onSubmit = handleSubmit(fn)
    return {
        status,
        isSubmitting,
        onSubmit,
        name,
        errorName,
        handleName,
        phone,
        errorPhone,
        handlePhone,
        amount,
        errorAmount,
        handleAmount
    }
}