import type { Meta, StoryObj } from '@storybook/react-vite';

import {Progress} from './progress';

const meta = {
    title: '@socore/progress',
    component: Progress,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className='w-[400px]'>
            <Progress value={30} />
        </div>
    )
}