import { SkullIcon } from './icons';
  import Link from 'next/link';
  // Map of links to display in the side navigation.
  // Depending on the size of the application, this would be stored in a database.
  const links = [
    { name: 'Undead Unrest', href: '/Games/UndeadUnrest', icon: SkullIcon },
    { name: 'Bubble Brawl', href: '/Games/BubbleBrawl', icon: SkullIcon },
    /*
    {
      name: 'Invoices',
      href: '/dashboard/invoices',
      icon: DocumentDuplicateIcon,
    },
    { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
     */
  ];
  
  export default function NavLinks() {
    return (
      <>
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-primary-50 p-3 text-sm font-medium hover:bg-primary-100 hover:text-secondary-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <LinkIcon className="w-6 text-primary-600" />
              <p className="hidden md:block text-secondary-600">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }
  