import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl'
import * as firebase from "firebase";
import {connect} from 'react-redux'
import {searchSlots,searchable} from '../store/actions/userAction'

class MaterialUIPickers extends React.Component  {

state={
  date: new Date(),
  startTime :new Date(),
  endTime: new Date(),
  area:'Area A'
}
handleTimeChange = startTime => {
  let a= startTime.getTime()
  let d= new Date(a)
  let b= new Date();
  let c = b.getTime()
  // console.log(d.toDateString()) ok
  console.log(d.toLocaleTimeString(),a,'=',c)
if(a>c){
  this.setState({ startTime })

}
else{
  alert('Start time must be current or future')
}
};
handleDateChange = date => {
  let a= date.getTime()
  let d= new Date(a)
  this.setState({ date})

  console.log(date.toDateString())
};
handleEndTimeChange = endTime => {
  let a= endTime.getTime()
  let b= new Date();
  let e = this.state.startTime
if(a>e){
  // console.log(endTime.toLocaleTimeString())
  this.setState({ endTime})
}else{
alert("End time must be Greater than sTart Time")
}
};
handleAreaChange = area => {
  this.setState({ area:area.target.value })
};
submitForm = () =>{
  let userUid = localStorage.getItem("userUid");
  if(this.state.endTime>this.state.startTime){
    let obj={
      stime:this.state.startTime.getTime(),
      etime:this.state.endTime.getTime(),
      date:this.state.date.getDate(),
      month:this.state.date.getMonth(),
      year:this.state.date.getFullYear(),
      area : this.state.area,
      uid : userUid,
      
    }
    // console.log(obj)
    this.props.spaceCheak(obj)
    this.props.searchSlots(obj)
    this.props.searchable(obj)
    this.setState({startTime:new Date(),endTime:new Date(),date:new Date()})
  // firebase.database().ref(obj.area+ '/').push(obj).then(()=>{
  //   this.setState({startTime:new Date(),endTime:new Date(),date:new Date()})
  // })  
  }else{
    alert("end time must be greater")
  }
 
}

render(){
  // console.log(this.state)
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <h3> Select required date and time</h3>
          <FormControl 
            // variant="filled" 
            // fullWidth
            style={{width:'85%'}}
            required
          >
            <InputLabel  id="area">
              Select Area
            </InputLabel>        
            <Select
              label="Select Area"
              id="area"
              value={this.state.area}
              onChange={this.handleAreaChange}
              name="area"
              required
            >
            <MenuItem value={'Area A'} >Area A</MenuItem>
            <MenuItem value={'Area B'} >Area B</MenuItem>
            <MenuItem value={'Area C'}>Area C</MenuItem>
            </Select>
          </FormControl>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            disablePast="true"
            label="Select Date"
            format="MM/dd/yyyy"
            value={this.state.date}
            onChange={this.handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="startTime"
            label="Start Time"
            value={this.state.startTime}
            onChange={this.handleTimeChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="End Time"
            value={this.state.endTime}
            onChange={this.handleEndTimeChange}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ 
              margin: '16px auto ',
              background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            }}
            onClick={this.submitForm}
          >
            Search Slot
          </Button>
        </Grid>
      </MuiPickersUtilsProvider>
  );
}
}
const mapDispatchToProps = dispatch => {
  return {
      searchSlots:(obj)=>dispatch(searchSlots(obj)),
      searchable:(obj)=>dispatch(searchable(obj))
  }
}    
export default  connect(null,mapDispatchToProps)(MaterialUIPickers);
///
