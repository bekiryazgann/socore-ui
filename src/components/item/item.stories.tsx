import type { Meta, StoryObj } from '@storybook/react-vite';

import {
    Item, ItemContent, ItemTitle, ItemDescription, ItemActions, ItemMedia,
} from "./item"
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
                <ItemContent>
                    <ItemTitle>Basic Item</ItemTitle>
                    <ItemDescription>
                        A simple item with title and description.
                    </ItemDescription>
                </ItemContent>
                <ItemActions>
                    <Button variant="outline" size="sm">
                        Action
                    </Button>
                </ItemActions>
            </Item>
            <Item variant="outline" size="sm" asChild>
                <a className='flex items-center gap-2 cursor-pointer'>
                    <ItemMedia>
                        <BadgeCheckIcon className="size-5" />
                    </ItemMedia>
                    <ItemContent>
                        <ItemTitle>Your profile has been verified.</ItemTitle>
                    </ItemContent>
                    <ItemActions>
                        <ChevronRightIcon className="size-4" />
                    </ItemActions>
                </a>
            </Item>
        </div>
    )
}