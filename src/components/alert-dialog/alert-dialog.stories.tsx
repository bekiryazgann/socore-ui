import type { Meta, StoryObj } from '@storybook/react-vite';

import {AlertDialog} from './alert-dialog';
import {Button} from "../button";


const meta = {
    title: '@socore/alert-dialog',
    component: AlertDialog,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className='w-lg flex items-center justify-center'>
            <AlertDialog>
                <AlertDialog.Trigger>
                    <Button>
                        Open
                    </Button>
                </AlertDialog.Trigger>
                <AlertDialog.Content>
                    <AlertDialog.Header>
                        <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
                        <AlertDialog.Description>
                            This action cannot be undone. This will permanently delete your account
                            and remove your data from our servers.
                        </AlertDialog.Description>
                    </AlertDialog.Header>
                    <AlertDialog.Footer>
                        <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                        <AlertDialog.Action>Continue</AlertDialog.Action>
                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog>
        </div>
    )
};
