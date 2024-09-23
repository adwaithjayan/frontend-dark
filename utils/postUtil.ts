export const getColor =(category:string)=>{
    switch(category){
        case "Sustainability" :return "lime";
        case "Innovation": return "cyan";
        case "Security": return "violet";
        default: return "fuchsia";
    }
}


export const getColorPosition =(type:string)=>{
    switch(type)
    {
        case "Full Time":return "lime";
        case "Part Time":return "cyan";
        case "Contract":return "violet";
        default: return "fuchsia";
    }
}
export const getColorCat =(type:string)=>{
    switch(type)
    {
        case "Engineering":return "lime";
        case "Product":return "cyan";
        case "Marketing":return "violet";
        default: return "fuchsia";
    }
}