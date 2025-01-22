"use client";
import { useState } from "react";

export default function NotificationsPage() {
    const [allNotifications, setAllNotifications] = useState([
        { id: 1, message: 'New contract created', date: '2024-03-14', read: false, details: 'A new contract for project X has been created and is awaiting approval.' },
        { id: 2, message: 'Supplier updated', date: '2024-03-13', read: true, details: 'Supplier ABC has updated their contact information and product list.' },
        { id: 3, message: 'Product added', date: '2024-03-12', read: false, details: 'A new product, XYZ, has been added to the inventory with a stock of 100 units.' },
        { id: 4, message: 'Delivery scheduled', date: '2024-03-11', read: true, details: 'A delivery for order #1234 has been scheduled for March 15, 2024.' },
        { id: 5, message: 'Invoice approved', date: '2024-03-10', read: false, details: 'Invoice #5678 for supplier ABC has been approved and is ready for payment.' },
        // Add more notifications as needed
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedNotifications, setSelectedNotifications] = useState<number[]>([]);
    const [activeNotification, setActiveNotification] = useState<number | null>(null);
    const [readNotificationIds, setReadNotificationIds] = useState<number[]>([]);

    const handleCheckboxChange = (id: number) => {
        setSelectedNotifications(prev =>
            prev.includes(id) ? prev.filter(notificationId => notificationId !== id) : [...prev, id]
        );
    };

    const [filter, setFilter] = useState('all');
    const filteredNotifications = allNotifications.filter(notification => {
        if (filter === 'read') return notification.read;
        if (filter === 'unread') return !notification.read;
        return true;
    })
    .filter(notification => notification.message.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete the selected notifications?")) {
            setAllNotifications(allNotifications.filter(notification =>
                !selectedNotifications.includes(notification.id)
            ));
            setSelectedNotifications([]);
        }
    };

    const handleView = (id: number) => {
        setActiveNotification(activeNotification === id ? null : id);
        if (activeNotification !== id) {
            setReadNotificationIds(prev => [...prev, id]);
        }
    };

    const handleFilterChange = (newFilter: string) => {
        setFilter(newFilter);
        setAllNotifications(allNotifications.map(notification => ({
            ...notification,
            read: readNotificationIds.includes(notification.id) ? true : notification.read
        })));
    };

    const unreadCount = allNotifications.filter(notification => !notification.read).length;

    return (
        <div className="w-full min-h-screen bg-gray-50">
            <style jsx>{`
                .active-filter {
                    background-color: #0099CC;
                    opacity: 0.7;
                }
            `}</style>
            <div className="max-w-[calc(100%)] mx-auto p-4">
                <h1 className="text-2xl font-semibold mb-4">Notifications</h1>

                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search notifications..."
                        className="w-full p-2 border border-gray-300 rounded"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="flex space-x-2 mb-4">
                    <button onClick={() => handleFilterChange('all')} className={`bg-[#0099CC] text-white px-4 py-2 rounded hover:bg-[#0099CC] hover:opacity-70 ${filter === 'all' ? 'active-filter' : ''}`}>All</button>
                    <button onClick={() => handleFilterChange('unread')} className={`bg-[#0099CC] text-white px-4 py-2 rounded hover:bg-[#0099CC] hover:opacity-70 ${filter === 'unread' ? 'active-filter' : ''}`}>Unread ({unreadCount})</button>
                    <button onClick={() => handleFilterChange('read')} className={`bg-[#0099CC] text-white px-4 py-2 rounded hover:bg-[#0099CC] hover:opacity-70 ${filter === 'read' ? 'active-filter' : ''}`}>Read</button>
                </div>

                {selectedNotifications.length > 0 && (
                    <div className="mb-4">
                        <button
                            onClick={handleDelete}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Delete Selected
                        </button>
                    </div>
                )}
                <ul className="space-y-2">
                    {filteredNotifications.map((notification) => (
                        <li
                            key={notification.id}
                            className={`w-full p-4 rounded-lg flex flex-col ${notification.read ? 'bg-gray-100' : 'bg-white'}`}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="mr-4"
                                        checked={selectedNotifications.includes(notification.id)}
                                        onChange={() => handleCheckboxChange(notification.id)}
                                    />
                                    <div>
                                        <p className="font-medium">{notification.message}</p>
                                        <span className="text-sm text-gray-500">{notification.date}</span>
                                    </div>
                                </div>
                                <button
                                    className="text-blue-500 hover:text-blue-600"
                                    onClick={() => handleView(notification.id)}
                                >
                                    View
                                </button>
                            </div>
                            {activeNotification === notification.id && (
                                <div className="mt-2 p-2 border-t border-gray-300">
                                    <p>{notification.details}</p>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
