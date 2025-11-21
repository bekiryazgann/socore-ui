import type { Meta, StoryObj } from '@storybook/react-vite';

import {TooltipTrigger, TooltipContent, Tooltip} from './tooltip';
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
            <TooltipTrigger asChild>
                <Button variant="outline">Hover</Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Add to library</p>
            </TooltipContent>
        </Tooltip>
    )
}