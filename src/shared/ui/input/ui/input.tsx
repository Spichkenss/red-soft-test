import {ComponentProps, forwardRef} from "react";
import styles from './input.module.scss';
import {cn} from "../../../lib/cn";


interface InputProps extends ComponentProps<'input'> {
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({className = '', ...rest}: InputProps, ref) => {

    return (
      <input
        ref={ref}
        className={cn(styles.input, className)}
        {...rest}
      />
    )
  }
);

Input.displayName = "Input";

export default Input
