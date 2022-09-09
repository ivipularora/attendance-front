import React from 'react'

function Header({ setIsAdding, attendance }) {
    console.log(attendance)
    var date = new Date();
	var current_date = date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear();
    return (
        <header>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            <h1>Attendance Management CRUD</h1>
            <h4 style={{textAlign: 'right'}}>Date: {current_date}</h4>
            </div>
            <div style={{ marginTop: '30px', marginBottom: '18px' , display:'flex', justifyContent:'space-between'}}>
                
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Employee</button>
                <h4 style={{textAlign: 'right'}}>present : {attendance}</h4>
            </div>
        </header>
    )
}

export default Header
