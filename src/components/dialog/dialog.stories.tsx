import type { Meta, StoryObj } from '@storybook/react-vite';

import { Dialog } from './dialog';
import { Button } from '../button';
import { Input } from '../input';
import { Label } from '../label';


const meta = {
    title: '@socore/dialog',
    component: Dialog,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Dialog>
            <form>
                <Dialog.Trigger asChild>
                    <Button variant="outline">Open Dialog</Button>
                </Dialog.Trigger>
                <Dialog.Content className="sm:max-w-[425px]">
                    <Dialog.Header>
                        <Dialog.Title>Edit profile</Dialog.Title>
                        <Dialog.Description>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </Dialog.Description>
                    </Dialog.Header>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name-1">Name</Label>
                            <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                        </div>
                        <div className="grid gap-3">
                            <Label htmlFor="username-1">Username</Label>
                            <Input id="username-1" name="username" defaultValue="@peduarte" />
                        </div>
                    </div>
                    <Dialog.Footer>
                        <Dialog.Close asChild>
                            <Button variant="outline">Cancel</Button>
                        </Dialog.Close>
                        <Button type="submit">Save changes</Button>
                    </Dialog.Footer>
                </Dialog.Content>
            </form>
        </Dialog>
    )
}