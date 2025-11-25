import type { Meta, StoryObj } from '@storybook/react-vite';

import {
    Sidebar
} from './sidebar';
import {Home, Inbox, Calendar, Search, Settings} from "lucide-react";

const meta = {
    title: '@socore/sidebar',
    component: Sidebar,
    tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;


const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Inbox",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Calendar",
        url: "#",
        icon: Calendar,
    },
    {
        title: "Search",
        url: "#",
        icon: Search,
    },
    {
        title: "Settings",
        url: "#",
        icon: Settings,
    },
]

export const Default: Story = {
    render: () => (
        <Sidebar.Provider>
            <Sidebar>
                <Sidebar.Header />
                <Sidebar.Content>
                    <Sidebar.Group>
                        <Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
                        <Sidebar.GroupContent>
                            <Sidebar.Menu>
                                {items.map((item) => (
                                    <Sidebar.MenuItem key={item.title}>
                                        <Sidebar.MenuButton asChild>
                                            <a href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </a>
                                        </Sidebar.MenuButton>
                                    </Sidebar.MenuItem>
                                ))}
                            </Sidebar.Menu>
                        </Sidebar.GroupContent>
                    </Sidebar.Group>
                </Sidebar.Content>
                <Sidebar.Footer />
            </Sidebar>
            <Sidebar.Inset>
                <header className="flex h-5 shrink-0 items-center gap-2 px-4">
                    <Sidebar.Trigger className="-ml-1" />
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="bg-muted/50 aspect-video rounded-xl" />
                        <div className="bg-muted/50 aspect-video rounded-xl" />
                        <div className="bg-muted/50 aspect-video rounded-xl" />
                    </div>
                    <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
                </div>
            </Sidebar.Inset>
        </Sidebar.Provider>
    )
}