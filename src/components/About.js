import User from './User';
import UserClass from './UserClass';
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log("parent class constructor");
    }
    componentDidMount(){
        console.log("parent class component did mount");
    }
    render(){
        console.log("parent class render");
        return(
            <div>
                <UserClass name="child1" location="assandh1"/>
                <User/>
                <UserClass name="child2" location="assandh2"/>
            </div>
        )
    }
}

export default About;