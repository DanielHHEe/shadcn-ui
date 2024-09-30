"use client"

import {useState} from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Role } from "@/types.ts/Role"

const roles = [
    {
        label: 'Gerente administrativo',
        description: 'Gerencia parte dos negócios da empresa',
        value: 'Gerente administrativo'
    },
    {
        label: 'Analista de dados',
        description: 'Cria regras de negócios e analisa os processos',
        value: 'Analista de dados'
    },
    {
        label: 'Contador',
        description: 'Gerencia parte da contabilidade e faz requisições de capital',
        value: 'Contador'
    },
    {
        label: 'Operador de redes',
        description: 'Opera no funcionamento de redes e sistemas internos',
        value: 'Operador de redes'
    },
    
]

type Props = {
    value: Role,
    setValue: (newValue: Role) => void
}


export function TeamCombobox({value, setValue}: Props) {
  const [open, setOpen] = useState(false)
  

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? roles.find(role => role.value === value)?.label
            : "Selecione o cargo ..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Selecione o cargo ..." />
          <CommandList>
            <CommandEmpty>No role found.</CommandEmpty>
            <CommandGroup>
              {roles.map(role =>  (
                <CommandItem
                  key={role.value}
                  value={role.value}
                  onSelect={(currentValue ) => {
                    //setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {role.label}
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === role.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {role.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
