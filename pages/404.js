  
import { useRouter } from 'next/router';
import Link from 'next/link'
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter()
  useEffect(() =>{
setTimeout(() =>{
  router.push("/")
  // console.log(router);
},3000)
  },[])
  return (
    <div className="not-found">
      <h1>Ooops...</h1>
      <h2>That page cannot be found :(</h2>
      <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
      <p>You will be redirected within 3 seconds</p>
    </div>
  );
}
 
export default NotFound;