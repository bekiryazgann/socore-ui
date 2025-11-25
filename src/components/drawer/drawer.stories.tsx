import type { Meta, StoryObj } from '@storybook/react-vite';

import { Drawer } from './drawer';
import { Button } from '../button';
import {Minus, Plus} from "lucide-react";


const meta = {
    title: '@socore/drawer',
    component: Drawer,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Drawer>
            <Drawer.Trigger asChild>
                <Button variant="outline">Open Drawer</Button>
            </Drawer.Trigger>
            <Drawer.Content>
                <div className="mx-auto w-full max-w-sm">
                    <Drawer.Header>
                        <Drawer.Title>Move Goal</Drawer.Title>
                        <Drawer.Description>Set your daily activity goal.</Drawer.Description>
                    </Drawer.Header>
                    <div className="p-4 pb-0">
                        <div className="flex items-center justify-center space-x-2">
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 shrink-0 rounded-full"
                            >
                                <Minus />
                                <span className="sr-only">Decrease</span>
                            </Button>
                            <div className="flex-1 text-center">
                                <div className="text-7xl font-bold tracking-tighter">
                                    20
                                </div>
                                <div className="text-muted-foreground text-[0.70rem] uppercase">
                                    Calories/day
                                </div>
                            </div>
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 shrink-0 rounded-full"
                            >
                                <Plus />
                                <span className="sr-only">Increase</span>
                            </Button>
                        </div>
                    </div>
                    <Drawer.Footer>
                        <Button>Submit</Button>
                        <Drawer.Close asChild>
                            <Button variant="outline">Cancel</Button>
                        </Drawer.Close>
                    </Drawer.Footer>
                </div>
            </Drawer.Content>
        </Drawer>
    )
}