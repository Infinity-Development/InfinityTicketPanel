import React, { useState, useEffect } from "react";
import "../../transcript.css";
import useAxios from "axios-hooks";
import Message from "./message";
import { Redirect } from "react-router-dom";
import Embed from "./embed";

function TranscriptPage(props) {
  const { id } = props.match.params;

  const [messages, setMessages] = useState();
  const [closedBy, setClosed] = useState();
  const [redirect, setRedirect] = useState();
  const [openedBy, setOpened] = useState();

  const [{ data, loading, error }] = useAxios(
    `https://transcripts.botlist.site/api/v1/get/${id}`
  );

  useEffect(() => {
    if (data) {
      if (data.ticket) {
        setMessages(data.ticket.data);
        setClosed(data.ticket.closedBy);
        setOpened(data.ticket.openedBy);
      } else {
        setRedirect("/404");
      }
    }
  }, [data]);

  if (redirect) return <Redirect to="/404"></Redirect>;
  if (error) return <Redirect to="/404"></Redirect>;
  if (loading) return <h1>Loading.. Please Wait</h1>;

  return (
    <div>
      <div className="ts-info-holder">
        <div className="img-holder">
          <img src={"/logo.png"} alt="Hmmm"></img>
        </div>
        <div className="ticket-info">
          <h1>Infinity Bot List</h1>
          <h3>closed-{id}</h3>
          <h3>{messages?.length + 1} Messages</h3>
        </div>
      </div>
      <br></br>
      <hr></hr>
      <div className="chat-info opened">
        <h3>Opened By {openedBy?.username}</h3>
        <p>({openedBy?.id})</p>
      </div>
      {messages?.map((message) => {
        let username = message.username;
        let avatar = message.avatar;
        let content = message.content;
        let attachments = message.attachments;
        let attachment;

        if (attachments.length <= 1) {
          attachment = attachments
            .map((attachemnt_) => {
              if (attachemnt_ === "") return false;
              return (
                <img src={attachemnt_} className="message-attachment" alt="Hmmm"></img>
              );
            })
            .filter(Boolean);
        }

        let embeds = message.embeds.map((embed) => {
          console.log(`#${embed.color}`);
          return (
            <Embed
              title={embed.title}
              fields={embed.fields}
              description={embed.description}
              color={embed.color}
            ></Embed>
          );
        });

        let time = message.time;

        return (
          <Message username={username} timestamp={time} pfp={avatar}>
            <p>{content}</p> {embeds} {attachment}
          </Message>
        );
      })}

      <div className="chat-info">
        <h3>Closed By {closedBy?.username}</h3>
        <p>({closedBy?.id})</p>
      </div>
    </div>
  );
}

export default TranscriptPage;
