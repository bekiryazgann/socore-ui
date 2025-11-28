import type { Meta, StoryObj } from '@storybook/react-vite';

import { ColorPicker } from './color-picker';

const meta = {
    title: '@socore/color-picker',
    component: ColorPicker,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <ColorPicker defaultFormat="hex" defaultValue="#3b82f6">
            <ColorPicker.Trigger asChild>
                <ColorPicker.Swatch />
            </ColorPicker.Trigger>
            <ColorPicker.Content>
                <ColorPicker.Area />
                <div className="flex items-center gap-2">
                    <ColorPicker.EyeDropper />
                    <div className="flex flex-1 flex-col gap-2">
                        <ColorPicker.HueSlider />
                        <ColorPicker.AlphaSlider />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <ColorPicker.FormatSelect />
                    <ColorPicker.Input />
                </div>
            </ColorPicker.Content>
        </ColorPicker>
    )
}