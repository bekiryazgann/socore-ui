import type { Meta, StoryObj } from '@storybook/react-vite';

import { Toaster, toast} from './sonner';
import {Button} from "../button";

const meta = {
    title: '@socore/sonner',
    component: Toaster,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div>
            <Toaster />
            <Button
                variant="outline"
                onClick={() =>
                    toast("Event has been created", {
                        description: "Sunday, December 03, 2023 at 9:00 AM",
                        action: {
                            label: "Undo",
                            onClick: () => console.log("Undo"),
                        },
                    })
                }
            >
                Show Toast
            </Button>
        </div>
    )
}