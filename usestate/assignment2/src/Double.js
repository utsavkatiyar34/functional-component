import React, {useState} from "react";
function Double(){
  let [num, setNum]= useState(5);
  let doubleNum =()=>{
    setNum(Number(num)*2);
  };
 let handleChange = (e)=>{
   setNum(e.target.value);
  }

   return(
    <>

    <div class="input-group">
  <input type="text" class="form-control" value={num} onChange={handleChange}/>
  <div class="input-group-prepend">
    <button class="btn" type="button" onClick={doubleNum}>Double</button>
  </div>
</div>
   </>
  );
}

export default Double;