"use client"

import { member } from "@/types.ts/member"
import { TeamCombobox } from "./team-combo"
import { useState } from "react"

type Props = {
    data: member
}

export const Teamitem = ({data}: Props ) => {
    const [role, setRole] = useState(data.role)

    return(
        <div className="flex item center gap-5">
            <div className="flex-1">
                <div>{data.name}</div>
                <div className=" text-primary/50">{data.email}</div>
            </div>
            <div>
                <TeamCombobox value={role} setValue={setRole}/>
            </div>
            
        </div>
    )
}