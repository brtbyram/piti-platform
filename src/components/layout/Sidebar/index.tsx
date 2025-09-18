"use client";

import {
  BellRing,
  Calendar,
  ChartNoAxesCombined,
  ChevronRight,
  CircleUser,
  LogOut,
  Logs,
  MessageCircle,
  Package,
  Receipt,
  Settings,
  SquareKanban,
  Store,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "../../../../public/Icons";
import { useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  console.log("Current Pathname:", pathname);

  const userRole = "student"; // This should be dynamically set based on the user's role

  const links = [
    {
      href: "/trainer",
      label: "Dashboard",
      icon: SquareKanban,
      role: "trainer",
    },
    {
      href: "/trainer/students",
      label: "Students",
      icon: ChartNoAxesCombined,
      role: "trainer",
    },
    {
      href: "/trainer/workouts",
      label: "Workouts",
      icon: SquareKanban,
      role: "trainer",
    },
    {
      href: "/trainer/nutrition",
      label: "Nutrition",
      icon: SquareKanban,
      role: "trainer",
    },
    {
      href: "/trainer/exercises",
      label: "Exercises",
      icon: Logs,
      role: "trainer",
    },
    {
      href: "/trainer/packages",
      label: "Packages",
      icon: Package,
      role: "trainer",
    },
    {
      href: "/trainer/calendar",
      label: "Calendar",
      icon: Calendar,
      role: "trainer",
    },
    {
      href: "/trainer/payments",
      label: "Invoices",
      icon: Receipt,
      role: "trainer",
    },
    {
      href: "/trainer/notifications",
      label: "Notifications",
      icon: BellRing,
      role: "trainer",
    },
    { href: "/trainer/habits", label: "Habits", icon: Store, role: "trainer" },
    { href: "/messages", label: "Messages", icon: MessageCircle, role: "all" },
    {
      href: "/trainer/profile",
      label: "Account",
      icon: CircleUser,
      role: "trainer",
    },

    {
      href: "/student/profile",
      label: "Profile",
      icon: SquareKanban,
      role: "student",
    },
    {
      href: "/student/workouts",
      label: "Workouts",
      icon: SquareKanban,
      role: "student",
    },
    {
      href: "/student/nutrition",
      label: "Nutrition",
      icon: SquareKanban,
      role: "student",
    },
    {
      href: "/student/exercises",
      label: "Exercises",
      icon: Logs,
      role: "student",
    },
    {
      href: "/student/packages",
      label: "Packages",
      icon: Package,
      role: "student",
    },
    {
      href: "/student/calendar",
      label: "Calendar",
      icon: Calendar,
      role: "student",
    },
    {
      href: "/student/community",
      label: "Community",
      icon: Receipt,
      role: "student",
    },
    {
      href: "/student/discover",
      label: "Discover",
      icon: ChartNoAxesCombined,
      role: "student",
    },
    {
      href: "/student/notifications",
      label: "Notifications",
      icon: BellRing,
      role: "student",
    },
    {
      href: "/student/settings",
      label: "Settings",
      icon: Settings,
      role: "student",
    },
    { href: "/student/habits", label: "Habits", icon: Store, role: "student" },
    { href: "/logout", label: "Logout", icon: LogOut, role: "all" },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <nav
      className={`bg-neutral-950 text-white p-4 sticky top-0 left-0 h-screen z-20 pt-28  max-lg:hidden ${
        isSidebarOpen ? "w-80" : "max-w-max w-full"
      }`}
    >
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`absolute top-1/2 -translate-y-1/2 right-2 translate-x-1/2 bg-neutral-950 p-2 rounded-full  transition-transform ${
          isSidebarOpen ? "rotate-180" : "rotate-0"
        }`}
      >
        <ChevronRight size={28} className="text-white" />
      </button>
      <Link
        href="/"
        className="flex hidden items-center justify-center my-5 text-2xl font-bold italic"
      >
        yourTrainer
      </Link>

      <div
        className={`flex items-center justify-start  text-white h-10 rounded p-4 hover:bg-white/70 ${
          isSidebarOpen ? "bg-white/70" : ""
        }`}
      >
        <Icon name="search" size={24} />
        <input
          type="text"
          placeholder="Search"
          className={`pl-2 focus:outline-0 ${
            isSidebarOpen ? "block" : "hidden"
          }`}
        />
      </div>

      {links.map((link) => {
        if (link.role === "all" || link.role === userRole) {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`p-4 py-3 rounded-lg flex items-center gap-2 ${
                pathname === link.href
                  ? "bg-neutral-800 hover:bg-neutral-700"
                  : "hover:bg-neutral-600 "
              }`}
            >
              <Icon
                size="24"
                className={`${link.label === "Logout" && "text-red-500"}`}
              />
              <div className={`${isSidebarOpen ? "block ml-2" : "hidden"}`}>
                {link.label}
              </div>
            </Link>
          );
        }
        return null;
      })}
    </nav>
  );
}
