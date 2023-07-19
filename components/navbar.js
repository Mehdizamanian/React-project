import React, { Component } from 'react';
import '../App.css';
class Navbar extends Component {
    state = {
        owner:"Meyti website"

    }
    btncss={
        color:'white',
        backgroundColor:'green',width:'15vh',
        
    }
    

    shoot=()=>{
        this.setState({owner :"this is meyti who are intrestedin react and dinamic world"})
    }

    render() {
        return (
            <div className='navvbar'>

                <div className='resume'>
                    <h1>welcome to {this.props.resume}
                    <br/>
                     <button style={this.btncss} onClick={this.shoot}> add</button></h1>
                     <label>{this.state.owner}</label>
                </div>

               

                {/* <ul>
                    <li>biographi, </li>
                    <li>situation</li>
                    <li>country</li>
                    <li>success</li>
                </ul> */}
            </div>
        );
    }
}

export default Navbar;