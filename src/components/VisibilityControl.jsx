export const VisibilityControl=({isCheked,setshowCompleted,cleanTasks})=> {
  const handleDelete =()=>{
    if (window.confirm('Are you sure you wwant to delete it?')) {
      cleanTasks()
    }
  }
  return (
    <div>
        <input
          type="checkbox"
          checked={isCheked}
          onChange={(e) => setshowCompleted(e.target.checked)}
        />{" "}
        <label>Show Tasks Done</label>

        <button onClick={handleDelete}>Clear</button>
      </div>
  )
}

