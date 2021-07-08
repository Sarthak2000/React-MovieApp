import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
class Header extends Component {
    state = {
        inputvalue:""
    }

    handlekeys=(e)=>{
        this.setState({
            inputvalue:e.target.value
        })
        this.props.setmovie(e.target.value);

        if(e.target.value==""){
            this.props.setmovie();
        }
    }
    render() {
        return (
            <div className="header">
                <div className="Logo">
                    <img src="img\logo.png"></img>
                </div>
                <div className="col-sm-3 my-1">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">Search</div>
                        </div>
                        <input type="text" className="form-control srch" placeholder="Batman" value={this.state.inputvalue} onChange={this.handlekeys}></input>
                    </div>
                </div>
                <div className ="Header-Links">
                    <div className="header-link">
                        <Link to ="/fav">Favourites</Link>
                    </div>
                    <div className="header-link">
                        <Link to ="/moviepage">Movie-Pages</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;