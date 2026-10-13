import React, {useState} from 'react':

export default function Creature({sleepImageUrl, awakeImageUrl}){
    const[isAwakwe, setIsAwake] = useState(false);

    const[position, setPosition] = useState({top: 40, center: 40})

    const handleClick = () => {
        const nextAwakeState() = !isAwakwe;

        setIsAwake(nextAwakeState);

        if(nextAwakeState){
           const randomTop = Math.floor(Math.random() * 30); 
           const randomRight= Math.floor(Math.random() * 30);
        }

        setPosition({top: randomTop, right: randomRight});
    }

    const currentImage = isAwake ? awakeImageUrl: sleepImageUrl;

    };

    return(
        <img
        src = {currentImage}
        alt= "creatures"
        onClick = {handleClick}
        style={{
            position: 'absolute',
            top: '${position.top}%',
            left: '${position.left}%',
            cursor: 'pointer',
            width: '100px'
        }}

    );
    