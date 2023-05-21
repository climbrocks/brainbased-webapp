import './SideNav.scss';
import './MainDisplay.scss';
import React, { useEffect, useState } from 'react';
import { Amplify, DataStore } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import { Flex, View, Text, AmplifyS3Image } from "@aws-amplify/ui-react";
import { Category } from '../models';

import awsconfig from "../aws-exports";
Amplify.configure(awsconfig);

const MainDisplay = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await DataStore.query(Category);
            console.log(response);
        };
        fetchCategories();
    }, [])
      

    return (

        <View className='main-container'>
            
        </View>

    );
    
    
}

export default MainDisplay;