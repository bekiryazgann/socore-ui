import type { Meta, StoryObj } from '@storybook/react-vite';

import {Breadcrumb} from './breadcrumb';
import {DropdownMenu} from '../dropdown-menu'

const meta = {
    title: '@socore/breadcrumb',
    component: Breadcrumb,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Breadcrumb>
            <Breadcrumb.List>
                <Breadcrumb.Item>
                    <Breadcrumb.Link asChild>
                        <a href="/">Home</a>
                    </Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <DropdownMenu>
                        <DropdownMenu.Trigger className="flex items-center gap-1">
                            <Breadcrumb.Ellipsis className="size-4" />
                            <span className="sr-only">Toggle menu</span>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content align="start">
                            <DropdownMenu.Item>Documentation</DropdownMenu.Item>
                            <DropdownMenu.Item>Themes</DropdownMenu.Item>
                            <DropdownMenu.Item>GitHub</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Breadcrumb.Link asChild>
                        <a href="/docs/components">Components</a>
                    </Breadcrumb.Link>
                </Breadcrumb.Item>
                <Breadcrumb.Separator />
                <Breadcrumb.Item>
                    <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
                </Breadcrumb.Item>
            </Breadcrumb.List>
        </Breadcrumb>
    )
};

