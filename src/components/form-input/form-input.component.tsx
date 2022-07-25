import { InputHTMLAttributes, FC } from 'react';

import { FormInputLabel, Input, Group } from './form-input.styles';

type FormInputProms = {
  label: string
} & InputHTMLAttributes<HTMLInputElement>

const FormInput: FC<FormInputProms> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={Boolean(otherProps.value && typeof otherProps.value === "string" && otherProps.value.length)}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
