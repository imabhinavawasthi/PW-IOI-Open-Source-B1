'use client'

import React, { useEffect } from 'react'
import HeaderSection from '../../(components)/header-section';
import Link from 'next/link';

function AttendancePage() {
    const [attendanceData, setAttendanceData] = React.useState({
        name: '',
        email: '',
        rollno: '',
        date: ''
    });
    useEffect(() => {
        const storedData = localStorage.getItem('attendanceData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setAttendanceData(parsedData);
        }
    }, []);
    
    return (
        <>
        <div>
            <HeaderSection title="Attendance Tracking Page" subtitle="Track and manage student attendance easily." />
            <div className="mt-8">
                <div>
                    <div className="mt-4">
                        <table className="min-w-full border border-gray-300">
                            <thead>
                                <tr>
                                    <th className="border border-gray-300 px-4 py-2">Name</th>
                                    <th className="border border-gray-300 px-4 py-2">Email</th>
                                    <th className="border border-gray-300 px-4 py-2">Roll No</th>
                                    <th className="border border-gray-300 px-4 py-2">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    attendanceData.length > 0 ? (
                                        attendanceData.map((data: any, index: number) => (
                                            <tr key={index}>
                                                <td className="border border-gray-300 px-4 py-2">{data.name}</td>
                                                <td className="border border-gray-300 px-4 py-2">{data.email}</td>
                                                <td className="border border-gray-300 px-4 py-2">{data.rollno}</td>
                                                <td className="border border-gray-300 px-4 py-2">{data.date}</td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={4} className="border border-gray-300 px-4 py-2 text-center">No attendance data available.</td>
                                        </tr>
                                    )   
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <div className="text-center">
                    <Link href="/attendance/add" className="text-black bg-brand cursor-pointer box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Add Attendance</Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default AttendancePage;