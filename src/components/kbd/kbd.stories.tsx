import type { Meta, StoryObj } from '@storybook/react-vite';

import {Kbd} from "./kbd"

const meta = {
    title: '@socore/kbd',
    component: Kbd,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="flex flex-col items-center gap-4">
            <Kbd.Group>
                <Kbd>⌘</Kbd>
                <Kbd>⇧</Kbd>
                <Kbd>⌥</Kbd>
                <Kbd>⌃</Kbd>
            </Kbd.Group>
            <Kbd.Group>
                <Kbd>Ctrl</Kbd>
                <span>+</span>
                <Kbd>B</Kbd>
            </Kbd.Group>
        </div>
    )
}