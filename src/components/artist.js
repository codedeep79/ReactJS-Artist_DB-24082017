import React, {Component} from 'react';
import Header from './header';
import AlbumList from './albumlist';

const URL_ARTISTS = "http://localhost:3004/artists";

class Artist extends Component{
    constructor(props){
        super(props)

        this.state = {
            artist:''
        }
    }

    componentDidMount() {
        fetch(`${URL_ARTISTS}/${this.props.match.params.artistid}`, {
            method: 'GET'
        })
        .then(response => response.json())
        .then(json => {
            this.setState({artist:json})
        })
    }

    render(){
        return(
            <div>
                <Header></Header>
                <div className="artist_bio">
                        <div className="avatar">
                            <span style={{background:`url('/images/covers/${this.state.artist.cover}.jpg') no-repeat`}}></span>
                        </div>
                        <div className="bio">
                            <h3>{this.state.artist.name}</h3>
                            <div className="bio_text">
                                {this.state.artist.bio}
                            </div>
                        </div>
                        <AlbumList albumList={this.state.artist.albums}/>
                </div>
            </div>
        );
    }
}

export default Artist;