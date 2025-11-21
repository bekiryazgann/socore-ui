import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button';


const meta = {
    title: '@socore/button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Button',
    },
};

export const Small: Story = {
    args: {
        children: 'Button',
        size: 'sm'
    },
};

export const Large: Story = {
    args: {
        children: 'Button',
        size: 'lg'
    },
};

export const Outline: Story = {
    args: {
        children: 'Button',
        variant: 'outline'
    },
};


export const Secondary: Story = {
    args: {
        children: 'Button',
        variant: 'secondary'
    },
};

export const Ghost: Story = {
    args: {
        children: 'Button',
        variant: 'ghost'
    },
};

export const Destructive: Story = {
    args: {
        children: 'Button',
        variant: 'destructive'
    },
};

export const Link: Story = {
    args: {
        children: 'Button',
        variant: 'link'
    },
};

