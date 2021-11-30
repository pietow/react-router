import { Link } from 'react-router-dom'
import { getDogs } from '../data'

export default function dogs() {
    let dogs = getDogs();
    return (
        <div className="flex justify-between w-full pt-3 pb-3">
            {dogs.map(dog => {
                <div className="flex flex-col">
                    <img className="rounded-full border-8 mb-3 w-72" src={dog.name} alt="" />
                    <Link to={`/dog/${dog.name}`} key={dog.id}>dog.name</Link>
                </div>
            })}
      </div>
    )
}
