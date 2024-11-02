"use client";

import Link from "next/link";
import {
  FaChartSimple,
  FaBagShopping,
  FaPeopleGroup,
  FaShop,
  FaPeopleArrows,
  FaBoxOpen,
  FaBookOpen,
} from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: FaChartSimple },
  { href: "/dashboard/invoicing", label: "Faturamento", icon: FaBagShopping },
  { href: "/dashboard/customers", label: "Clientes", icon: FaPeopleGroup },
  { href: "/dashboard/shopping", label: "Compras", icon: FaShop },
  { href: "/dashboard/supplier", label: "Fornecedores", icon: FaPeopleArrows },
  { href: "/dashboard/stock", label: "Estoque", icon: FaBoxOpen },
  { href: "/dashboard/reports", label: "Relatórios", icon: FaBookOpen },
  {
    href: "/dashboard/settings",
    label: "Configurações",
    icon: IoSettingsSharp,
  },
];

export default function NavLinks({ collapsed }: { collapsed: boolean }) {
  const pathname = usePathname();

  return (
    <ul className="mt-8">
      {links.map((link) => {
        const Icon = link.icon;
        const isActive = pathname === link.href;

        return (
          <li key={link.href} className="mb-2">
            {" "}
            {/* Adicionando um espaçamento inferior aos itens da lista */}
            <Link
              href={link.href}
              className={clsx(
                "flex items-center p-2 rounded transition-all duration-300 ease-in-out",
                {
                  "bg-gray-600": isActive,
                  "hover:bg-gray-700": !isActive,
                }
              )}
            >
              <Icon
                className={clsx(
                  "transition-transform duration-300 ease-in-out",
                  {
                    "text-teal-400": isActive,
                    "text-white": !isActive,
                    "mr-0": collapsed,
                    "mr-2": !collapsed,
                  }
                )}
                size={24}
              />
              <span
                className={clsx(
                  "text-sm font-normal transition-all duration-300 ease-in-out origin-left",
                  {
                    "opacity-0 overflow-hidden w-0": collapsed,
                    "opacity-100 w-auto": !collapsed,
                    "text-teal-400": isActive,
                    "text-white": !isActive,
                  }
                )}
              >
                {link.label}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
