import { useEffect, useState } from "react"
import axios from "axios";
const  useFetch  = (url)=>{
 
    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    useEffect(()=>{
const fetchDate = async ()=>{
    setLoading(true)
try {
    const res  =  await axios(url)
    setData(res.data)
} catch (error) {
    setError(error)
} 
setLoading(false)
};
fetchDate()
},[url])

const reFech = async ()=>{
    setLoading(true)
try {
    const res  = await axios(url)
    setData(res.data)
} catch (error) {
    setError(error)
} 
setLoading(false)
};

return {data,loading,error,reFech};
};

export default useFetch