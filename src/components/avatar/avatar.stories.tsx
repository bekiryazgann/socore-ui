import type { Meta, StoryObj } from '@storybook/react-vite';

import {Avatar} from './avatar';

const meta = {
    title: '@socore/avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="flex flex-row flex-wrap items-center gap-12">
            <Avatar>
                <Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
                <Avatar.Fallback>CN</Avatar.Fallback>
            </Avatar>
            <Avatar className="rounded-lg">
                <Avatar.Image
                    src="https://github.com/evilrabbit.png"
                    alt="@evilrabbit"
                />
                <Avatar.Fallback>ER</Avatar.Fallback>
            </Avatar>
        </div>
    )
};

