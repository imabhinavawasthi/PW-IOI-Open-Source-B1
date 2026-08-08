"use client"

import { getAssignmentById } from "@/app/(config)/assignments";
import { useParams } from "next/navigation";
import AssignmentDetailsCard from "../(components)/assigment-details";

export default function AssignmentDetailsPage() {
    const params: { id: string } = useParams();

    return (
        <>
            <div>
                <>
                    <div>
                        <AssignmentDetailsCard
                            assignmentId={params.id}
                            name={getAssignmentById(parseInt(params.id))?.name || "No Assignment Found"}
                            description={getAssignmentById(parseInt(params.id))?.description || ""}
                            instructions={getAssignmentById(parseInt(params.id))?.instructions || ""}
                        />
                    </div>
                </>
            </div>
        </>
    )
}