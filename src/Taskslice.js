import { createSlice } from "@reduxjs/toolkit";


//initialevalue cretate
const initialState={
   taskList:[],
   selectedTask: {},
}



//createslice
  const taskSlice =createSlice({
    name:"taskSlice",
    initialState,

    //manuculation works
    reducers:{
      addTaskToList:(state,action)=>{
         //id get and push
           const id=Math.random*100
           let task={...action.payload,id}
           state.taskList.push(task)
      },
      removeTaskFromList:(state,action)=>{
        state.taskList=state.taskList.filter((task)=>task.title !==action.payload.title)
        //  state.taskList=action.payload

      },
      updateTaskInList:(state,action)=>{
        // state.taskList=state.taskList.map((task)=>
        //     task.id===action.payload.id?action.payload:task
        state.taskList=state.taskList.map((task)=>
        task.title === action.payload.title? action.payload:task
        )
      },
     
      setselectedTask:(state,action)=>{
        state.selectedTask=action.payload
      }

    }
})
export const {addTaskToList,removeTaskFromList,updateTaskInList,setselectedTask}=taskSlice.actions

export default taskSlice.reducer;

