import type { Meta, StoryObj } from '@storybook/react-vite';

import { CodeBlock } from './code-block';


const meta = {
    title: '@socore/code-block',
    component: CodeBlock,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const code = `def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

# Generate the first 10 Fibonacci numbers
for number in fibonacci(10):
    print(number)`

export const Default: Story = {
    render: () => (
        <div className="w-full max-w-3xl">
            <CodeBlock>
                <CodeBlock.Code code={code} language="python" />
            </CodeBlock>
        </div>
    )
}