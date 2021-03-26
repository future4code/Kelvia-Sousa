import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { axiosConfig, baseUrl } from '../parameters';

const PlaylistContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
` 

const ListsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    justify-content: space-between
` 
const ButtonDelete = styled.span`
  color: red;
  cursor: pointer;
`

export default class View extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount() {
       this.getAllPlaylists()
    }

    getAllPlaylists = async () => {
        try{
            const response = await axios.get(baseUrl, axiosConfig)
            this.setState({playlists: response.data.result.list})
            console.log(response.data)
        }catch(error){
            console.log(error)
        }
    }

    deletePlaylist = (playlistId) => {
        if(window.confirm('This action will delete that playlist. Do you really want to continue? ')) {
            axios.delete(`${baseUrl}/${playlistId}`, axiosConfig)
                .then((response)=>{
                    console.log(response)
                    this.getAllPlaylists()
                    alert('deleted playlist')
                })
                .catch((error) => {
                    console.log(error.response.data)
                })
        }     
    }


    render(){
        const allPlaylists = this.state.playlists.map((list) => {
            return (
                <div key={list.id}>
                    <p>{list.name} 
                    <ButtonDelete onClick={() => this.deletePlaylist(list.id)}> 
                    X
                    </ButtonDelete>
                    </p>
                    
                </div>
            )
        })
        return(
            <PlaylistContent>
                <h1>All your Playlists</h1>
                <ListsContainer>
                    {allPlaylists}
                </ListsContainer>
            </PlaylistContent>
        )
    }
} 