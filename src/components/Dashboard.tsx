import { Button } from '@/components/ui/Button';
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu
} from '@/components/ui/DropdownMenu';
import { CardTitle, CardHeader, CardContent, Card } from '@/components/ui/Card';
import MinusIcon from '@/components/icons/MinusIcon.tsx';
import PlusIcon from '@/components/icons/PlusIcon.tsx';

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 lg:h-[60px]">
        <div className="flex-1">
          <h1 className="text-lg font-semibold">Ecosystem Dashboard</h1>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
              size="icon"
              variant="ghost"
            >
              <img
                alt="Avatar"
                className="rounded-full"
                height="32"
                src="/placeholder.svg"
                style={{
                  aspectRatio: '32/32',
                  objectFit: 'cover'
                }}
                width="32"
              />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Bear Population</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <span className="text-4xl font-semibold">250</span>
              <div className="flex gap-2">
                <Button size="icon" variant="outline">
                  <MinusIcon className="h-4 w-4" />
                  <span className="sr-only">Decrease bear population</span>
                </Button>
                <Button size="icon" variant="outline">
                  <PlusIcon className="h-4 w-4" />
                  <span className="sr-only">Increase bear population</span>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Fish Population</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <span className="text-4xl font-semibold">5000</span>
              <div className="flex gap-2">
                <Button size="icon" variant="outline">
                  <MinusIcon className="h-4 w-4" />
                  <span className="sr-only">Decrease fish population</span>
                </Button>
                <Button size="icon" variant="outline">
                  <PlusIcon className="h-4 w-4" />
                  <span className="sr-only">Increase fish population</span>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Forest Density</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <span className="text-4xl font-semibold">80%</span>
              <div className="flex gap-2">
                <Button size="icon" variant="outline">
                  <MinusIcon className="h-4 w-4" />
                  <span className="sr-only">Decrease forest density</span>
                </Button>
                <Button size="icon" variant="outline">
                  <PlusIcon className="h-4 w-4" />
                  <span className="sr-only">Increase forest density</span>
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Human Population</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <span className="text-4xl font-semibold">1500</span>
              <div className="flex gap-2">
                <Button size="icon" variant="outline">
                  <MinusIcon className="h-4 w-4" />
                  <span className="sr-only">Decrease human population</span>
                </Button>
                <Button size="icon" variant="outline">
                  <PlusIcon className="h-4 w-4" />
                  <span className="sr-only">Increase human population</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
