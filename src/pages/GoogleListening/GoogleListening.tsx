import Box from "@mui/material/Box";
import React, { useEffect, useRef, useState } from "react";

import listening from "../../../assets/google-listening.gif";
import speak from "../../../assets/ZChAX.gif";
import MIC from "../../../assets/google-mic.png";

import "./GoogleListening.css";
import { Typography } from "@mui/material";

import { Capacitor, CapacitorException } from "@capacitor/core";
import { SpeechRecognition as CapacitorSpeech } from "@capacitor-community/speech-recognition";
import { Preferences } from "@capacitor/preferences";
import { useHistory } from "react-router-dom";
import { useIonRouter } from "@ionic/react";

const GoogleListening = () => {
  const SPEECH_PERMISSION = "isSpeechGranted";
  const router = useIonRouter();
  const [isNativePlatform] = useState<boolean>(Capacitor.isNativePlatform);
  const [speechRecognitionStarted, setSpeechRecognitionStarted] =
    useState<boolean>(true);
  const [instruction, setInstruction] = useState<string>("Listening...");
  const [searchString, setSearchString] = useState<string>("");

  const handlePermissions = async () => {
    await CapacitorSpeech.requestPermissions();
    const hasSpeechPermission = await CapacitorSpeech.checkPermissions();
    if (hasSpeechPermission.speechRecognition === "denied") {
      await Preferences.set({ key: SPEECH_PERMISSION, value: "false" });
      setSpeechRecognitionStarted(false);
      setInstruction("Tap the mic and allow the microphone to record....");
    } else if (hasSpeechPermission.speechRecognition === "granted") {
      await Preferences.set({ key: SPEECH_PERMISSION, value: "true" });
    }
  };

  useEffect(() => {
    if (isNativePlatform) {
      const checkPermission = async () => {
        const isSpeechGranted = await Preferences.get({
          key: SPEECH_PERMISSION,
        });
        if (isSpeechGranted.value ? !JSON.parse(isSpeechGranted.value) : true) {
          handlePermissions();
        } else {
          setSpeechRecognitionStarted(true);
          setInstruction("Listening...");
        }
      };
      checkPermission();
    }
  }, []);

  useEffect(() => {
    if (!isNativePlatform) {
      if (speechRecognitionStarted) {
        const handleSpeech = () => {
          const SpeechRecognition = window.webkitSpeechRecognition;
          const recognition = new SpeechRecognition();
          if (!SpeechRecognition) {
            setSpeechRecognitionStarted(false);
            setInstruction("Speech recognition not supported.");
          }
          recognition.lang = "en-US";
          recognition.onspeechend = async () => {
            setInstruction("Speech ended...");
          };
          recognition.onresult = async (event: any) => {
            const transcript = event.results[0][0].transcript;
            setInstruction(transcript);
          };
          recognition.onnomatch = async () => {
            setInstruction("Sorry, didn't catch that.");
          };

          recognition.onerror = async (event: any) => {
            if (event.error === "no-speech") {
              setSpeechRecognitionStarted(false);
              setInstruction(
                "Tap the mic, then speack into your device for quick answers"
              );
            } else {
              setInstruction("Sorry, Try again...");
              setSpeechRecognitionStarted(false);
            }
          };
          recognition.start();
        };
        handleSpeech();
      }
    } else {
      interface SpeechRecognitionResult {
        matches?: string[];
        status?: string;
      }

      const handleCapSpeech = async () => {
        if (speechRecognitionStarted) {
          try {
            const text: SpeechRecognitionResult = await CapacitorSpeech.start({
              language: "en-US",
              maxResults: 1,
            });
            if (
              text.status === "success" &&
              text.matches &&
              text.matches.length > 0
            ) {
              setSpeechRecognitionStarted(false);
              setInstruction(text.matches[0]);
              setTimeout(() => {
                router.push(
                  `/search?searchTerm=${encodeURIComponent(text.matches && text.matches[0] ? text.matches[0] : "")}`,
                  "forward"
                );
              }, 500);
              await CapacitorSpeech.stop();
              // Route to /search with the search string in text input (not modal - results page) and results from an api
            }
          } catch (error) {
            if (
              error instanceof CapacitorException &&
              error.message === "No match"
            ) {
              setSpeechRecognitionStarted(false);
              setInstruction(
                "Tap the mic, then speack into your device for quick answers"
              );
              await CapacitorSpeech.stop();
            }
          }
        }
      };
      handleCapSpeech();
    }
  }, [speechRecognitionStarted]);
  return (
    <>
      <Box component="div" className="listening_wrapper">
        <Box component="div" className="microphone_animation">
          <Box component={"div"} className="mic-instruction">
            {speechRecognitionStarted ? (
              <Box component="img" src={listening} className="google-listen" />
            ) : (
              <Box
                component={"img"}
                src={MIC}
                className="google-mic"
                onClick={() => {
                  setSpeechRecognitionStarted(true);
                  setInstruction("Listening...");
                }}
              />
            )}
            <Typography className="instruction-text">{instruction}</Typography>
          </Box>
          <Box component="img" src={speak} className="google-speak" />
        </Box>
      </Box>
    </>
  );
};

export default GoogleListening;
