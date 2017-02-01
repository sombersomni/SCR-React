import React from 'react';
import Nav from '../components/Nav';

class ArtistProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            header: "images/artist-header.jpg",
            soundcloud: "",
            products: [
                {
                  art: ""
                }
            ]
        }
    }
    render(){
        return (
            <div className="main-container">
                <br />
                <div className="container">
                    <Nav />
                </div>

                <div className="container">
                    <h1 className="page-header">{this.props.params.username}</h1>
                    <img src={this.state.header} alt="" className="header-photo"/>

                    <div className="col-md-9">
                        <h2>About</h2>
                        <div className="well">
                            Main information
                        </div>
                    </div>

                    <div className="col-md-3">
                        <h2>Product</h2>
                        <div className="well">
                            Product information
                        </div>
                        <br />
                        <h2>Links</h2>
                        <div className="well">
                            Product information
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default ArtistProfile