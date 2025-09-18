"use client"

import React, { useState } from 'react';
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  FileText, 
  BarChart3, 
  Users, 
  UserCheck, 
  Settings, 
  HelpCircle,
  Plus,
  Play,
  Pause,
  X
} from 'lucide-react';

const TikTikCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 8, 13)); // September 2024
  const [selectedView, setSelectedView] = useState('Week');
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerTime, setTimerTime] = useState('08:01:12');
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

  const tasks = [
    { id: 1, title: 'Tuduu - Dashboard Inner Page', time: '08:00', duration: '8h 1m 12s', color: 'bg-purple-100 text-purple-700', project: 'Tuduu Projects', date: 9 },
    { id: 2, title: 'Finzy - Landing Page Wireframe', time: '09:00', duration: '3h', color: 'bg-green-100 text-green-700', project: 'Finzy Projects', date: 9 },
    { id: 3, title: 'Tuduu - Landing Page', time: '10:00', duration: '2h', color: 'bg-purple-100 text-purple-700', project: 'Tuduu Projects', date: 10 },
    { id: 4, title: 'Prilans - Hero Section', time: '11:00', duration: '1h 30m', color: 'bg-orange-100 text-orange-700', project: 'Prilans Projects', date: 10 },
    { id: 5, title: 'Wave - Transfer Flow', time: '09:00', duration: '2h', color: 'bg-red-100 text-red-700', project: 'Wave Projects', date: 11 },
    { id: 6, title: 'Tuduu - Minor Revision', time: '15:09', duration: '1h', color: 'bg-purple-100 text-purple-700', project: 'Tuduu Projects', date: 11 },
    { id: 7, title: 'Mobile App Design', time: '14:00', duration: '3h', color: 'bg-blue-100 text-blue-700', project: 'Mobile Projects', date: 12 },
    { id: 8, title: 'Database Optimization', time: '10:30', duration: '2h 30m', color: 'bg-yellow-100 text-yellow-700', project: 'Backend Projects', date: 13 },
    { id: 9, title: 'User Testing Session', time: '13:00', duration: '4h', color: 'bg-pink-100 text-pink-700', project: 'UX Projects', date: 14 },
    { id: 10, title: 'Code Review Meeting', time: '09:30', duration: '1h 30m', color: 'bg-indigo-100 text-indigo-700', project: 'Development', date: 15 }
  ];

  const sidebarItems = [
    { icon: Clock, label: 'Time Tracker', active: false },
    { icon: FileText, label: 'Timesheet', active: false },
    { icon: Calendar, label: 'Calendar', active: true },
    { icon: BarChart3, label: 'Dashboard', active: false },
    { icon: FileText, label: 'Reports', active: false },
    { icon: BarChart3, label: 'Analytics', active: false },
    { icon: FileText, label: 'Projects', active: false },
    { icon: Users, label: 'Team', active: false },
    { icon: UserCheck, label: 'Attendance', active: false }
  ];

  const getWeekDates = () => {
    const startOfWeek = new Date(currentDate);
    const day = startOfWeek.getDay();
    startOfWeek.setDate(startOfWeek.getDate() - day);
    
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const weekDates = getWeekDates();

  const navigateWeek = (direction) => {
    const newDate = new Date(currentDate);
    if (selectedView === 'Week') {
      newDate.setDate(currentDate.getDate() + (direction * 7));
    } else if (selectedView === 'Month') {
      newDate.setMonth(currentDate.getMonth() + direction);
    } else if (selectedView === 'Day') {
      newDate.setDate(currentDate.getDate() + direction);
    }
    setCurrentDate(newDate);
  };

  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Previous month's trailing days
    for (let i = startingDayOfWeek - 1; i >= 0; i--) {
      const date = new Date(year, month, -i);
      days.push({ date, isCurrentMonth: false });
    }
    
    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      days.push({ date, isCurrentMonth: true });
    }
    
    // Next month's leading days
    const remainingCells = 42 - days.length;
    for (let day = 1; day <= remainingCells; day++) {
      const date = new Date(year, month + 1, day);
      days.push({ date, isCurrentMonth: false });
    }
    
    return days;
  };

  const getCurrentDayTasks = () => {
    const currentDay = currentDate.getDate();
    return tasks.filter(task => task.date === currentDay);
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setShowTaskModal(true);
  };

  const toggleTimer = () => {
    setIsTimerRunning(!isTimerRunning);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm border-r">
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-semibold text-gray-800">TikTik</span>
          </div>
        </div>

        {/* Project Selector */}
        <div className="p-4 border-b">
          <div className="flex items-center space-x-2 text-sm">
            <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">P</span>
            </div>
            <span className="text-gray-700">Polobelab</span>
          </div>
        </div>

        {/* Timer */}
        <div className="p-4 border-b">
          <div className="text-xs text-gray-500 mb-2">MAIN MENU</div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">Time Tracker</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-mono text-gray-800">{timerTime}</span>
              <button 
                onClick={toggleTimer}
                className={`w-3 h-3 rounded-full ${isTimerRunning ? 'bg-red-500' : 'bg-gray-300'}`}
              />
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-4 space-y-1">
          {sidebarItems.map((item, index) => (
            <div 
              key={index}
              className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                item.active ? 'bg-gray-900 text-white' : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Analyze Section */}
        <div className="p-4 border-t">
          <div className="text-xs text-gray-500 mb-2">ANALYZE</div>
          <div className="space-y-1">
            <div className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
              <BarChart3 className="w-4 h-4" />
              <span className="text-sm">Dashboard</span>
            </div>
            <div className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
              <FileText className="w-4 h-4" />
              <span className="text-sm">Reports</span>
            </div>
          </div>
        </div>

        {/* Manage Section */}
        <div className="p-4 border-t">
          <div className="text-xs text-gray-500 mb-2">MANAGE</div>
          <div className="space-y-1">
            <div className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
              <Users className="w-4 h-4" />
              <span className="text-sm">Team</span>
            </div>
          </div>
        </div>

        {/* Bottom Menu */}
        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          <div className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
            <HelpCircle className="w-4 h-4" />
            <span className="text-sm">Help center</span>
          </div>
          <div className="flex items-center space-x-3 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg cursor-pointer">
            <Settings className="w-4 h-4" />
            <span className="text-sm">Settings</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button onClick={() => navigateWeek(-1)} className="p-1 hover:bg-gray-100 rounded">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <h1 className="text-xl font-semibold">
                {selectedView === 'Day' 
                  ? `${weekDays[currentDate.getDay()]}, ${monthNames[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`
                  : `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`
                }
              </h1>
              <button onClick={() => navigateWeek(1)} className="p-1 hover:bg-gray-100 rounded">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button 
                  onClick={() => setSelectedView('Day')}
                  className={`px-3 py-1 text-sm rounded ${selectedView === 'Day' ? 'bg-white shadow' : ''}`}
                >
                  Day
                </button>
                <button 
                  onClick={() => setSelectedView('Week')}
                  className={`px-3 py-1 text-sm rounded ${selectedView === 'Week' ? 'bg-white shadow' : ''}`}
                >
                  Week
                </button>
                <button 
                  onClick={() => setSelectedView('Month')}
                  className={`px-3 py-1 text-sm rounded ${selectedView === 'Month' ? 'bg-white shadow' : ''}`}
                >
                  Month
                </button>
              </div>
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                <span>Upgrade</span>
              </button>
            </div>
          </div>
        </div>

        {/* Calendar Content */}
        <div className="flex-1 overflow-auto">
          {selectedView === 'Week' && (
            <div className="grid grid-cols-8 bg-white">
              {/* Time Column */}
              <div className="border-r">
                <div className="h-16 border-b"></div>
                {Array.from({ length: 24 }, (_, i) => (
                  <div key={i} className="h-20 border-b text-xs text-gray-500 p-2">
                    {String(i).padStart(2, '0')}:00
                  </div>
                ))}
              </div>

              {/* Date Columns */}
              {weekDates.map((date, index) => (
                <div key={index} className="border-r">
                  {/* Date Header */}
                  <div className="h-16 border-b p-2 bg-gray-50">
                    <div className="text-xs text-gray-500">
                      {weekDays[date.getDay()]} {date.getDate()}
                    </div>
                    <div className="text-xs text-gray-400">
                      {String(date.getMonth() + 1).padStart(2, '0')}/{String(date.getDate()).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Time Slots */}
                  {Array.from({ length: 24 }, (_, hour) => (
                    <div key={hour} className="h-20 border-b relative">
                      {/* Render tasks */}
                      {tasks
                        .filter(task => {
                          const taskHour = parseInt(task.time.split(':')[0]);
                          return taskHour === hour && task.date === date.getDate();
                        })
                        .map(task => (
                          <div
                            key={task.id}
                            onClick={() => handleTaskClick(task)}
                            className={`absolute left-1 right-1 top-1 p-2 rounded text-xs cursor-pointer ${task.color} hover:shadow-md transition-shadow`}
                          >
                            <div className="font-medium">{task.title}</div>
                            <div className="text-xs opacity-70">{task.duration}</div>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}

          {selectedView === 'Day' && (
            <div className="grid grid-cols-2 bg-white">
              {/* Time Column */}
              <div className="border-r">
                <div className="h-16 border-b p-4 bg-gray-50">
                  <div className="font-medium text-gray-900">
                    {weekDays[currentDate.getDay()]}, {monthNames[currentDate.getMonth()]} {currentDate.getDate()}
                  </div>
                  <div className="text-sm text-gray-500">
                    {currentDate.getFullYear()}
                  </div>
                </div>
                {Array.from({ length: 24 }, (_, i) => (
                  <div key={i} className="h-20 border-b text-xs text-gray-500 p-2">
                    {String(i).padStart(2, '0')}:00
                  </div>
                ))}
              </div>

              {/* Day Column */}
              <div>
                <div className="h-16 border-b p-4 bg-gray-50">
                  <div className="text-sm text-gray-600">
                    {getCurrentDayTasks().length} tasks scheduled
                  </div>
                </div>
                {Array.from({ length: 24 }, (_, hour) => (
                  <div key={hour} className="h-20 border-b relative">
                    {getCurrentDayTasks()
                      .filter(task => {
                        const taskHour = parseInt(task.time.split(':')[0]);
                        return taskHour === hour;
                      })
                      .map(task => (
                        <div
                          key={task.id}
                          onClick={() => handleTaskClick(task)}
                          className={`absolute left-2 right-2 top-1 p-2 rounded text-xs cursor-pointer ${task.color} hover:shadow-md transition-shadow`}
                        >
                          <div className="font-medium">{task.title}</div>
                          <div className="text-xs opacity-70">{task.duration}</div>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>
          )}

          {selectedView === 'Month' && (
            <div className="bg-white">
              {/* Month Grid Header */}
              <div className="grid grid-cols-7 border-b">
                {weekDays.map(day => (
                  <div key={day} className="p-4 text-center text-sm font-medium text-gray-700 border-r">
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Month Grid */}
              <div className="grid grid-cols-7">
                {getDaysInMonth().map((dayObj, index) => {
                  const dayTasks = tasks.filter(task => task.date === dayObj.date.getDate() && dayObj.isCurrentMonth);
                  const isToday = dayObj.date.toDateString() === new Date().toDateString();
                  
                  return (
                    <div 
                      key={index} 
                      className={`min-h-32 border-r border-b p-2 ${dayObj.isCurrentMonth ? 'bg-white' : 'bg-gray-50'}`}
                    >
                      <div className={`text-sm mb-2 ${
                        isToday ? 'w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center' : 
                        dayObj.isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                      }`}>
                        {dayObj.date.getDate()}
                      </div>
                      
                      <div className="space-y-1">
                        {dayTasks.slice(0, 3).map(task => (
                          <div
                            key={task.id}
                            onClick={() => handleTaskClick(task)}
                            className={`text-xs p-1 rounded cursor-pointer ${task.color} hover:shadow-sm transition-shadow`}
                          >
                            <div className="font-medium truncate">{task.title}</div>
                            <div className="opacity-70">{task.time}</div>
                          </div>
                        ))}
                        {dayTasks.length > 3 && (
                          <div className="text-xs text-gray-500">
                            +{dayTasks.length - 3} more
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Task Modal */}
      {showTaskModal && selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Time Details</h2>
              <button 
                onClick={() => setShowTaskModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">{selectedTask.title}</h3>
                <p className="text-sm text-gray-600">{selectedTask.duration}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project</label>
                  <div className="text-sm text-gray-900">{selectedTask.project}</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tag</label>
                  <div className="text-sm text-orange-600">Landing Page</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <div className="text-sm text-gray-900">Sep 13, 2024</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Start</label>
                  <div className="text-sm text-gray-900">{selectedTask.time}</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">End</label>
                  <div className="text-sm text-gray-900">16:01</div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                  <div className="text-sm text-gray-500">Add a note or dimension</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button 
                onClick={() => setShowTaskModal(false)}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button 
                onClick={() => setShowTaskModal(false)}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm hover:bg-orange-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TikTikCalendar;