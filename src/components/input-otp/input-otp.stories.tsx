import type { Meta, StoryObj } from '@storybook/react-vite';

import {
    InputOTP
} from "./input-otp"


const meta = {
    title: '@socore/input-otp',
    component: InputOTP,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof InputOTP>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <InputOTP maxLength={6}>
            <InputOTP.Group>
                <InputOTP.Slot index={0} />
                <InputOTP.Slot index={1} />
                <InputOTP.Slot index={2} />
            </InputOTP.Group>
            <InputOTP.Separator />
            <InputOTP.Group>
                <InputOTP.Slot index={3} />
                <InputOTP.Slot index={4} />
                <InputOTP.Slot index={5} />
            </InputOTP.Group>
        </InputOTP>
    )
}