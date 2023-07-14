import { Options } from "./useFormValidation"

const emailRegExp =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

type Registration = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string
}

const inputValidations: Options<Registration>['validations'] = {
  'firstName': {
    required: {
      message: 'A first name is requried.'
    },
    validator: {
      type: 'function-validation',
      f: (str?: string) => (!!str && str.length > 3),
      msg: 'First name must be minimum of 3 charactesr.'
    }
  },
  'lastName': {
    required: {
      message: 'A last name is requried.'
    },
    validator: {
      type: 'function-validation',
      f: (str?: string) => (!!str && str.length > 3),
      msg: 'Last name must be minimum of 3 charactesr.'
    }
  },
  'email': {
    required: {
      message: 'An email is requried.'
    },
    validator: {
      type: 'regex-validation',
      value: emailRegExp,
      msg: 'First name must be minimum of 3 charactesr.'
    }
  },
  'password': {
    required: {
      message: 'Password is requried.'
    },
    validator: {
      type: 'function-validation',
      f: (str?: string) => (!!str && str.length > 6),
      msg: 'Password ust be minimum of 6 charactesr.'
    }
  },
  // 'confirmPassword': {
  //   required: {
  //     message: 'Confirm password is requried.'
  //   },
  //   validator: {
  //     type: 'function-validation',
  //     f: (str?: string) => (!!str && str === ),
  //     msg: 'First name must be minimum of 3 charactesr.'
  //   }
  // }
}

export const FormValidation = () => {
  return (
    <div>index</div>
  )
}
