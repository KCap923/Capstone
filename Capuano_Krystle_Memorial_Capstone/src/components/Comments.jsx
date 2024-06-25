import { useRef } from "react";

export default function Comments () {

  // UseRef keeps a reference to each of the elements below to see current value that is typed into them by user
const nameRef=useRef(null)
const relRef=useRef(null)
const commRef=useRef(null)
const dateRef=useRef(null)


return (
 <form className="NewComment">
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