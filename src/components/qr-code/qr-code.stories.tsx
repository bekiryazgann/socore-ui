import type {Meta, StoryObj} from '@storybook/react-vite';

import {QRCode} from './qr-code';

const meta = {
    title: '@socore/qr-code',
    component: QRCode,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof QRCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 'https://netist.net',
        size: 200,
    },
    render: (args) => (
        <QRCode {...args}>
            <QRCode.Skeleton/>
            <QRCode.Canvas/>
        </QRCode>
    ),
};