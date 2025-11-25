import type { Meta, StoryObj } from '@storybook/react-vite';

import {Item} from "./item"
import {Button} from "../button";
import {BadgeCheckIcon, ChevronRightIcon} from "lucide-react";


const meta = {
    title: '@socore/item',
    component: Item,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="flex w-full max-w-md flex-col gap-6">
            <Item variant="outline">
                <Item.Content>
                    <Item.Title>Basic Item</Item.Title>
                    <Item.Description>
                        A simple item with title and description.
                    </Item.Description>
                </Item.Content>
                <Item.Actions>
                    <Button variant="outline" size="sm">
                        Action
                    </Button>
                </Item.Actions>
            </Item>
            <Item variant="outline" size="sm" asChild>
                <a className='flex items-center gap-2 cursor-pointer'>
                    <Item.Media>
                        <BadgeCheckIcon className="size-5" />
                    </Item.Media>
                    <Item.Content>
                        <Item.Title>Your profile has been verified.</Item.Title>
                    </Item.Content>
                    <Item.Actions>
                        <ChevronRightIcon className="size-4" />
                    </Item.Actions>
                </a>
            </Item>
        </div>
    )
}