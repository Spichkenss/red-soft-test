import {ComponentProps} from "react";
import {cn} from "@/shared/lib/cn";
import styles from './Button.module.scss'

interface ButtonProps extends ComponentProps<'button'> {
}

export const Button = ({className = '', ...rest}: ButtonProps) => {
  return (
    <button
      className={cn(styles.default, className)}
      {...rest}
    />
  )
}
