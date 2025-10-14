

export interface NavLink {
  id: number;
  label: string;
  url: string;
}

export const NavLinks: NavLink[] = [
  {
    id: 1,
    label: "Home",
    url: "/",
  },
  {
    id: 2,
    label: "About",
    url: "/about",
  },
  {
    id: 3,
    label: "Services",
    url: "/services",
  },
  {
    id: 4,
    label: "Blogs",
    url: "/blogs",
  },
  {
    id: 5,
    label: "Contacts",
    url: "/contacts",
  },
];
