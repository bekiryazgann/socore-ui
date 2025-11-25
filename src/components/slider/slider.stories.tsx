import type { Meta, StoryObj } from '@storybook/react-vite';

import {Slider} from './slider';

const meta = {
    title: '@socore/slider',
    component: Slider,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className='w-[800px] flex items-center justify-center'>
            <Slider
                defaultValue={[50]}
                max={100}
                step={1}
                className="w-[60%]"
            />
        </div>
    )
}