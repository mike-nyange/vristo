import { useState } from "react";
import classNames from "classnames";
import { Bars3CenterLeftIcon, BellAlertIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

interface HeaderProps {
  toggleCollapse: boolean;
  setToggleCollapse: (value: boolean) => void;
}

export default function Header({ toggleCollapse, setToggleCollapse }: HeaderProps) {
  const sideBarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  const headerStyle = classNames(
    "fixed bg-[#000000] w-full z-10 px-4 shadow-sm shadow-slate-500/40",
    {
      ["sm:pl-[20rem]"]: !toggleCollapse,
      ["sm:pl-[5.6rem]"]: toggleCollapse,
    }
  );

  // Notification state and logic
  const [allNotifications, setAllNotifications] = useState([
    { id: 1, message: "New contract created", date: "2024-03-14", read: false, details: "A new contract for project X has been created and is awaiting approval." },
    { id: 2, message: "Supplier updated", date: "2024-03-13", read: true, details: "Supplier ABC has updated their contact information and product list." },
    { id: 3, message: "Product added", date: "2024-03-12", read: false, details: "A new product, XYZ, has been added to the inventory with a stock of 100 units." },
    { id: 4, message: "Delivery scheduled", date: "2024-03-11", read: true, details: "A delivery for order #1234 has been scheduled for March 15, 2024." },
    { id: 5, message: "Invoice approved", date: "2024-03-10", read: false, details: "Invoice #5678 for supplier ABC has been approved and is ready for payment." },
  ]);
  const unreadCount = allNotifications.filter((notification) => !notification.read).length;
  const [showNotifications, setShowNotifications] = useState(false);
  const [activeNotificationId, setActiveNotificationId] = useState<number | null>(null);

  const toggleNotification = (id: number) => {
    if (activeNotificationId === id) {
      setActiveNotificationId(null);
    } else {
      setActiveNotificationId(id);
      setAllNotifications(allNotifications.map((notification) => {
        if (notification.id === id) {
          return { ...notification, read: true };
        }
        return notification;
      }));
    }
  };

  return (
    <header className={headerStyle}>
      <div className="flex items-center justify-between h-20">
        <button
          onClick={sideBarToggle}
          className="order-1 sm:order-1 bg-[#3a3f48] text-[#6e768e] hover:bg-white ml-3 rounded-md w-[30px] h-[40px] shadow-black/10 transition duration-300 ease-in-out flex items-center justify-center"
        >
          <Bars3CenterLeftIcon />
        </button>
        
        <div className="order-2 sm:order-2 flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative z-10"
            >
              <BellAlertIcon className="w-6 h-6 text-white cursor-pointer" />
              {unreadCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {unreadCount}
                </span>
              )}
            </button>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-20">
                <div className="p-4 bg-gray-200">
                  <h3 className="font-semibold text-lg">Notifications</h3>
                </div>
                <ul className="mt-2 space-y-2 p-4">
                  {allNotifications.map((notification) => (
                    <li
                      key={notification.id}
                      className={`w-full rounded-lg flex flex-col ${notification.read ? "bg-gray-100 border border-gray-300" : "bg-white border border-blue-500"}`}
                      onClick={() => toggleNotification(notification.id)}
                    >
                      <div className="flex items-center justify-between p-4 cursor-pointer">
                        {!notification.read && (
                          <span className="relative inline-flex rounded-full h-3 w-3">
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                          </span>
                        )}
                        <div className="flex-grow">
                          <p className="font-medium">{notification.message}</p>
                          <span className="text-sm text-gray-500">{notification.date}</span>
                        </div>
                        <div>
                          {activeNotificationId === notification.id ? (
                            <ChevronUpIcon className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronDownIcon className="w-5 h-5 text-gray-500" />
                          )}
                        </div>
                      </div>
                      {activeNotificationId === notification.id && (
                        <div className="mt-2 p-2 border-t border-gray-300">
                          <p>{notification.details}</p>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-center">
            <span className="font-semibold text-sm">SR</span>
          </div>
        </div>
      </div>
    </header>
  );
}
