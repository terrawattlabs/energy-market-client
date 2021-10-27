import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap-v5";
import { useParams } from "react-router";




export const Overview: React.FC = () => {

  const [thingobject, sethingobject] = useState({isLoading: true, data: null});
  const { thing }: any = useParams();

  const useFetch = (url: string)=>{

    const getDataFromAPI = async (url: string) =>{
        const res = await fetch(url, {headers: {'Access-Control-Allow-Origin': "*"}});
        let data = await res.json();
        sethingobject({isLoading: false, data: data})
    }   
    useEffect(()=>{
        getDataFromAPI(url)
    }, [])
  
    return thingobject
  };

  const handleSubmit = async (e) =>{
    e.preventDefault();
    let updateObject = {
      name: thingobject.data.name
    }
    const updateDB = await fetch(`${process.env.REACT_APP_BACKEND_URL}/energio/updateThing/${thing}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateObject)
    })
    console.log(thingobject)

  }

  const thingNameUpdateHandler = (event) => {

    const newName = event.target.value;
    let updateObj = {
      isLoading: false,
      data: {
        ...thingobject.data,
        name: newName
      }
    };
    sethingobject(updateObj)
}

  const fullThing = useFetch(`${process.env.REACT_APP_BACKEND_URL}/energio/getThing/${thing}`);

  if(fullThing.isLoading && thingobject !== null){
    return (<p>Loading...</p>)
  } if(fullThing !== null) {
    console.log(thingobject);
    return(
      <>
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="thingForm.ThingNameInput">
          <Form.Label>Thing Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter a name for this thing..." 
            value={thingobject.data.name}
            onChange={(event)=>thingNameUpdateHandler(event)} 
            />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Save {thingobject.data.name}
        </Button>

      </Form>
      Current Orders
      {thingobject.data.orders.map((order)=>{
          return (
            <div key={order._id} className="mb-3">
              {order.type} of {`$`}{order.price} for {order.amount} watts
            </div>
            )
        })}
      </>
    )
  } else {
    return(
      <>
        Woops, something went wrong
      </>
    )
  }
};