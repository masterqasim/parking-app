import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import im from '../../images/parkingSpace.jpg'
import car from '../../images/car.jpeg'
import available from '../../images/available.jpeg'
import {connect} from 'react-redux'
import * as firebase from 'firebase'
import { reserveSlot } from '../store/actions/userAction'

export class Space extends Component {
    state={
        flag:false,
        // flag:this.props.availableSpace
    }
    reserve=(data)=>{
          console.log(data,this.props.search)
          let obj={
            stime:this.props.search.stime,
            etime:this.props.search.etime,
            date:this.props.search.date,
            month:this.props.search.month,
            year:this.props.search.year,
            area : this.props.search.area,
            uid : this.props.search.uid,
            slotNO:data 
          }
          
          let obj1={
            slot1:this.props.availableSpace.slot1,
            slot2:this.props.availableSpace.slot2,
            slot3:this.props.availableSpace.slot3,
            // slot4:this.props.availableSpace.slot4,
            // slot5:this.props.availableSpace.slot5,
            // slot6:this.props.availableSpace.slot6
          }
          if(data==1){
            obj1.slot1=!this.props.availableSpace.slot1;
          }else if(data==2){
              console.log(data,'and')
            obj1.slot2=!this.props.availableSpace.slot2;
          }else if(data==3){
            console.log(data,'and')
            obj1.slot3=!this.props.availableSpace.slot3;
          }
        //   else if(data==4){
        //     obj1.slot4=!this.props.availableSpace.slot4;
        //   }else if(data==5){
        //       console.log(data,'and')
        //     obj1.slot5=!this.props.availableSpace.slot5;
        //   }else if(data==6){
        //     console.log(data,'and')
        //     obj1.slot6=!this.props.availableSpace.slot6;
        //   }
        //   this.props.reserveSlot(obj1) 
          console.log(obj1,'==',obj.slotNO)
        firebase.database().ref(obj.area+ '/').push(obj).then(()=>{
          this.props.reserveSlot(obj1) 
        }) 
    }
    render() {
        console.log(this.props.availableSpace)
        console.log(this.props)
        let {area,date,etime, month, slotNO,stime,uid,year}=this.props.search;
        return (
            <div>
                {/* {Object.values(this.props.availableSpace).length ?
                <p>
                availableSpace 

                </p>
                :<p>not</p>
                } */}
                 {Object.values(this.props.availableSpace).length?
                 <div>
                 <Grid container style={{margin:'30px'}}>
                    <Grid item xs={3} style={{border : '1px solid white', height:'200px'}}>
                        <div>
                            {this.props.availableSpace.slot1?
                            <div>
                                <img src={car} style={{height:'80px',margin:'30px auto'}}></img>
                                <Button 
                                fullWidth
                                variant="contained"
                                color="primary"
                                style={{ 
                                margin: '1px auto ',
                                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                }}>
                                    reserved
                                </Button>
                            </div>
                            :
                            <div>
                                <img src={available} style={{height:'100px',margin:'20px auto'}}/>
                                <Button
                                    // type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    style={{ 
                                    margin: '1px auto ',
                                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                    }}
                                    onClick={()=>{this.reserve(1)}}
                                >
                                    Book now
                                </Button>
                            </div>
                          
                        }
                        </div>                 
                    </Grid>
                    <Grid item xs={3} style={{border : '1px solid White'}}>
                    <div>
                            {this.props.availableSpace.slot2?
                            <div>
                                <img src={car} style={{height:'80px',margin:'30px auto'}}></img>
                                <Button 
                                fullWidth
                                variant="contained"
                                color="primary"
                                style={{ 
                                margin: '1px auto ',
                                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                }}>
                                    reserved
                                </Button>
                            </div>
                            :
                            <div>
                                <img src={available} style={{height:'100px',margin:'20px auto'}}/>
                                <Button
                                    // type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    style={{ 
                                    margin: '1px auto ',
                                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                    }}
                                    onClick={()=>{this.reserve(2)}}
                                >
                                    Book now
                                </Button>
                            </div>
                         
                        }
                        </div>    
                    </Grid>
                    <Grid item xs={3} style={{border : '1px solid white'}}>
                    <div>
                        {this.props.availableSpace.slot3?
                        <div>
                            <img src={car} style={{height:'80px',margin:'30px auto'}}></img>
                            <Button 
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{ 
                            margin: '1px auto ',
                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                            }}>
                                reserved
                            </Button>
                        </div>
                        :
                        <div>
                            <img src={available} style={{height:'100px',margin:'20px auto'}}/>
                            <Button
                                // type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                style={{ 
                                margin: '1px auto ',
                                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                }}
                                onClick={()=>{this.reserve(3)}}
                            >
                                Book now
                            </Button>
                        </div>
                       
                    }
                        </div>   
                    </Grid>
                    
                </Grid>
                {/* <Grid container style={{margin:'30px'}}>
                    <Grid item xs={3} style={{border : '1px solid white', height:'200px'}}>
                        <div>
                            {this.props.availableSpace.slot4?
                            <div>
                                <img src={car} style={{height:'80px',margin:'30px auto'}}></img>
                                <Button 
                                fullWidth
                                variant="contained"
                                color="primary"
                                style={{ 
                                margin: '1px auto ',
                                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                }}>
                                    reserved
                                </Button>
                            </div>
                            :
                            <div>
                                <img src={available} style={{height:'100px',margin:'20px auto'}}/>
                                <Button
                                    // type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    style={{ 
                                    margin: '1px auto ',
                                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                    }}
                                    onClick={()=>{this.reserve(4)}}
                                >
                                    Book now
                                </Button>
                            </div>
                          
                        }
                        </div>                 
                    </Grid>
                    <Grid item xs={3} style={{border : '1px solid White'}}>
                    <div>
                            {this.props.availableSpace.slot5?
                            <div>
                                <img src={car} style={{height:'80px',margin:'30px auto'}}></img>
                                <Button 
                                fullWidth
                                variant="contained"
                                color="primary"
                                style={{ 
                                margin: '1px auto ',
                                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                }}>
                                    reserved
                                </Button>
                            </div>
                            :
                            <div>
                                <img src={available} style={{height:'100px',margin:'20px auto'}}/>
                                <Button
                                    // type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    style={{ 
                                    margin: '1px auto ',
                                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                    }}
                                    onClick={()=>{this.reserve(5)}}
                                >
                                    Book now
                                </Button>
                            </div>
                         
                        }
                        </div>    
                    </Grid>
                    <Grid item xs={3} style={{border : '1px solid white'}}>
                    <div>
                        {this.props.availableSpace.slot6?
                        <div>
                            <img src={car} style={{height:'80px',margin:'30px auto'}}></img>
                            <Button 
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{ 
                            margin: '1px auto ',
                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                            }}>
                                reserved
                            </Button>
                        </div>
                        :
                        <div>
                            <img src={available} style={{height:'100px',margin:'20px auto'}}/>
                            <Button
                                // type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                style={{ 
                                margin: '1px auto ',
                                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                }}
                                onClick={()=>{this.reserve(6)}}
                            >
                                Book now
                            </Button>
                        </div>
                       
                    }
                        </div>   
                    </Grid>
                    
                </Grid> */}
               </div> 
                :
                 <div></div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        availableSpace:state.searchSlot.availableSpace
    }
    }
const mapDispatchToProps = dispatch => {
    return {
        reserveSlot:(obj)=>dispatch(reserveSlot(obj))
    }
}    
export default  connect(mapStateToProps,mapDispatchToProps)(Space)
