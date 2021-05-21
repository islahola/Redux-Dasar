
export const del =(id) =>{
    return{
        type:"DEL",
        payload:id
    }
}
export const add =(title)=>{
    return{
        type:"ADD",
        payload:title
    }
}