import React,{useState, useEffect} from 'react';
import {useStateContext} from '../context';


const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaign, setCampaign] = useState([]);

  const {address, contract, getCampaign} = useStateContext();

  const fetchCampaigns = async() => {
    setIsLoading(true);
    const data = await getCampaign();
    setCampaigns(data);
    isLoading(false);
  }

  useEffect(() => {
    if(contract)
      fetchCampaigns
  },[address,contract]);

  return (
    <div>
    
    </div>
  )
}

export default Home
