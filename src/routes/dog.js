import { useParams } from "react-router-dom";
import { getDog } from "../data";

export default function Dog() {
  let params = useParams(); ///let { dogName } = useParams()
  let dog = getDog(params.dogName);
  return (
    <div>
      <h2>Name: {params.dogName}</h2>
      <p>Age: {dog.age}</p>
      <p>{dog.str1}</p>
    </div>
  );
}
