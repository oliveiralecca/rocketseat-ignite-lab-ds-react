import { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum.',
    size: 'md',
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
}

export const Medium: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Text with P tag</p>
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true 
      }
    },
    asChild: {
      table: {
        disable: true 
      }
    }
  }
}
