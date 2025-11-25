import type { Meta, StoryObj } from '@storybook/react-vite';

import { Switch } from './switch';
import { Label } from "../label";

const meta = {
    title: '@socore/switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Manage Inventory</Label>
        </div>
    )
}