import React from 'react';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow.js";
import VideoRow from "./VideoRow.js";
import "./ChannelRow.css";
import './SearchPage.css';
function SearchPage() {
     return (
          <div className="searchPage"> 
               <div className="searchPage__filter">
                    <TuneOutlinedIcon />
                    <h2>FILTER</h2>
               </div>
               <hr/>
               <ChannelRow
               image= "https://yt3.ggpht.com/ytc/AKedOLR-pT_JEsz_hcaA4Gjx8DHcqJ8mS42aTRqcVy6P7w=s176-c-k-c0x00ffffff-no-rj-mo"
               channel="Independent Television"
               verified
               subs="5.61M"
               noOfVideos={70199}
               description="Welcome to the official Independent Television YouTube channel. Independent Television is a 24/7 news oriented satellite channel of Bangladesh. This channel is broadcasting news and talk shows related to news and current affairs, business, sports, entertainment and many more.
               Contents of Independent Television are available In this YouTube channel with regular updates.
               Tune into Independent Television for 24 hour news on TV. Check out our facebook, twitter and instagram for regular updates."

               />
               <hr/>

               <VideoRow 
               views="1.4M"
               subs="659K"
               description="Some description..."
               timestamp="59 seconds ago"
               channel="Judo Sloth"
               title=" Let's have fun together"
               image="https://i.ytimg.com/vi/ywabq-jP01E/hq720.jpg?sqp=-%E2%80%A6AFwAcABBg==&rs=AOn4CLBwaCoVIjH1kBXk4ZMa3j_5s_2PZg"

               />
                <VideoRow 
               views="1.4M"
               subs="659K"
               description="Some description..."
               timestamp="59 seconds ago"
               channel="Judo Sloth"
               title=" $499 Phone"
               image="https://i.ytimg.com/vi/SG3Zz_pfbOE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDMCQzgwaj_lOM9vymboqkByhl2SA"

               />
                <VideoRow 
               views="1.4M"
               subs="659K"
               description="Some description..."
               timestamp="59 seconds ago"
               channel="Judo Sloth"
               title=" Galaxy Z Fold"
               image="https://i.ytimg.com/vi/ek9bmIlDens/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDG6eEYNrXKTRMYhVxtu3JY8I5IXg"

               />
                <VideoRow 
               views="1.4M"
               subs="659K"
               description="Some description..."
               timestamp="59 seconds ago"
               channel="Judo Sloth"
               title=" Galaxy Z Flip"
               image="https://i.ytimg.com/vi/SvMhWghZ_EE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDt4-vBJXDohMCAWOfSaHXEX3bTFQ"

               />

          </div>
     )
}

export default SearchPage
 