import { Meta, StoryObj } from '@storybook/react';
import { EnvelopeSimple } from 'phosphor-react';
import { TextInput, InputRootProps} from './Input';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <EnvelopeSimple />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Type your e-mail address" />     
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true 
      }
    },
  }
} as Meta<InputRootProps>

export const Default: StoryObj<InputRootProps> = {}
