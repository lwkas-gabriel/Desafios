import { SlidersHorizontal } from "phosphor-react";


export function SearchBar(){
    return (
        <div className="flex w-full space justify-center mt-10 px-4">
            <input type="text" placeholder="Buscar" className="rounded-[100px] text-[#020202] placeholder-opacity-60 w-full bg-[#65DCC7] bg-opacity-30 max-w-[740px]"/>
            <button><SlidersHorizontal size={32}/></button>
        </div>
        
    )
}