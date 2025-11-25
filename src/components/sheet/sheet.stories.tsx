import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from "../button"
import { Input } from "../input"
import { Label } from "../label"
import {Sheet} from './sheet';

const meta = {
    title: '@socore/sheet',
    component: Sheet,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Sheet>
            <Sheet.Trigger asChild>
                <Button variant="outline">Open</Button>
            </Sheet.Trigger>
            <Sheet.Content>
                <Sheet.Header>
                    <Sheet.Title>Edit profile</Sheet.Title>
                    <Sheet.Description>
                        Make changes to your profile here. Click save when you&apos;re done.
                    </Sheet.Description>
                </Sheet.Header>
                <div className="grid flex-1 auto-rows-min gap-6 px-4">
                    <div className="grid gap-3">
                        <Label htmlFor="sheet-demo-name">Name</Label>
                        <Input id="sheet-demo-name" defaultValue="Pedro Duarte" />
                    </div>
                    <div className="grid gap-3">
                        <Label htmlFor="sheet-demo-username">Username</Label>
                        <Input id="sheet-demo-username" defaultValue="@peduarte" />
                    </div>
                </div>
                <Sheet.Footer>
                    <Button type="submit">Save changes</Button>
                    <Sheet.Close asChild>
                        <Button variant="outline">Close</Button>
                    </Sheet.Close>
                </Sheet.Footer>
            </Sheet.Content>
        </Sheet>
    )
}