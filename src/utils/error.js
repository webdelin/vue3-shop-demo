const ERROR_CODES = {
    EMAIL_NOT_FOUND: 'Email not found',
    MISSING_CUSTOM_TOKEN: 'Missing Token',
    INVALID_PASSWORD: 'Password ?',
    login: 'Bitte Einloggen'
}
export function error(code) {
    return ERROR_CODES[code] ? ERROR_CODES[code] : 'Error from utils'
}