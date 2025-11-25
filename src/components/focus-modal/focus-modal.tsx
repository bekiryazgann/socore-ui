import { X } from "lucide-react";
import { Dialog as RadixDialog } from "radix-ui"
import * as React from "react"

import { Button } from "../button"
import {cn} from "../../lib/utils"

/**
 * @prop defaultOpen - Whether the modal is opened by default.
 * @prop open - Whether the modal is opened.
 * @prop onOpenChange - A function to handle when the modal is opened or closed.
 */
type FocusModalRootProps = React.ComponentPropsWithoutRef<typeof RadixDialog.Root>

/**
 * This component is based on the [Radix UI Dialog](https://www.radix-ui.com/primitives/docs/components/dialog) primitives.
 */
const FocusModalRoot = (props: FocusModalRootProps) => {
    return <RadixDialog.Root {...props} />
}
FocusModalRoot.displayName = "FocusModal"

type FocusModalTriggerProps = React.ComponentPropsWithoutRef<typeof RadixDialog.Trigger>

/**
 * This component is used to create the trigger button that opens the modal.
 * It accepts props from the [Radix UI Dialog Trigger](https://www.radix-ui.com/primitives/docs/components/dialog#trigger) component.
 */
const FocusModalTrigger = React.forwardRef<
    React.ElementRef<typeof RadixDialog.Trigger>,
    FocusModalTriggerProps
>((props: FocusModalTriggerProps, ref) => {
    return <RadixDialog.Trigger ref={ref} {...props} />
})
FocusModalTrigger.displayName = "FocusModal.Trigger"

/**
 * This component is used to create the close button for the modal.
 * It accepts props from the [Radix UI Dialog Close](https://www.radix-ui.com/primitives/docs/components/dialog#close) component.
 */
const FocusModalClose = RadixDialog.Close
FocusModalClose.displayName = "FocusModal.Close"

type FocusModalPortalProps = RadixDialog.DialogPortalProps

/**
 * The `FocusModal.Content` component uses this component to wrap the modal content.
 * It accepts props from the [Radix UI Dialog Portal](https://www.radix-ui.com/primitives/docs/components/dialog#portal) component.
 */
const FocusModalPortal = (props: FocusModalPortalProps) => {
    return (
        <RadixDialog.DialogPortal {...props} />
    )
}
FocusModalPortal.displayName = "FocusModal.Portal"

/**
 * This component is used to create the overlay for the modal.
 * It accepts props from the [Radix UI Dialog Overlay](https://www.radix-ui.com/primitives/docs/components/dialog#overlay) component.
 */
const FocusModalOverlay = React.forwardRef<
    React.ElementRef<typeof RadixDialog.Overlay>,
    React.ComponentPropsWithoutRef<typeof RadixDialog.Overlay>
>(({ className, ...props }, ref) => {
    return (
        <RadixDialog.Overlay
            ref={ref}
            className={cn(
                "bg-black/50 fixed inset-0",
                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                className
            )}
            {...props}
        />
    )
})
FocusModalOverlay.displayName = "FocusModal.Overlay"

/**
 * This component wraps the content of the modal.
 * It accepts props from the [Radix UI Dialog Content](https://www.radix-ui.com/primitives/docs/components/dialog#content) component.
 */
const FocusModalContent = React.forwardRef<
    React.ElementRef<typeof RadixDialog.Content>,
    React.ComponentPropsWithoutRef<typeof RadixDialog.Content> & {
    overlayProps?: React.ComponentPropsWithoutRef<typeof FocusModalOverlay>
    portalProps?: React.ComponentPropsWithoutRef<typeof FocusModalPortal>
}
>(({ className, overlayProps, portalProps, ...props }, ref) => {
    return (
        <FocusModalPortal {...portalProps}>
            <FocusModalOverlay {...overlayProps} />
            <RadixDialog.Content
                ref={ref}
                className={cn(
                    "bg-background shadow-elevation-modal fixed inset-2 flex flex-col overflow-hidden rounded-lg border outline-none",
                    "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-0 data-[state=closed]:slide-in-from-bottom-2  duration-200",
                    className
                )}
                {...props}
            />
        </FocusModalPortal>
    )
})
FocusModalContent.displayName = "FocusModal.Content"

/**
 * This component is used to wrap the header content of the modal.
 * This component is based on the `div` element and supports all of its props
 */
const FocusModalHeader = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "border-ui-border-base flex items-center justify-between gap-x-4 border-b px-4 py-2",
                className
            )}
            {...props}
        >
            <div className="flex items-center gap-x-2">
                <RadixDialog.Close asChild>
                    <Button variant='secondary'>
                        <X />
                    </Button>
                </RadixDialog.Close>
            </div>
            {children}
        </div>
    )
})
FocusModalHeader.displayName = "FocusModal.Header"

const FocusModalFooter = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<"div">
>(({ children, className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "border-ui-border-base flex items-center justify-end gap-x-2 border-t p-4",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
})
FocusModalFooter.displayName = "FocusModal.Footer"

type FocusModalTitleProps = React.ComponentPropsWithoutRef<typeof RadixDialog.Title>

const FocusModalTitle = React.forwardRef<
    HTMLHeadingElement,
    FocusModalTitleProps
>(({...props }: FocusModalTitleProps, ref) => {
    return (
        <RadixDialog.Title ref={ref} {...props} />
    )
})
FocusModalTitle.displayName = "FocusModal.Title"

const FocusModalDescription = RadixDialog.Description
FocusModalDescription.displayName = "FocusModal.Description"

const FocusModalBody = React.forwardRef<
    HTMLDivElement,
    React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("flex-1", className)} {...props} />
})
FocusModalBody.displayName = "FocusModal.Body"

const FocusModal = Object.assign(FocusModalRoot, {
    Trigger: FocusModalTrigger,
    Title: FocusModalTitle,
    Description: FocusModalDescription,
    Content: FocusModalContent,
    Header: FocusModalHeader,
    Body: FocusModalBody,
    Close: FocusModalClose,
    Footer: FocusModalFooter,
})

export { FocusModal }