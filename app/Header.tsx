import React from 'react';
import Link from "next/link";

function Header() {
	return (
		 <div>
			 <nav>
				 <ul>
					 <li><Link href={'/'}>Home</Link></li>
					 <li><Link href={'/posts'}>Posts</Link></li>
				 </ul>
			 </nav>
		 </div>
  );}

export default Header;