import { ChangeEvent, FormEvent, useState } from "react"

type RegexValidation<I extends RegExp> = {
  type: 'regex-validation',
  value: I,
  msg: string
}

type FunctionValidation<I> = {
  type: 'function-validation',
  f: (input?: I) => boolean,
  msg: string
}

type Validation<I> = {
  required?: {
    message: string
  },
  validator: (I extends RegExp ? RegexValidation<I> : never) | FunctionValidation<I>
}

export type Options<T extends Record<string, unknown>> = {
  validations: Partial<
    Record<
      keyof T,
      Validation<T[keyof T]>
    >
  >,
  initialValues: Partial<T>,
  onSubmit?: () => void,
}
  
type ErrorsRecord<T> = Partial<Record<keyof T, string>>;

export const useFormValidation = <T extends Record<string, unknown>>(options: Options<T>) => {
    const [data, setData] = useState<Partial<T>>(options.initialValues);
    const [errors, setErrors] = useState<ErrorsRecord<T>>({});
    
    const handleChange = (key: keyof T, sanitizeFn?: (s: string) => string) =>
    (e: ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
      setData({
        ...data,
        [key]: sanitizeFn ? sanitizeFn(e.target.value) : e.target.value
      });
    };
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const validations = options.validations;
      if (Object.keys(validations).length > 0) {
        let valid = true;
        const newErrors: ErrorsRecord<T> = {};
        for (const key in validations) {
          const value = data[key];
          const validation = validations[key];

          if (validation?.required && !value) {
            valid = false;
            newErrors[key] = validation.required.message;
          }
          
          if (validation?.validator.type === 'function-validation') {
            valid = validation.validator.f(value);
            if (!valid) newErrors[key] = validation.validator.msg;
          } else if (validation?.validator.type === 'regex-validation') {
            valid = RegExp(validation.validator.value).test(value as string || '')
            if (!valid) newErrors[key] = validation.validator.msg;
          }
        }

        if (!valid) {
          setErrors(newErrors);
          return;
        }
      }
      
      setErrors({});
      if (options.onSubmit) options.onSubmit();
    };

    return {
      data,
      handleChange,
      handleSubmit,
      errors,
    }
}
