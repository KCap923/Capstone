import { useRef } from "react";

export default function NewComment ({ comments, setComments, baseUrl }) {

  // UseRef keeps a reference to each of the elements below to see current value that is typed into them by user
const nameRef=useRef(null);
const relRef=useRef(null);
const commRef=useRef(null);
const dateRef=useRef(null);

// Set handle submit, what happens when form is submitted. prevent.Default is set so page doesnt automatically refresh

const handleSubmit = async (e) => {
  e.preventDefault()
try {
  const newComment = {
  name:(nameRef.current.value),
  relationship:(relRef.current.value),
  comment:(commRef.current.value),
  date:(dateRef.current.value)
  }

  const response = await fetch(`${baseUrl}/comments`, {
method: 'POST',
headers: {
  'Content-Type': 'application/json'
},
// With fetch you have to stringify your body
body: JSON.stringify(newComment)
  });

  // Return out of this function if we do not get a 201 response
if (response.status !== 200) {

  return
}
// This data is a new comment that sends back to backend
const createdComment = await response.json()

setComments([...comments, createdComment])

// Clears out what is in input field
nameRef.current.value = ""
relRef.current.value = ""
commRef.current.value = ""
dateRef.current.value = ""

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