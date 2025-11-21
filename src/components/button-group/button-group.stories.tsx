import type { Meta, StoryObj } from '@storybook/react-vite';

import { ButtonGroup } from './button-group';
import { Button } from '../button';
import {ArrowLeftIcon} from "lucide-react";


const meta = {
    title: '@socore/button-group',
    component: ButtonGroup,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <ButtonGroup>
            <ButtonGroup className="hidden sm:flex">
                <Button variant="outline" size="icon" aria-label="Go Back">
                    <ArrowLeftIcon />
                </Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button variant="outline">Archive</Button>
                <Button variant="outline">Report</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button variant="outline">Snooze</Button>
            </ButtonGroup>
        </ButtonGroup>
    )
}