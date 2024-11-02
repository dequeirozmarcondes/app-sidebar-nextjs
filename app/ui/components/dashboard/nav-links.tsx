// app/ui/components/dashboard/NavLinks.tsx
import Link from "next/link";
import { FaChartSimple, FaCartPlus } from "react-icons/fa6";

const links = [
  { href: "/dashboard", label: "Dashboard", icon: FaChartSimple },
  { href: "/dashboard/pedidos", label: "Pagamento", icon: FaCartPlus },
  { href: "/dashboard/novo-pedido", label: "Recebimento" },
  { href: "/dashboard/fornecedores", label: "Fornecedores" },
  { href: "/dashboard/clientes", label: "Clientes" },
  { href: "/dashboard/estoque", label: "Estoque" },
  { href: "/dashboard/relatorios", label: "Relatórios" },
  { href: "/dashboard/configuracoes", label: "Configurações" },
];

export default function NavLinks() {
  return (
    <ul className="mt-4">
      {links.map((link) => {
        const Icon = link.icon; // Desestruturar o ícone

        return (
          <li
            key={link.href}
            className="py-2 hover:bg-gray-600 rounded flex items-center"
          >
            {Icon && <Icon className="mr-2" />}{" "}
            {/* Renderizar o ícone se existir */}
            <Link href={link.href} className="text-white">
              {link.label} {/* Exibir o texto do link */}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
