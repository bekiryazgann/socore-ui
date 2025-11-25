import type {Meta, StoryObj} from '@storybook/react-vite';

import { Button } from "../button"
import { Card } from "../card"
import { Input } from "../input"
import { Label } from "../label"
import { Tabs } from "./tabs"

const meta = {
    title: '@socore/tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    }
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="flex max-w-sm w-lg flex-col gap-6">
            <Tabs defaultValue="account">
                <Tabs.List>
                    <Tabs.Trigger value="account">Account</Tabs.Trigger>
                    <Tabs.Trigger value="password">Password</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="account">
                    <Card>
                        <Card.Header>
                            <Card.Title>Account</Card.Title>
                            <Card.Description>
                                Make changes to your account here. Click save when you&apos;re
                                done.
                            </Card.Description>
                        </Card.Header>
                        <Card.Content className="grid gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-name">Name</Label>
                                <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-username">Username</Label>
                                <Input id="tabs-demo-username" defaultValue="@peduarte" />
                            </div>
                        </Card.Content>
                        <Card.Footer>
                            <Button>Save changes</Button>
                        </Card.Footer>
                    </Card>
                </Tabs.Content>
                <Tabs.Content value="password">
                    <Card>
                        <Card.Header>
                            <Card.Title>Password</Card.Title>
                            <Card.Description>
                                Change your password here. After saving, you&apos;ll be logged
                                out.
                            </Card.Description>
                        </Card.Header>
                        <Card.Content className="grid gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-current">Current password</Label>
                                <Input id="tabs-demo-current" type="password" />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="tabs-demo-new">New password</Label>
                                <Input id="tabs-demo-new" type="password" />
                            </div>
                        </Card.Content>
                        <Card.Footer>
                            <Button>Save password</Button>
                        </Card.Footer>
                    </Card>
                </Tabs.Content>
            </Tabs>
        </div>
    )
}