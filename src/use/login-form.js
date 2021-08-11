import {
    computed,
    watch
} from 'vue'
import * as yup from 'yup'
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import {
    useField,
    useForm
} from "vee-validate";
export function useLoginForm() {
    const store = useStore()
    const router = useRouter()
    const {
        handleSubmit,
        isSubmitting,
        submitCount
    } = useForm()
    const minLang = 6
    const isToMAnyAttemps = computed(() => submitCount.value >= 3)
    const {
        value: email,
        errorMessage: emailError,
        handleBlur: emailBlur,
    } = useField("email", yup.string().trim().required('Bitte email eintragen').email('Richtige Email eintragen'));
    const {
        value: password,
        errorMessage: passwordError,
        handleBlur: passwordBlur,
    } = useField("password", yup.string().trim().required('Bitte password eingeben').min(minLang, 'Password sollte mindestens ' + minLang + ' zeichen sein (' + computed(() => password) + ')'));
    watch(isToMAnyAttemps, val => {
        if (val) {
            setTimeout(() => submitCount.value = 0, 3000)
        }
    })
    const onSubmit = handleSubmit(async val => {
        try {
            await store.dispatch('auth/LOGIN', val)
            router.push('/')
        } catch (e) {

        }
    })
    return {
        email,
        emailError,
        emailBlur,
        password,
        passwordError,
        passwordBlur,
        onSubmit,
        isSubmitting,
        isToMAnyAttemps
    };
}