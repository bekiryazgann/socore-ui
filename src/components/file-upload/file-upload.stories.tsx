import type { Meta, StoryObj } from '@storybook/react-vite';


import { Upload, X } from "lucide-react";
import * as React from "react";
import { Button } from "../button";

import {FileUpload} from './file-upload';

const meta = {
    title: '@socore/file-upload',
    component: FileUpload,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof FileUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [files, setFiles] = React.useState<File[]>([]);

        return (
            <FileUpload
                maxFiles={2}
                maxSize={5 * 1024 * 1024}
                className="w-full max-w-md"
                value={files}
                onValueChange={setFiles}
                onFileReject={() => {}}
                multiple
            >
                <FileUpload.Dropzone>
                    <div className="flex flex-col items-center gap-1 text-center">
                        <div className="flex items-center justify-center rounded-full border p-2.5">
                            <Upload className="size-6 text-muted-foreground" />
                        </div>
                        <p className="font-medium text-sm">Drag & drop files here</p>
                        <p className="text-muted-foreground text-xs">
                            Or click to browse (max 2 files, up to 5MB each)
                        </p>
                    </div>
                    <FileUpload.Trigger asChild>
                        <Button variant="outline" size="sm" className="mt-2 w-fit">
                            Browse files
                        </Button>
                    </FileUpload.Trigger>
                </FileUpload.Dropzone>
                <FileUpload.List>
                    {files.map((file, index) => (
                        <FileUpload.Item key={index} value={file}>
                            <FileUpload.ItemPreview />
                            <FileUpload.ItemMetadata />
                            <FileUpload.ItemDelete asChild>
                                <Button variant="ghost" size="icon" className="size-7">
                                    <X />
                                </Button>
                            </FileUpload.ItemDelete>
                        </FileUpload.Item>
                    ))}
                </FileUpload.List>
            </FileUpload>
        )
    }
}