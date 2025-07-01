import {
  BellRing,
  Calendar,
  ChartNoAxesCombined,
  CircleUser,
  LogOut,
  Logs,
  MessageCircle,
  Package,
  Receipt,
  Settings,
  SquareKanban,
  Store,
  Tags,
} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <nav className="w-80 bg-gray-800 text-white p-4 sticky top-0 left-0 h-screen z-20 max-md:hidden">
      <Link
        href="/"
        className="flex items-center justify-center my-5 text-2xl font-bold italic"
      >
        yourTrainer
      </Link>
      <div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-900 text-white p-2 rounded w-full mt-4"
        />
      </div>
      <h2 className="text-sm font-semibold px-4 mt-8 text-gray-600">
        Dashboard
      </h2>
      <ul className="flex flex-col ">
        <Link
          href="/workouts"
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900 focus:bg-purple-600"
        >
          <SquareKanban size="24" className="mr-2" /> Workouts
        </Link>
        <Link
          href="/nutrition"
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900 focus:bg-[#112d5d]"
        >
          <SquareKanban size="24" className="mr-2" />
          Nutrition
        </Link>
        <Link
          href="/exercises"
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900 focus:bg-blue-600"
        >
          <Logs size="24" className="mr-2" /> Exercises
        </Link>

        <Link
          href="/packages"
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900 focus:bg-yellow-600"
        >
          <Package size="24" className="mr-2" />
          Packages
        </Link>

        <Link
          href="/trainer/calendar"
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900 focus:bg-orange-600"
        >
          <Calendar size="24" className="mr-2" /> Calendar
        </Link>

        <Link
          href="/payments"
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900 focus:bg-cyan-600"
        >
          <Receipt size="24" className="mr-2" /> Invoices
        </Link>
        <Link
          href="/analytics"
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900"
        >
          <ChartNoAxesCombined size="24" className="mr-2" /> Analytics
        </Link>
        <Link
          href="/notifications"
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900"
        >
          <BellRing size="24" className="mr-2" /> Notifications
        </Link>
      </ul>
      <h2 className="text-sm font-semibold px-4 mt-8 text-gray-600">
        Discover
      </h2>
      <ul className="flex flex-col ">
        <Link
          href="/habits"
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900"
        >
          <Store size="24" className="mr-2" />
          Habits
        </Link>
        <Link
          href="/messages"
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900"
        >
          <MessageCircle size="24" className="mr-2" /> Messages
        </Link>
      </ul>
      <h2 className="text-sm font-semibold px-4 mt-8 text-gray-600">
        Settings
      </h2>
      <ul className="flex flex-col ">
        <Link
          href="/trainer/profile"
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900"
        >
          <CircleUser size="24" className="mr-2" />
          Account
        </Link>
        <Link
          href="/subscriptions"
          className="p-4 py-3 rounded-lg flex hover:bg-gray-900"
        >
          <Settings size="24" className="mr-2" /> Preferences
        </Link>
        <button className="p-4 py-3 rounded-lg flex hover:bg-gray-900">
          <LogOut size="24" className="mr-2" /> Logout
        </button>
      </ul>
    </nav>
  );
}
