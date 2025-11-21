import type { Meta, StoryObj } from '@storybook/react-vite';

import { Calendar } from './calendar';
import * as React from "react";


const meta = {
    title: '@socore/calendar',
    component: Calendar,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Calendar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [date, setDate] = React.useState<Date | undefined>(new Date())

        return (
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border shadow-sm"
                captionLayout="dropdown"
            />
        )
    }
}