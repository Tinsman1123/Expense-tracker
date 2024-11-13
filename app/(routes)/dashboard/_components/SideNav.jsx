"use client";

import React, { useState , } from "react";
import { LayoutGrid, CircleDollarSign, PiggyBank, ReceiptText, ShieldCheck, Menu, WalletMinimal } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
//use Link for crate path to navigate to page with "/...""
const SidebarLink = ({ href, icon: Icon, label, isCollapsed }) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center ${
          isCollapsed ? "justify-center py-4" : "justify-start px-8 py-4"
        }
        hover:text-blue-500 hover:bg-blue-100 gap-3 transition-colors ${
          isActive ? "bg-blue-200 text-white" : ""
        }`}
      >
        <Icon className="w-6 h-6 !text-gray-700" />
        <span
          className={`${isCollapsed ? "hidden" : "block"} font-medium text-gray-700`}
        >
          {label}
        </span>
      </div>
    </Link>
  );
};

const Sidebar = () => {
  // ใช้ useState เพื่อจัดการสถานะการพับ-ขยาย Sidebar
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const sidebarClassNames = `fixed flex flex-col ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40`;

  return (
   
    <div className={sidebarClassNames}>
      {/* Top logo */}
      <div
        className={`flex gap-4 items-center pt-8 ${
          isSidebarCollapsed ? "justify-center" : "justify-start px-8"
        }`}
      >
        
        <WalletMinimal
          className="w-5 h-10 text-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 
          stroke-current rounded-lg"
          style={{ strokeWidth: 1 }} // เพิ่มความหนาของขอบไอคอน
        />
        
        <h1 className={`${isSidebarCollapsed ? "hidden" : "block"} font-extrabold text-2xl`}>
          FinanceSmart
        </h1>
        
      </div>

      {/* Links */}
      <div className="flex-grow mt-8">
        <SidebarLink href="/dashboard" icon={LayoutGrid} label="Dashboard" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/dashboard/incomes" icon={CircleDollarSign} label="Incomes" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/dashboard/budgets" icon={PiggyBank} label="Budgets" isCollapsed={isSidebarCollapsed} />
        <SidebarLink href="/dashboard/expenses" icon={ReceiptText} label="Expenses" isCollapsed={isSidebarCollapsed} />
        
       
         
      </div>

      {/* Footer */}
      <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
        <p className="text-center text-xs text-gray-500">&copy; 2024 FinanSmart</p>
      </div>
    </div>
  
  );
};

export default Sidebar ;
