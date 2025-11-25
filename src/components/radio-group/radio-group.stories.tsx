import type { Meta, StoryObj } from '@storybook/react-vite';

import {RadioGroup} from './radio-group';

import { Label } from "../label"

const meta = {
    title: '@socore/radio-group',
    component: RadioGroup,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <RadioGroup defaultValue="comfortable">
            <div className="flex items-center gap-3">
                <RadioGroup.Item value="default" id="r1" />
                <Label htmlFor="r1">Default</Label>
            </div>
            <div className="flex items-center gap-3">
                <RadioGroup.Item value="comfortable" id="r2" />
                <Label htmlFor="r2">Comfortable</Label>
            </div>
            <div className="flex items-center gap-3">
                <RadioGroup.Item value="compact" id="r3" />
                <Label htmlFor="r3">Compact</Label>
            </div>
        </RadioGroup>
    )
}