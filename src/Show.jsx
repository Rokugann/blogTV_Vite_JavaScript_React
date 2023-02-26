import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import myImage from "./assets/kirbo.png"

export default function Show()
{
  const params = useParams()

  const [show, setShow] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${params.id}?embed=cast`)
    .then((response) => response.json())
    .then((data) => {
      setShow(data)
      console.log(data)
      console.log(show)
  })
  }, [Show])

  return(
    <>
    <h1> {show.name}</h1>
    <img src={show.image?.medium || myImage} alt={"Image of "+show.name}/>
    <p>{show.summary?.replace("<p>", "").replace("</p>", "")}</p>
    </>
  )
}