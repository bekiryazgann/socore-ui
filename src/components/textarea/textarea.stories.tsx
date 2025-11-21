import type { Meta, StoryObj } from '@storybook/react-vite';

import { Textarea } from './textarea';

const meta = {
    title: '@socore/textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Textarea placeholder="Type your message here." />
    )
}