import type { Meta, StoryObj } from '@storybook/react-vite';

import {Select} from './select';

const meta = {
    title: '@socore/select',
    component: Select,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Select>
            <Select.Trigger className="w-[180px]">
                <Select.Value placeholder="Select a fruit" />
            </Select.Trigger>
            <Select.Content>
                <Select.Group>
                    <Select.Label>Fruits</Select.Label>
                    <Select.Item value="apple">Apple</Select.Item>
                    <Select.Item value="banana">Banana</Select.Item>
                    <Select.Item value="blueberry">Blueberry</Select.Item>
                    <Select.Item value="grapes">Grapes</Select.Item>
                    <Select.Item value="pineapple">Pineapple</Select.Item>
                </Select.Group>
            </Select.Content>
        </Select>
    )
}