'use client'

import HeaderSection from '@/app/(components)/header-section';
import { useRouter } from 'next/dist/client/components/navigation';
import React from 'react'

function AddAttendancePage() {
    const router = useRouter();
    const [attendanceData, setAttendanceData] = React.useState({
        name: '',
        email: '',
        rollno: '',
        date: ''
    });

    function submitAttendance(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const currentAttendanceData = localStorage.getItem('attendanceData');
        const updatedAttendanceData = currentAttendanceData ? [...JSON.parse(currentAttendanceData), attendanceData] : [attendanceData];
        localStorage.setItem('attendanceData', JSON.stringify(updatedAttendanceData));
        router.push('/attendance');
    }

    return (
        <>
            <div>
                <HeaderSection title="Add Attendance" subtitle="Add new attendance records for students." />
                <div className="mt-8">
                    <form className="max-w-md mx-auto">
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                            onChange={(e) => setAttendanceData({...attendanceData, name: e.target.value})}
                            type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                            <label htmlFor="name" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                            onChange={(e) => setAttendanceData({...attendanceData, email: e.target.value})}
                             type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                            <label htmlFor="floating_email" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                            onChange={(e) => setAttendanceData({...attendanceData, rollno: e.target.value})}
                            type="text" name="rollno" id="rollno" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                            <label htmlFor="rollno" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Roll No</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input
                            onChange={(e) => setAttendanceData({...attendanceData, date: e.target.value})}
                            type="date" name="floating_date" id="floating_date" className="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer" placeholder=" " required />
                            <label htmlFor="floating_date" className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Date</label>
                        </div>
                        <button type="submit" className="text-black bg-brand cursor-pointer box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" onClick={submitAttendance}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddAttendancePage;