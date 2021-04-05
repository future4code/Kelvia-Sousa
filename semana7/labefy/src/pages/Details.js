import React from 'react';
import axios from 'axios';
import { axiosConfig, baseUrl } from '../parameters';

export default class Details extends React.Component {
    state = {
        tracksList: []
    }

    componentDidMount(){
        this.getPlaylistTracks()
    }

   
    getPlaylistTracks = async (playlistId) => {
        try{
            const response = await axios.get(`${baseUrl}/${playlistId}/tracks`, axiosConfig)
            this.setState({tracksList: response.data.result.tracks})
            console.log(response.data)
        }catch(error){
            console.log(error.response.data)
        }
    }

    render(){
        const allTracks =this.state.tracksList.map((list) => {
            return(
                <div key={list.id}>
                    <p>{list.tracks}</p>
                </div>
            )
        })
        return(
            <div>
                <h4>All Tracks</h4>
                {allTracks}
            </div>
        )
    }
}