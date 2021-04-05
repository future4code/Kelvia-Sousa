import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { axiosConfig, baseUrl } from '../parameters';
import Details from '../pages/Details';

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
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  margin: 5px
`

const ButtonDelete = styled.button`
  color: red;
  cursor: pointer;
`

const Add = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    border: 2px solid black;
    border-radius: 10px;
    width: 80%;
    font-size: 14px;
`

export default class View extends React.Component {
    state = {
        playlists: [],
        name: '',
        artist:'',
        url:'',
        seeTracks: false,
        add: false
    }

    seeAllTracks = () => {
        this.setState({seeTracks: !this.state.seeTracks})
    }

    addTracks = () => {
        this.setState({add: !this.state.add })
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
        alert('Sorry, try adding the song again')
      })
  }

    
    render(){
        const allPlaylists = this.state.playlists.map((list) => {
            return (
                <Lista key={list.id}>
                    <h3>{list.name}</h3>
                    <button onClick={this.addTracks}>Add your favorite songs</button>
                    {this.state.add ? 
                        <Add>
                            <label>Song Name</label>
                            <input type='text' value={this.state.name} onChange={this.handleName}/>
                            <label>Artist Name</label>
                            <input type='text' value={this.state.artist} onChange={this.handleArtist}/>
                            <label>Song link</label>
                            <input type='url' value={this.state.url} onChange={this.handleUrl}/>
                            <button onClick={() => this.addTrackToPlaylist(list.id)}>Add Song</button>
                        </Add> :
                    <div/>
                    }
                    
                    <br/>
                    <ButtonDelete onClick={() => this.deletePlaylist(list.id)}> Delete Playlist</ButtonDelete>
                    <br/>
                    <button onClick={this.seeAllTracks}>See Tracks</button>
                    {this.state.seeTracks ? <Details/> : <div/>}
                </Lista>
            )
        });
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