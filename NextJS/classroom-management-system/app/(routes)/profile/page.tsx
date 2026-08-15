"use client"

import ProfileCard from "@/app/(components)/profile-card";
import { useState } from "react";

export default function Profile() {

    const [profileData, setProfileData] = useState({
        "name": "Abhinav",
        "address": "Bangalore",
        "introduction": "I am a Software Engineer"
    })

    function updateProfileData(title: string, value: string) {
        setProfileData({
            ...profileData,
            [title]: value
        })
    }

    return (
        <>
            <div>
                <ProfileCard
                    name={profileData?.name}
                    address={profileData?.address}
                    introduction={profileData?.introduction}
                    github_url="https://test.com"
                    codechef_url="https://test.com"
                    website="https://test.com"
                    profileData={profileData}
                    updateProfileData={updateProfileData}
                />
            </div>
        </>
    )
}