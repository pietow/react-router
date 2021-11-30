import { Link, Outlet } from 'react-router-dom'
import { getDogs } from '../data'

export default function dogs() {
    let dogs = getDogs();
    return (
        <div className="flex justify-between w-full pt-3 pb-3">
            {dogs.map(dog => (             
                <div className="flex flex-col" key={dog.id}>
                    <img className="rounded-full border-8 mb-3 w-72" src={dog.img} alt="" />
                    <Link to={`/dogs/${dog.name}`} >{dog.name}</Link>
                </div>
                ))}
            <Outlet />
      </div>
    )
}
