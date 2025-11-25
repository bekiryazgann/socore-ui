import type { Meta, StoryObj } from '@storybook/react-vite';

import {
    Item,
    ItemContent,
    ItemMedia,
    ItemTitle,
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
                <ItemMedia>
                    <Spinner />
                </ItemMedia>
                <ItemContent>
                    <ItemTitle className="line-clamp-1">Processing payment...</ItemTitle>
                </ItemContent>
                <ItemContent className="flex-none justify-end">
                    <span className="text-sm tabular-nums">$100.00</span>
                </ItemContent>
            </Item>
        </div>
    )
}