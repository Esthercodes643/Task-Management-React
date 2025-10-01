import React from 'react';
import {
    Home,
    CheckSquare,
    Clock,
    AlertCircle,
    Archieve,
    Settings,
   } from "lucide-react";

   const Sidebar = ({ activeFilter, onFilterChange, taskCounts}) => {
    const menuItems =[
        {
            id: 'dashboard',
            label: 'Dashboard',
            icon: Home ,
            count : null
        },
        {
            id: 'all',
            label : 'All Tasks',
            icon: CheckSquare,
            count : taskCounts.total
        },
        {
            id :'pending',
            label : 'Pending',
            icon: Clock,
            count : taskCounts.pending
        },
        {
            id:'completed',
            label : 'Completed',
            icon: CheckSquare,
            count : taskCounts.completed
        },
        {
            id:'overdue',
            label : 'Overdue',
            icon: AlertCircle,
            count : taskCounts.overdue
        }

    ];

    return(
        <div className="w-64 bg-white h-screen shadow-lg border-r border-gray-200">
            <div className="p-6">
                <div className="flex items-center space-x-2 mb-8">
                   <CheckSquare className="w-8 h-8 text-primary"/>
                   <h1 className="text-2xl font-bold text-primary">Taskify</h1>
            </div>

            <nav className="space-y-2">
                {menuItems.map{(item)=>{
                    const Icon = item.icon;
                    const isActive = activeFilter === item.id;

                    return(
                        <button 
                        key = {item.id}
                        onClick={() => onFilterChange(item.id)}
                        className={"w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-100 " + (isActive ? "bg-gray-100" : "")}
                        isActive
                    ? "bg-gray-100" : "
                    : "text-gray-600"
                                        
                
    )}
                </button>
                })}

            </nav>
        </div>
    )

    
   }