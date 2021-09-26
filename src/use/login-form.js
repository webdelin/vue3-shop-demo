import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import { computed, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export function useLoginForm() {
    const store = useStore()
    const router = useRouter()
    const { handleSubmit, isSubmitting, submitCount } = useForm()

    const { value: email, errorMessage: eError, handleBlur: eBlur } = useField(
        'email',
        yup
        .string()
        .trim()
        .required('Bitte geben Sie email ein')
        .email('Sie müssen eine gültige E-Mail eingeben')
    )

    const MIN_LENGTH = 6

    const { value: password, errorMessage: pError, handleBlur: pBlur } = useField(
        'password',
        yup
        .string()
        .trim()
        .required('Bitte geben Sie das Passwort ein')
        .min(MIN_LENGTH, `Das Passwort darf nicht kleiner als ${MIN_LENGTH} zeichen sein`)
    )

    const isTooManyAttempts = computed(() => submitCount.value >= 3)

    watch(isTooManyAttempts, val => {
        if (val) {
            setTimeout(() => submitCount.value = 0, 1500)
        }
    })

    const onSubmit = handleSubmit(async values => {
        try {
            await store.dispatch('auth/login', values)
            router.push({ name: 'Admin' })
        } catch (e) {}
    })

    return {
        email,
        password,
        eError,
        pError,
        eBlur,
        pBlur,
        onSubmit,
        isSubmitting,
        isTooManyAttempts
    }
}