const Subscribe=(props)=>{
    const{userdetails}=props
    const{name,age}=userdetails
    return(
        <li>
            {name},{age}
        </li>
    )
}
export default Subscribe;