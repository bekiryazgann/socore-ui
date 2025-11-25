import type { Meta, StoryObj } from '@storybook/react-vite';

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from './pagination';


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
        const clickHandle = (e) => e.preventDefault()
        return (
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" onClick={clickHandle} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" onClick={clickHandle}>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive onClick={clickHandle}>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" onClick={clickHandle}>3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" onClick={clickHandle}/>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        )
    }
}