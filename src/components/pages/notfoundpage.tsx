import React  from "react";
import { Link } from "react-router-dom";

class NotFoundPage extends React.Component {
    render(){
        return(
            <div>
            <h1>Not found page</h1>
            <Link to={'/'}> 
            <button>Go back home</button>
            </Link>
            </div>
        )
    }

}

export default NotFoundPage;