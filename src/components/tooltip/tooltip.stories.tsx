import type { Meta, StoryObj } from '@storybook/react-vite';

import {Tooltip} from './tooltip';
import {Button} from '../button';

const meta = {
    title: '@socore/tooltip',
    component: Button,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Tooltip>
            <Tooltip.Trigger asChild>
                <Button variant="outline">Hover</Button>
            </Tooltip.Trigger>
            <Tooltip.Content>
                <p>Add to library</p>
            </Tooltip.Content>
        </Tooltip>
    )
}