import { Meta, StoryObj } from '@storybook/react';
import { Heading, HeadingProps } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum',
    size: 'md',
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<HeadingProps>

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg'
  }
}

export const Medium: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm'
  }
}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Heading with H1 tag</h1>
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
