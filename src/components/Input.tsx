import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface InputRootProps {
  children: ReactNode;
}

export interface InputIconProps {
  children: ReactNode;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function InputRoot({ children }: InputRootProps) {
  return (
    <div className="flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full h-12 focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  )
}

InputRoot.displayName = 'Root';

function InputIcon({ children }: InputIconProps) {
  return (
    <Slot className="w-6 h-6 text-gray-400">
      {children}
    </Slot>
  )
}

InputIcon.displayName = 'Icon';

function Input(props: InputProps) {
  return (   
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  )
}

export const TextInput = {
  Root: InputRoot,
  Input: Input,
  Icon: InputIcon,
}
