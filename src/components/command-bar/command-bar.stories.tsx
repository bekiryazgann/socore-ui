import * as React from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite';

import {CommandBar} from "./command-bar"
import {Label} from '../label'
import {Checkbox} from '../checkbox'

const meta = {
    title: '@socore/command-bar',
    component: CommandBar,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof CommandBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [selected, setSelected] = React.useState<boolean>(false)

        return (
            <div className="flex justify-center gap-y-2 flex-col">
                <div className="flex items-center gap-x-2">
                    <Checkbox
                        id='checkbox'
                        checked={selected}
                        onCheckedChange={(checked) =>
                            setSelected(checked === true)
                        }
                    />
                    <Label htmlFor='checkbox'>Item One</Label>
                </div>
                <div><h3>Check the box to view the command bar</h3></div>
                <CommandBar open={selected}>
                    <CommandBar.Bar>
                        <CommandBar.Value>1 selected</CommandBar.Value>
                        <CommandBar.Separator />
                        <CommandBar.Command
                            action={() => {
                                alert("Delete")
                            }}
                            label="Delete"
                            shortcut="d"
                        />
                        <CommandBar.Separator />
                        <CommandBar.Command
                            action={() => {
                                alert("Edit")
                            }}
                            label="Edit"
                            shortcut="e"
                        />
                    </CommandBar.Bar>
                </CommandBar>
            </div>
        )
    }
}