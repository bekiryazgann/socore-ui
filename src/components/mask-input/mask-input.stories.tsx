import type { Meta, StoryObj } from '@storybook/react-vite';

import {MaskInput} from "./mask-input"
import {Label} from '../label'

const meta = {
    title: '@socore/mask-input',
    component: MaskInput,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof MaskInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="flex items-start w-2xl gap-6">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <Label htmlFor={`phone`}>Phone number</Label>
                    <MaskInput
                        id={`phone`}
                        mask="phone"
                        placeholder="Enter your phone number"
                    />
                    <p className="text-muted-foreground text-sm">
                        Enter your phone number with area code
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor={`date`}>Birth date</Label>
                    <MaskInput
                        id={`date`}
                        mask="date"
                        placeholder="Enter your birth date"
                    />
                    <p className="text-muted-foreground text-sm">Enter your birth date</p>
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor={`dollar`}>Currency</Label>
                    <MaskInput
                        id={`dollar`}
                        mask="currency"
                        placeholder="$0.00"
                    />
                    <p className="text-muted-foreground text-sm">Enter your currency</p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <Label htmlFor={`euro`}>Currency (German)</Label>
                    <MaskInput
                        id={`euro`}
                        mask="currency"
                        currency="EUR"
                        locale="de-DE"
                        placeholder="0,00 €"
                    />
                    <p className="text-muted-foreground text-sm">Enter your currency</p>
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor={`creditCard`}>Credit card</Label>
                    <MaskInput
                        id={`creditCard`}
                        mask="creditCard"
                        placeholder="Enter your credit card number"
                    />
                    <p className="text-muted-foreground text-sm">
                        Enter your credit card number
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor={`percentage`}>Percentage</Label>
                    <MaskInput
                        id={`percentage`}
                        mask="percentage"
                        placeholder="0.00%"
                        min={0}
                        max={100}
                    />
                    <p className="text-muted-foreground text-sm">Enter a percentage</p>
                </div>
            </div>
        </div>
    )
}