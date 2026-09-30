import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag, ChevronDown } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as Dialog from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';
import { navLinks } from '@/data/mockData';

export type NavbarProps = {
  className?: string;
};

export function Navbar({ className = '' }: NavbarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [search, setSearch] = React.useState<string>('');
  const [isMobileOpen, setIsMobileOpen] = React.useState<boolean>(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = search?.trim() ?? '';
    if (!query) return;
    navigate(`/shop?search=${encodeURIComponent(query)}`);
  };

  const isActive = (path: string) => {
    const current = location?.pathname ?? '';
    if (path === '/') return current === '/';
    return current.startsWith(path);
  };

  const coreLinks =
    navLinks?.core ?? [
      { label: 'Shop', href: '/shop' },
      { label: 'Subscribe', href: '/shop/subscribe' },
      { label: 'About', href: '/shop/about' },
    ];

  const toolLinks =
    navLinks?.tools ?? [
      { label: 'Progress', href: '/shop/progress' },
      { label: 'Programs', href: '/shop/programs' },
      { label: 'Nutrition', href: '/shop/nutrition' },
    ];

  return (
    <header
      className={cn(
        'w-full border-b border-[rgba(59,130,246,0.2)]',
        'backdrop-blur-sm sticky top-0 z-40',
        className
      )}
      style={{ backgroundColor: '#09090b', color: '#f4f4f5' }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center justify-center rounded-md p-1.5 text-zinc-300 hover:text-white md:hidden"
            onClick={() => setIsMobileOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>
          <Link to="/" className="flex items-center gap-2">
            <div
              className="h-8 w-20 rounded-md border border-[rgba(148,163,184,0.5)] bg-zinc-900/80"
              aria-label="IronPulse logo"
            />
            <span className="hidden text-sm font-semibold tracking-wide sm:inline">
              IronPulse
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-8 text-sm md:flex">
          <div className="flex items-center gap-6">
            {coreLinks?.map((link) => (
              <Link
                key={link?.href ?? ''}
                to={link?.href ?? '/'}
                className={cn(
                  'relative pb-1 transition-colors',
                  isActive(link?.href ?? '')
                    ? 'text-white'
                    : 'text-zinc-400 hover:text-zinc-100'
                )}
              >
                {link?.label ?? ''}
                <span
                  className={cn(
                    'absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-[#3b82f6] transition-opacity',
                    isActive(link?.href ?? '') ? 'opacity-100' : 'opacity-0'
                  )}
                />
              </Link>
            ))}
          </div>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button
                type="button"
                className="inline-flex items-center gap-1 rounded-full bg-zinc-900/70 px-3 py-1.5 text-xs font-medium text-zinc-200 ring-1 ring-zinc-700/80 transition hover:bg-zinc-800 hover:text-white"
              >
                IronPulse tools
                <ChevronDown className="h-3 w-3" />
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
              sideOffset={8}
              className="z-50 min-w-[180px] rounded-lg border border-[rgba(39,39,42,0.9)] bg-[#18181b] p-1.5 shadow-lg shadow-black/40"
            >
              {toolLinks?.map((tool) => (
                <DropdownMenu.Item
                  key={tool?.href ?? ''}
                  className="cursor-pointer select-none rounded-md px-2.5 py-1.5 text-xs text-zinc-200 outline-none hover:bg-zinc-800 hover:text-white"
                  onSelect={() => navigate(tool?.href ?? '/')}
                >
                  {tool?.label ?? ''}
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-3 sm:gap-4">
          <form
            onSubmit={handleSearchSubmit}
            className="hidden max-w-xs flex-1 items-center rounded-full border border-zinc-700 bg-[#18181b] px-3 py-1.5 text-xs text-zinc-200 sm:flex"
          >
            <Search className="mr-2 h-3.5 w-3.5 text-zinc-500" />
            <input
              value={search}
              onChange={(e) => setSearch(e?.target?.value ?? '')}
              placeholder="Search product"
              className="h-6 w-full bg-transparent text-xs outline-none placeholder:text-zinc-500"
            />
          </form>

          <Link
            to="/cart"
            className="relative inline-flex items-center justify-center rounded-full bg-[#3b82f6] px-3 py-1.5 text-xs font-semibold text-[#09090b] shadow-md shadow-blue-600/40 hover:bg-blue-500"
          >
            <ShoppingBag className="mr-1.5 h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
          </Link>
        </div>
      </div>

      <Dialog.Root open={isMobileOpen} onOpenChange={setIsMobileOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-40 bg-black/60" />
          <Dialog.Content
            className="fixed inset-y-0 left-0 z-50 w-72 max-w-full border-r border-[rgba(39,39,42,0.9)] bg-[#18181b] p-4 shadow-xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold tracking-wide">
                IronPulse
              </span>
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="rounded-md p-1 text-zinc-400 hover:text-zinc-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </Dialog.Close>
            </div>

            <div className="mb-4">
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center rounded-full border border-zinc-700 bg-[#09090b] px-3 py-1.5 text-xs text-zinc-200"
              >
                <Search className="mr-2 h-3.5 w-3.5 text-zinc-500" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e?.target?.value ?? '')}
                  placeholder="Search product"
                  className="h-7 w-full bg-transparent text-xs outline-none placeholder:text-zinc-500"
                />
              </form>
            </div>

            <div className="space-y-3 text-sm">
              {coreLinks?.map((link) => (
                <Link
                  key={link?.href ?? ''}
                  to={link?.href ?? '/'}
                  onClick={() => setIsMobileOpen(false)}
                  className={cn(
                    'block rounded-md px-2 py-1.5',
                    isActive(link?.href ?? '')
                      ? 'bg-[#3b82f6] text-[#09090b]'
                      : 'text-zinc-200 hover:bg-zinc-800'
                  )}
                >
                  {link?.label ?? ''}
                </Link>
              ))}
            </div>

            <div className="mt-4 border-t border-zinc-800 pt-3">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-zinc-500">
                IronPulse tools
              </p>
              <div className="space-y-2 text-sm">
                {toolLinks?.map((tool) => (
                  <button
                    key={tool?.href ?? ''}
                    type="button"
                    onClick={() => {
                      setIsMobileOpen(false);
                      navigate(tool?.href ?? '/');
                    }}
                    className="block w-full rounded-md px-2 py-1.5 text-left text-zinc-200 hover:bg-zinc-800"
                  >
                    {tool?.label ?? ''}
                  </button>
                ))}
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </header>
  );
}

export default Navbar;