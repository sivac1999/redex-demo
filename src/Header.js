import React from "react";
import { useSelector } from "react-redux";

const Header = ( )=>{
 const {taskList}= useSelector((state)=>state.task)
 console.log(taskList);
    return(
      <div>
        <h1 className="text-sucess text-center my-4" >Task Management</h1>
        <p className="text-center my-4">currently ${taskList.length} Task pending</p>
      </div>
    ) 
}
export default Header