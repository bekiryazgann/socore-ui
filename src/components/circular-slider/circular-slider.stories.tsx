import type { Meta, StoryObj } from '@storybook/react-vite';

import { CircularSlider } from './circular-slider';


const meta = {
    title: '@socore/circular-slider',
    component: CircularSlider,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof CircularSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <CircularSlider defaultValue={[180]} max={360} min={0} step={20}>
            <CircularSlider.Track>
                <CircularSlider.Range />
            </CircularSlider.Track>
            <CircularSlider.Thumb />
            <CircularSlider.Value />
        </CircularSlider>
    )
}