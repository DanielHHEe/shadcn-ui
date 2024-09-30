import { Members } from "@/data/Members"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Item } from "@radix-ui/react-dropdown-menu"
import { Teamitem } from "./Teamitem"

export const Team = () => {
    return(
        
    <Card>
        <CardHeader>
            <CardTitle>Membros da Empresa</CardTitle>
            <CardDescription>Membros do grupo e cargos</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-8">
            {Members.map(item => (
                <Teamitem key={item.id} data={item}/>
            ))}
        </CardContent>
</Card>

        
    )
}