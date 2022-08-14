import React, { useEffect, useState } from "react";
import ListService from "../API/ListService";
import List from "../components/List";
import Container from '@mui/material/Container'
import { Typography, TextField, Button } from "@mui/material";
import MovieService from "../API/MovieService";


function Lists() {
  const [lists, setLists] = useState([]) 
  const [newList, setNewList] = useState([])
  

  async function getList() {
      const lists = await ListService.getAll();
      setLists(lists)
  }

  async function addNewList(){
    const newLists = await ListService.createList(newList);
    setLists(newLists)
    setNewList('')
  }

  async function deleteList(id) {
    const lists = await ListService.deleteOne(id);
    setLists(lists)
}   

  useEffect(() => {
    getList()
  }, [])
  
  return (
    <div className="App">
        <Container maxWidth="md">
        
        <Typography variant="h3" marginBottom={10}>Page with lists</Typography>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 10, width: '50%'}}>
        <TextField
          id="name"
          label=""
          value={newList}
          onChange={e => setNewList(e.target.value)}
          
        />
        <Button variant="contained" onClick={addNewList}>
          Add new list
        </Button>
        </div>
        
        
            {lists.map((elem, index) => 
                <List list={elem} key={index} onClick={() => deleteList(elem._id)}/>
            )}
        </Container>
    </div>
  );
}

export default Lists;
