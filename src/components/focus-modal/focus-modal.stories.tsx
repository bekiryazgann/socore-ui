import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "../button"
import { FocusModal } from "./focus-modal"
import {Label} from "../label";
import {Input} from "../input";

const meta: Meta<typeof FocusModal> = {
    title: "@socore/focus-modal",
    component: FocusModal,
    parameters: {
        layout: "centered",
    },
}

export default meta

type Story = StoryObj<typeof FocusModal>

export const Default: Story = {
    render: () => {
        return (
            <FocusModal>
                <FocusModal.Trigger asChild>
                    <Button>Edit Variant</Button>
                </FocusModal.Trigger>
                <FocusModal.Content>
                    <FocusModal.Header>
                        <FocusModal.Title>Edit Variant</FocusModal.Title>
                    </FocusModal.Header>
                    <FocusModal.Body className="flex flex-col items-center py-16">
                        <div className="flex w-full max-w-lg flex-col gap-y-8">
                            <div className="flex flex-col gap-y-1">
                                <h1 className="text-xl">Create API key</h1>
                                <p className="text-ui-fg-subtle">
                                    Create and manage API keys. You can create multiple keys to
                                    organize your applications.
                                </p>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <Label htmlFor="key_name" className="text-ui-fg-subtle">
                                    Key name
                                </Label>
                                <Input id="key_name" placeholder="my_app" />
                            </div>
                        </div>
                    </FocusModal.Body>
                    <FocusModal.Footer>
                        <Button>Save</Button>
                    </FocusModal.Footer>
                </FocusModal.Content>
            </FocusModal>
        )
    },
}