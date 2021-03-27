import React from 'react';
import axios from 'axios';
import { axiosConfig, baseUrl } from '../parameters';

export default class Details extends React.Component {
    state = {
        tracks: []
    }

    componentDidMount(){
        this.getPlaylistTracks()
    }

   
    getPlaylistTracks = (playlistId) => {
         axios.get(`${baseUrl}/${playlistId}/tracks`, axiosConfig)
            .then((response) => {
                this.setState({tracks: response.data.results.tracks})
                console.log(response.data)
                
            }).catch((error) => {
            console.log(error.response.data)
            })
    }

    render(){
        const allTracks =this.state.tracks.map((list) => {
            return(
                <div>
                    <li key={list.id}>
                        {list.tracks}
                    </li>
                </div>
            )
        })
        return(
            <div>
                <h4>All Tracks</h4>
                <div>
                    {allTracks}
                </div>
            </div>
        )
    }
}