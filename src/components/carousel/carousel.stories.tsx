import type { Meta, StoryObj } from '@storybook/react-vite';

import { Card } from '../card';
import { Carousel } from './carousel';


const meta = {
    title: '@socore/carousel',
    component: Carousel,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Carousel className="w-full max-w-xs">
            <Carousel.Content>
                {Array.from({ length: 5 }).map((_, index) => (
                    <Carousel.Item key={index}>
                        <div className="p-1">
                            <Card>
                                <Card.Content className="flex aspect-square items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </Card.Content>
                            </Card>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel.Content>
            <Carousel.Previous />
            <Carousel.Next />
        </Carousel>
    )
}