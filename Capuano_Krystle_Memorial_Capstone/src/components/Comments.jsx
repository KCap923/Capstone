import { useRef } from "react";

export default function Comments ({comments, setComments, baseUrl}) {

  // UseRef keeps a reference to each of the elements below to see current value that is typed into them by user
const nameRef=useRef(null)
const relRef=useRef(null)
const commRef=useRef(null)
const dateRef=useRef(null)

// Set handle submit, what happens when form is submitted. prevent.Default is set so page doesnt automatically refresh

const handleSubmit = (e) => {
  e.preventDefault()
try {
  console.log(nameRef.current.value)
  console.log(nameRef.current.value)
  console.log(nameRef.current.value)
  console.log(nameRef.current.value)

} catch (err) {
  console.log(err)
}
};



return (
 <form onSubmit={handleSubmit} className="NewComment">
Name:<input type="text" ref={nameRef}/>
<br />
Relationship:<input type="text" ref={relRef}/>
<br />
Comment:<input type="text" ref={commRef}/>
<br />
Date:<input type="text" ref={dateRef}/>
<br />
<input type="submit" value="Post Comment"/>

</form>
 


)


}