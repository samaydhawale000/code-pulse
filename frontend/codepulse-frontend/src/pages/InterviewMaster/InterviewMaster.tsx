import React from "react";
import Timer from "./Timer";
import styled from "styled-components";
import micon from "./images/micon.png";
import micoff from "./images/micoff.png";
import logo from "./images/logo.jpg";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

// import { useSpeechSynthesis } from 'react-speech-kit';
import { TextToSpeech, Positions, Sizes } from "tts-react";

const InterviewMaster = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  // const { speak, voices } = useSpeechSynthesis();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const startListening = () => {
    SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  // const handleListen = () => {
  //   speak({ text: transcript, voice: voices[4] });
  // };

  const handleReset = () => {
    resetTranscript();
  };

  return (
    <>
      <NAV>
        
          <div>
           <a href="/">
            <img src={logo} style={{width :"25%"}}/>
           </a>
          </div>

          <DIV0 className="head">
            <h1>Interview Master 1.0.0</h1>
          </DIV0>
          <DIV1>
            <Timer />
          </DIV1>

      </NAV>


        <div style={{width:"20%", margin:"auto"}}>
          <h1>User : </h1>
        </div>
        
      <DIV2>
        <div className="div1">


          <p style={{color :"white", backgroundColor :"#0b6947", borderRadius : "10px",padding:"5px"}}>Question</p>

          <textarea
            className="textfield"
            cols={20}
            rows={5}
            wrap="soft"
          ></textarea>

          <div>
            <button
              className="nextbtn"
              style={{ marginTop: "20px" }}
              disabled={transcript.length === 0}
              onClick={() => {
                alert(`hi`);
              }}
            >
              Next Question
            </button>
          </div>
        </div>

        <div className="div2">
          <p style={{color :"white", backgroundColor :"#0b6947", borderRadius : "10px",padding:"5px"}} >Your Response</p>

          <div className="div2-1">
            <TextToSpeech
              markTextAsSpoken
              align="vertical"
              size={Sizes.SMALL}
              position={Positions.TL}
            >
              <textarea
                className="textfield"
                value={transcript}
                cols={20}
                rows={5}
                wrap="soft"
                placeholder="Your Answer..."
              >
                {transcript}
              </textarea>
            </TextToSpeech>
          </div>

          <div className="div2-2">
            {/* <p>Microphone: {listening ? "on" : "off"}</p> */}

            {listening ? (
              <img onClick={stopListening} src={micoff} />
            ) : (
              <img onClick={startListening} src={micon} />
            )}
            <button className="reset" onClick={handleReset}>
              Reset
            </button>

            <button
              className="reset"
              disabled={transcript.length === 0}
              onClick={() => {
                alert(`hi`);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </DIV2>
    </>
  );
};

export default InterviewMaster;


const NAV = styled.div`
  // border : 1px solid red;
  width : 90%;
  margin :auto;
  display : flex;
  justify-content : center;
  align-items : center;
  margin-bottom : 60px;
`;



const DIV0 = styled.div`
  width: 20%;
  margin: auto;
  text-align: center;
  // border: 1px solid;
`;

const DIV1 = styled.div`
  width: 10%;
  margin-left: auto;
  margin-right: 20px;
  margin-top: 20px;
  text-align: center;
  padding: 5px 20px;
  padding-bottom: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  border: 1px solid;
`;
const DIV2 = styled.div`
  width: 70%;
  margin-left: 260px;
  margin-right: auto;
  margin-top: 20px;
  text-align: center;
  padding: 35px 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;

  background-color : #C8E6C9;

  .maindiv {
    border: 1px solid;
  }

  .textfield {
    width: 70%;
    resize: none;
    margin-top: 20px;
    overflow: auto;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    padding: 20px;
    border-radius: 10px;
  }

  .div1, .div2 {
    // border: 1px solid;
    width: 40%;
    padding : 20px;
    border-radius : 20px;
  }

  .div2 img {
    width: 12%;
    border-radius: 50%;
    padding: 8px;
    background-color: #26a69a;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
      rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
      rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  }

  .div2 img:hover {
    scale: 1.2;
    transition: 500ms;
  }

  .div2-1 {
    // background-color: red;
  }

  .div2-2 {
    width: 70%;
    display: flex;
    margin: auto;
    justify-content: space-around;
    padding: 10px 20px;
    align-items: center;
  }

  .reset,
  .nextbtn {
    font-size: 18px;
    padding: 8px 15px;
    border-radius: 10px;
    background-color: #0b6947;
    border: none;
    color: white;
  }

  .reset:hover,
  .nextbtn:hover {
    cursor: pointer;
    background-color: #26a69a;
    transform: scale(1.1);
    transition: 500ms;
  }
`;
