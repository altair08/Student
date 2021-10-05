import React, { useEffect, useState ,useContext} from 'react';
import { ContextHead } from '../../context/student';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton  from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },

});






export default function ShowStudent() {
  const classes = useStyles();

  const [studentsList,setStudentList] = useState([])

  // const [value,setValue] = useState({
  //   regNo: 0,
  //   studentName:'',
  //   grade:'',
  //   section:''
  // })

  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  // const handleValue = () => {
  //   setOpen(false);
  //   EditStudent()
  //   const newRegno = value.regNo
  //   return newRegno;
    
  // };


 
//  const newRegno = value.regNo
//   console.log(value)




const  EditStudent = (id) =>{
 
  const newRegno =  prompt("Enter new register No")


        
    axios.put(`http://localhost:5000/students/${id}`,{regNo : newRegno})
    .then(()=>{
      window.location.reload(false);
     })
    
}




  const deleteStudent =(id)=>{
    axios.delete(`http://localhost:5000/students/${id}`).then(()=>{
      window.location.reload(false);
    })
  }



 
useEffect(()=>{
  axios.get('http://localhost:5000/students').then((allStudents)=>{
    setStudentList(allStudents.data)
  })
},[])


  return(
      <>
      <h2>All Students</h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">RegNo</TableCell>
            <TableCell align="right">Grade</TableCell>
            <TableCell align="right">Section</TableCell>
            <TableCell align="center">Action</TableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsList.map((student,key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {student.studentName}
              </TableCell>
              <TableCell align="right">{student.regNo}</TableCell>
              <TableCell align="right">{student.grade}</TableCell>
              <TableCell align="right">{student.section}</TableCell>
              <TableCell align="center">
                <IconButton aria-label="delete" className={classes.margin} onClick={()=>deleteStudent(student._id)}>
               <DeleteIcon/>
               </IconButton>
               <IconButton >
               <EditIcon onClick={()=>EditStudent(student._id)}/>
               </IconButton>
              



              </TableCell>


            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    {/* <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Update your Registration Number
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Registration Number"
            fullWidth
            value={value.regNo}
            onChange={(event)=>{setValue({...value, regNo: event.target.value})}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleValue} color="primary">
            update
          </Button>
        </DialogActions>
      </Dialog> */}



    </>
  );
}
