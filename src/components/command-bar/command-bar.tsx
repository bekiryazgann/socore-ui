"use client"

import { Popover, Portal } from "radix-ui"
import * as React from "react"

import { Kbd } from "../kbd"
import { cn, isInputElement } from "../../lib/utils"

interface CommandBarProps extends React.PropsWithChildren {
    open?: boolean
    onOpenChange?: (open: boolean) => void
    defaultOpen?: boolean
    disableAutoFocus?: boolean
}

const Root = ({
                  open = false,
                  onOpenChange,
                  defaultOpen = false,
                  disableAutoFocus = true,
                  children,
              }: CommandBarProps) => {
    return (
        <Popover.Root open={open} onOpenChange={onOpenChange} defaultOpen={defaultOpen}>
            <Portal.Root>
                <Popover.Anchor className={cn("fixed bottom-8 left-1/2 h-px w-px -translate-x-1/2")} />
            </Portal.Root>

            <Popover.Portal>
                <Popover.Content
                    side="top"
                    sideOffset={0}
                    onOpenAutoFocus={(e) => disableAutoFocus && e.preventDefault()}
                    className={cn(
                        "data-[state=open]:animate-in data-[state=closed]:animate-out",
                        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
                        "data-[side=bottom]:slide-in-from-top-2",
                        "data-[side=left]:slide-in-from-right-2",
                        "data-[side=right]:slide-in-from-left-2",
                        "data-[side=top]:slide-in-from-bottom-2",
                        "bg-popover text-popover-foreground"
                    )}
                >
                    {children}
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    )
}

const Value = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn("text-card-foreground px-3 py-2.5 text-sm", className)}
                {...props}
            />
        )
    }
)

const Bar = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<"div">>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "bg-card relative flex items-center overflow-hidden rounded-full px-1 border border-border",
                    "after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:content-[''] after:shadow-sm",
                    className
                )}
                {...props}
            />
        )
    }
)

const Separator = React.forwardRef<
    HTMLDivElement,
    Omit<React.ComponentPropsWithoutRef<"div">, "children">
>(({ className, ...props }, ref) => {
    return <div ref={ref} className={cn("bg-border h-10 w-px", className)} {...props} />
})

interface CommandProps
    extends Omit<React.ComponentPropsWithoutRef<"button">, "children" | "onClick"> {
    action: () => void | Promise<void>
    label: string
    shortcut: string
}

const Command = React.forwardRef<HTMLButtonElement, CommandProps>(
    ({ className, type = "button", label, action, shortcut, disabled, ...props }, ref) => {
        React.useEffect(() => {
            const handleKeyDown = (event: KeyboardEvent) => {
                if (isInputElement(document.activeElement)) return
                if (event.key.toLowerCase() === shortcut.toLowerCase()) {
                    event.preventDefault()
                    event.stopPropagation()
                    action()
                }
            }

            if (!disabled) document.addEventListener("keydown", handleKeyDown)
            return () => document.removeEventListener("keydown", handleKeyDown)
        }, [action, shortcut, disabled])

        return (
            <button
                ref={ref}
                type={type}
                onClick={action}
                disabled={disabled}
                className={cn(
                    "flex items-center gap-x-2 px-3 py-2.5 text-sm cursor-pointer",
                    "bg-secondary text-secondary-foreground",
                    "transition-colors duration-250",
                    "hover:bg-secondary/40 active:bg-secondary/80",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "last-of-type:-mr-1 last-of-type:pr-4",
                    className
                )}
                {...props}
            >
                <span>{label}</span>

                <Kbd className="bg-muted border border-border text-muted-foreground">
                    {shortcut.toUpperCase()}
                </Kbd>
            </button>
        )
    }
)

const CommandBar = Object.assign(Root, {
    Command,
    Value,
    Bar,
    Separator,
})

export { CommandBar }
