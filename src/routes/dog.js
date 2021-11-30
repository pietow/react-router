import { useParams } from 'react-router-dom'

export default function Dog() {
    let params = useParams()
    return (<div><h2>{params.dogName}</h2></div>)
}
