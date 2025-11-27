import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconCheck, IconInfoCircle, IconPlus } from "@tabler/icons-react"
import { ArrowUpIcon, Search } from "lucide-react"

import {DropdownMenu} from "../dropdown-menu"
import {InputGroup} from "./input-group"
import { Separator } from "../separator"
import { Tooltip } from "../tooltip"


const meta = {
    title: '@socore/input-group',
    component: InputGroup,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="grid w-full max-w-sm gap-6">
            <InputGroup>
                <InputGroup.Input placeholder="Search..." />
                <InputGroup.Addon>
                    <Search />
                </InputGroup.Addon>
                <InputGroup.Addon align="inline-end">12 results</InputGroup.Addon>
            </InputGroup>
            <InputGroup>
                <InputGroup.Input placeholder="example.com" className="!pl-1" />
                <InputGroup.Addon>
                    <InputGroup.Text>https://</InputGroup.Text>
                </InputGroup.Addon>
                <InputGroup.Addon align="inline-end">
                    <Tooltip>
                        <Tooltip.Trigger asChild>
                            <InputGroup.Button className="rounded-full" size="icon-xs">
                                <IconInfoCircle />
                            </InputGroup.Button>
                        </Tooltip.Trigger>
                        <Tooltip.Content>This is content in a tooltip.</Tooltip.Content>
                    </Tooltip>
                </InputGroup.Addon>
            </InputGroup>
            <InputGroup>
                <InputGroup.Textarea placeholder="Ask, Search or Chat..." />
                <InputGroup.Addon align="block-end">
                    <InputGroup.Button
                        variant="outline"
                        className="rounded-full"
                        size="icon-xs"
                    >
                        <IconPlus />
                    </InputGroup.Button>
                    <DropdownMenu>
                        <DropdownMenu.Trigger asChild>
                            <InputGroup.Button variant="ghost">Auto</InputGroup.Button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Content
                            side="top"
                            align="start"
                            className="[--radius:0.95rem]"
                        >
                            <DropdownMenu.Item>Auto</DropdownMenu.Item>
                            <DropdownMenu.Item>Agent</DropdownMenu.Item>
                            <DropdownMenu.Item>Manual</DropdownMenu.Item>
                        </DropdownMenu.Content>
                    </DropdownMenu>
                    <InputGroup.Text className="ml-auto">52% used</InputGroup.Text>
                    <Separator orientation="vertical" className="!h-4" />
                    <InputGroup.Button
                        variant="default"
                        className="rounded-full"
                        size="icon-xs"
                        disabled
                    >
                        <ArrowUpIcon />
                        <span className="sr-only">Send</span>
                    </InputGroup.Button>
                </InputGroup.Addon>
            </InputGroup>
            <InputGroup>
                <InputGroup.Input placeholder="@shadcn" />
                <InputGroup.Addon align="inline-end">
                    <div className="bg-primary text-primary-foreground flex size-4 items-center justify-center rounded-full">
                        <IconCheck className="size-3" />
                    </div>
                </InputGroup.Addon>
            </InputGroup>
        </div>
    )
}