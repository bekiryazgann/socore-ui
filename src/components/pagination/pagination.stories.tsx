import type { Meta, StoryObj } from '@storybook/react-vite';

import {Pagination} from './pagination';


const meta = {
    title: '@socore/pagination',
    component: Pagination,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const clickHandle = (e) => e.preventDefault()
        return (
            <Pagination>
                <Pagination.Content>
                    <Pagination.Item>
                        <Pagination.Previous href="#" onClick={clickHandle} />
                    </Pagination.Item>
                    <Pagination.Item>
                        <Pagination.Link href="#" onClick={clickHandle}>1</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                        <Pagination.Link href="#" isActive onClick={clickHandle}>
                            2
                        </Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                        <Pagination.Link href="#" onClick={clickHandle}>3</Pagination.Link>
                    </Pagination.Item>
                    <Pagination.Item>
                        <Pagination.Ellipsis />
                    </Pagination.Item>
                    <Pagination.Item>
                        <Pagination.Next href="#" onClick={clickHandle}/>
                    </Pagination.Item>
                </Pagination.Content>
            </Pagination>
        )
    }
}