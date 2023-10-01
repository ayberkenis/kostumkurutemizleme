import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, usePage } from "@inertiajs/react";

function SidebarItem({ href, title, icon }) {
  const currentUrl = usePage().url;
  return (
    <li
      className={`px-3 py-2 rounded-sm hover:bg-zinc-900 p-4 ${
        currentUrl === href ? "mx-2 bg-zinc-500" : ""
      }`}
    >
      <Link href={href} className="block text-gray-200 hover:text-white">
        <div className="flex items-center flex-grow">
          <div className="flex items-center justify-start gap-4 hover:gap-6 flex-grow ease-in-out transition-all duration-200">
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            <span className="text-sm font-medium">{title}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default SidebarItem;
