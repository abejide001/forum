import { UsernamePasswordInput } from './../resolvers/UsernamePasswordInput';
export const validateRegister = (data: UsernamePasswordInput) => {
    if (data.username.length <= 2) {
        return [{
            field: 'username',
            message: 'length must be greater than 2'
        }]
    }

    if (data.email.length <= 2) {
        return [{
            field: 'email',
            message: 'length must be greater than 2'
        }]
    }

    if (data.password.length <= 2) {
        return [{
            field: 'password',
            message: 'length must be greater than 2'
        }]
    }

    return null
}