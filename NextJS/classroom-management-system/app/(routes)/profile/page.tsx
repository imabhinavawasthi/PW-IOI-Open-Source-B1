"use client"

import ProfileCard from "@/app/(components)/profile-card";
import { useState } from "react";

export default function Profile() {

    const [name, setName] = useState("Abhinav")
    const [address, setAddress] = useState("Bangalore")
    const [introduction, setIntroduction] = useState("I am a Software Engineer")

    return (
        <>
            <div>
                <ProfileCard
                    name={name}
                    address={address}
                    introduction={introduction}
                    github_url="https://test.com"
                    codechef_url="https://test.com"
                    website="https://test.com"
                />
                <form className="mt-5">
                    <label>Update Details</label>
                    <input
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}
                        className="w-full p-2 border-2 border-amber-800" type="text" placeholder="update name"
                        defaultValue={name} />
                    <input
                    onChange={(e)=>{
                            setAddress(e.target.value)
                        }}
                        className="w-full p-2 border-2 border-amber-800" type="text" placeholder="update address"
                        defaultValue={address} />
                    <input
                    onChange={(e)=>{
                            setIntroduction(e.target.value)
                        }}
                        className="w-full p-2 border-2 border-amber-800" type="text" placeholder="update introduction"
                        defaultValue={introduction} />
                </form>
            </div>
        </>
    )
}