import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { axiosConfig, baseUrl } from '../parameters';

const PlaylistContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
` 

const ListsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 100px;
` 

const Lista = styled.li`
  display: flex;
  flex-direction: column;
  width: 40vh;
  justify-content: space-between;
  border-bottom: 5px solid black;
  padding: 10px;
`

const ButtonDelete = styled.button`
  color: red;
  cursor: pointer;
`

export default class View extends React.Component {
    state = {
        playlists: [],
        name: '',
        artist:'',
        url:''
    }

    handleName = (event) => {
      this.setState({name: event.target.value})
    };
    handleArtist = (event) => {
      this.setState({artist: event.target.value})
    };
    handleUrl = (event) => {
      this.setState({url: event.target.value})
    };

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
                    alert('The playlist has been deleted ')
                })
                .catch((error) => {
                    console.log(error.response.data)
                })
        }     
    }

  addTrackToPlaylist = (playlistId) => {
      const body = {
        name: this.state.name,
        artist: this.state.artist,
        url: this.state.url
      };
      console.log(body)
        axios.post(`${baseUrl}/${playlistId}/tracks`, body, axiosConfig)
      .then((response) => {
        /* this.getAllPlaylists() */
        alert('Success. Your song has been added')
        this.setState({name: '', artist: '', url: ''})
        console.log(response.data.message)
      })
      .catch((error) => {
        console.log(error.response.data.message)
        /* alert('Sorry, try adding the song again') */
      })
  }


    render(){
        const allPlaylists = this.state.playlists.map((list) => {
            return (
                <Lista key={list.id}>
                    <p>{list.name}</p>
                    <ButtonDelete onClick={() => this.deletePlaylist(list.id)}> Delete </ButtonDelete>
                    
                    <h4>Add a song</h4>
                    <label>Song Name</label>
                    <input type='text' value={this.state.name} onChange={this.handleName}/>
                    <label>Artist Name</label>
                    <input type='text' value={this.state.artist} onChange={this.handleArtist}/>
                    <label>Song link</label>
                    <input type='url' value={this.state.url} onChange={this.handleUrl}/>
                    <button onClick={() => this.addTrackToPlaylist(list.id)}>Add</button>
                </Lista>
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