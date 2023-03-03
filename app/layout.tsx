import React from 'react';
import Header from "./Header";

function Layout({children}) {
	return (
		 <html>
			 <body>
				 <Header/>
				 {children}
			 </body>
		 </html>
  );}

export default Layout;