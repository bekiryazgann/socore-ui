import type { Meta, StoryObj } from '@storybook/react-vite';

import {Empty} from './empty';
import { Button } from '../button';
import {ArrowUpRightIcon, FolderCode} from "lucide-react";


const meta = {
    title: '@socore/empty',
    component: Empty,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Empty>
            <Empty.Header>
                <Empty.Media variant="icon">
                    <FolderCode />
                </Empty.Media>
                <Empty.Title>No Projects Yet</Empty.Title>
                <Empty.Description>
                    You haven&apos;t created any projects yet. Get started by creating
                    your first project.
                </Empty.Description>
            </Empty.Header>
            <Empty.Content>
                <div className="flex gap-2">
                    <Button>Create Project</Button>
                    <Button variant="outline">Import Project</Button>
                </div>
            </Empty.Content>
            <Button
                variant="link"
                asChild
                className="text-muted-foreground"
                size="sm"
            >
                <a href="#">
                    Learn More <ArrowUpRightIcon />
                </a>
            </Button>
        </Empty>
    )
}