import React, { useState,useContext,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { ContextHead } from '../../context/student';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      
    },
    justifyContent:'center',
  },
}));

export default function Create() {
  const classes = useStyles();

  const { Studentid,but } = useContext(ContextHead);
  const [Studentid1, setStudentid1] = useState(Studentid);
  const [but1,setbut1]=useState(but)

  const [student,setStudent] = useState({
      regNo: 0,
      studentName:'',
      grade:'',
      section:''
  })

console.log(Studentid1)




  

  const createStudent = () =>{
      axios.post('http://localhost:5000/students',student).then(()=>{
        window.location.reload(false)
      })
  }

  

  // useEffect(()=>{
  //   console.log("hi")
  // },[ShowStudent])

  return (
      <>
      <h2> Create Student</h2>
    <form className={classes.root} noValidate autoComplete="off">
      
      <TextField id="outlined-basic" label="Registration No" variant="outlined"
      value ={student.regNo} onChange={(event)=>{setStudent({...student, regNo: event.target.value})}} />
      <TextField id="outlined-basic" label="Name" variant="outlined"
       value ={student.studentName}  onChange={(event)=>{setStudent({...student, studentName: event.target.value})}}/>
      <TextField id="outlined-basic" label="Grade" variant="outlined" 
      value ={student.grade} onChange={(event)=>{setStudent({...student, grade: event.target.value})}} />
      <TextField id="outlined-basic" label="Section" variant="outlined"
      value ={student.section} onChange={(event)=>{setStudent({...student, section: event.target.value})}} />
      <Button variant="outlined" color="primary" onClick={createStudent}>
  Create
</Button>
    </form>
    </>
  );
}
