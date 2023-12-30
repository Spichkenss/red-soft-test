import {ComponentProps, forwardRef, memo} from "react";
import styles from './input.module.scss';
import {cn} from "../../../lib/cn";

interface InputProps extends ComponentProps<'input'> {
}

export const Input = memo(forwardRef<HTMLInputElement, InputProps>(
  ({className = '', ...rest}: InputProps, ref) => {

    return (
      <input
        ref={ref}
        className={cn(styles.input, className)}
        {...rest}
      />
    )
  }
));

Input.displayName = "Input";
