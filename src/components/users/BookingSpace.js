import React, { Component } from 'react'
import {connect} from 'react-redux'
import MaterialUIPickers from './SearchForm'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Space from './Space'

export class BookingSpace extends Component {
    state={
        obj:''
    }
    spaceCheak = (obj)=>{
        this.setState({obj})
    }
    render() {
        return (
            <Container>
                <Grid container>
                    <Grid item xs={12} lg={2} sm={12} xl={2}>
                        <MaterialUIPickers spaceCheak={this.spaceCheak.bind(this)}/>
                    </Grid>
                    <Grid item xs={12} lg={10} sm={12} xl={10}>
                        <Space search={this.state.obj}/>
                    </Grid>
                </Grid>

            </Container>
        )
    }
}

export default BookingSpace
