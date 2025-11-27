import type { Meta, StoryObj } from '@storybook/react-vite';

import {
    Item
} from "../item"
import { Spinner } from './spinner';

const meta = {
    title: '@socore/spinner',
    component: Spinner,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]">
            <Item variant="muted">
                <Item.Media>
                    <Spinner />
                </Item.Media>
                <Item.Content>
                    <Item.Title className="line-clamp-1">Processing payment...</Item.Title>
                </Item.Content>
                <Item.Content className="flex-none justify-end">
                    <span className="text-sm tabular-nums">$100.00</span>
                </Item.Content>
            </Item>
        </div>
    )
}