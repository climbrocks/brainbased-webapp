import './SideNav.scss';
import './MainDisplay.scss';
import React, { useEffect, useState, useRef } from 'react';
import { Amplify, DataStore, Storage } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import { Flex, View, Button } from "@aws-amplify/ui-react";
import { Category, Video } from '../models';
//import { createTag } from "../graphql/mutations"
import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

const MainDisplay = () => {

    const [categories, setCategories] = useState([]);
    const [videos, setVideos] = useState([]);
    const [initPoster, setInitPoster] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    
    

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await DataStore.query(Category);
            setCategories(response);
        };
        fetchCategories();
        getVideos();
        fetchUrls();                
    }, [])

    async function getVideos() {
       const response = await DataStore.query(Video);
       setVideos(response);
       setInitPoster(response[0].poster);
    };
    
    
    
    async function fetchUrls() {
        try{
            const videoKey = 'Videos/GMT20230519-123202_Recording_640x360_Mp4_Avc_Aac_16x9_1280x720p_24Hz_4.5Mbps_qvbr.mp4';
            const posterKey = 'Images/Neuro-Training-Shorty.jpg';
            //const captionKey = 'Videos/GMT20230519-123202_Recording_640x360_Mp4_Avc_Aac_16x9_1280x720p_24Hz_4.5Mbps_qvbr.srt'

            const [videoUrl, posterUrl] = await Promise.all([
                Storage.get(videoKey),
                Storage.get(posterKey),
                //Storage.get(captionKey)
              ]);
            
            setVideoUrl(videoUrl);
            setPosterUrl(posterUrl);
            //setCaptionUrl(captionUrl);

        } catch (error) {
            console.error('Error fetching URL:', error);
        }
    }

 
    return (

        <View className='main-container'>
            {categories.map((cat) => (
            <Flex
                key={cat.id}
                >
                <Button >
                    {cat.name}
                </Button>
            </Flex>
            ))}
            
            <video key={videoUrl} controls poster={posterUrl} className='image-container'>
                <source src={videoUrl} type="video/mp4"/>
            </video>



        </View>

    );
    
    
}

export default MainDisplay;