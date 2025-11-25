import type { Meta, StoryObj } from '@storybook/react-vite';

import { HoverCard } from './hover-card';
import { Button } from '../button';


const meta = {
    title: '@socore/hover-card',
    component: HoverCard,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <HoverCard>
            <HoverCard.Trigger asChild>
                <Button variant="link">@nextjs</Button>
            </HoverCard.Trigger>
            <HoverCard.Content className="w-80">
                <div className="flex justify-between gap-4">
                    <div className='w-10 h-10 bg-gray-300 rounded-full aspect-square'>

                    </div>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm">
                            The React Framework – created and maintained by @vercel.
                        </p>
                        <div className="text-muted-foreground text-xs">
                            Joined December 2021
                        </div>
                    </div>
                </div>
            </HoverCard.Content>
        </HoverCard>
    )
}