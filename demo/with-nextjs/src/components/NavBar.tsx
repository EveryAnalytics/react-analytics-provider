import Link from 'next/link';

export const NavBar = ({href, children, onClick}: {href: string; children: React.ReactNode; onClick: () => void}) => {
  return (
    <Link href={href}>
      <button onClick={onClick}>{children}</button>
    </Link>
  );
};
