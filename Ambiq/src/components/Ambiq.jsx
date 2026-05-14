import {useRef} from "react";
//image import
import rainsvg  from './asset/icons/rain.svg';
import boat from './asset/icons/boat.svg';
//import wave from './asset/icons/wave.svg';
import birds from './asset/icons/birds.svg';
import train from './asset/icons/train.svg';
//sound files
import reinwav from './asset/wav/rain.wav';
import boatwav from './asset/wav/sea_boat.wav';
import birdwav from './asset/wav/woodthrushinmorningshawneeforestmay2.wav';
//import trainwav from './asset/wav/train.wav'
import './Ambiq.css'
function Ambiq() {
    const audioRef = useRef(null);
    
    return(
        <div>
                <div className="appContainer">
                    <h3 className="heading">Ambiq</h3>                        
                        <div className="iconsaudiocontainer">
                            <div className="backgroundimage">
                                <img src={rainsvg}/>
                                <audio ref={audioRef} src={reinwav} className="sound"></audio>
                                <button onClick={()=>audioRef.current.play()}>▶</button>
                                <button onClick={()=>audioRef.current.pause()}>⏹</button>
                                
                            </div>
                        </div>
                         <div className="iconsaudiocontainer">
                            <div className="backgroundimage">
                                <img src={boat}/>
                                <audio ref={audioRef} src={boatwav} className="sound"></audio>
                                <button onClick={()=>audioRef.current.play()}>▶</button>
                                <button onClick={()=>audioRef.current.pause()}>⏹</button>
                                
                            </div>
                        </div>
                         <div className="iconsaudiocontainer">
                            <div className="backgroundimage">
                                <img src={birds}/>
                                <audio ref={audioRef} src={birdwav} className="sound"></audio>
                                <button onClick={()=>audioRef.current.play()}>▶</button>
                                <button onClick={()=>audioRef.current.pause()}>⏹</button>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>
    )
}
export default Ambiq;