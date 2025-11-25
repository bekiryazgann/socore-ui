import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from './card';
import { Label } from '../label';
import { Button } from '../button';
import { Input } from '../input';


const meta = {
    title: '@socore/card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Card className="w-sm">
            <Card.Header>
                <Card.Title>Login to your account</Card.Title>
                <Card.Description>
                    Enter your email below to login to your account
                </Card.Description>
                <Card.Action>
                    <Button variant="link">Sign Up</Button>
                </Card.Action>
            </Card.Header>
            <Card.Content>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                                <a
                                    href="#"
                                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                            <Input id="password" type="password" required />
                        </div>
                    </div>
                </form>
            </Card.Content>
            <Card.Footer className="flex-col gap-2">
                <Button type="submit" className="w-full">
                    Login
                </Button>
                <Button variant="outline" className="w-full">
                    Login with Google
                </Button>
            </Card.Footer>
        </Card>
    )
}