import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
     return (
          <div className="recommendedVideos"> 
               <h2>Recommended</h2>
               <div className="recommendedVideos__videos">
               <VideoCard 
               views="1.4M"
               subs="659K"
               description="Some description..."
               timestamp="59 seconds ago"
               channel="Judo Sloth"
               title=" Let's have fun together"
               image="https://i.ytimg.com/vi/ywabq-jP01E/hq720.jpg?sqp=-%E2%80%A6AFwAcABBg==&rs=AOn4CLBwaCoVIjH1kBXk4ZMa3j_5s_2PZg"

               />
             <VideoCard 
               views="1.4M"
               subs="659K"
               description="Some description..."
               timestamp="59 seconds ago"
               channel="Judo Sloth"
               title=" $499 Phone"
               image="https://i.ytimg.com/vi/SG3Zz_pfbOE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMCQzgwaj_lOM9vymboqkByhl2SA"

               />
                <VideoCard 
               views="1.4M"
               subs="659K"
               description="Some description..."
               timestamp="59 seconds ago"
               channel="Judo Sloth"
               title=" Galaxy Z Fold"
               image="https://i.ytimg.com/vi/ek9bmIlDens/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDG6eEYNrXKTRMYhVxtu3JY8I5IXg"

               />
                <VideoCard 
               views="1.4M"
               subs="659K"
               description="Some description..."
               timestamp="59 seconds ago"
               channel="Judo Sloth"
               title=" Galaxy Z Flip"
               image="https://i.ytimg.com/vi/SvMhWghZ_EE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDt4-vBJXDohMCAWOfSaHXEX3bTFQ"

               />
                    
               </div>
          </div>
     )
}

export default RecommendedVideos
