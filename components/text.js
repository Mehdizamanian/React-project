import React, { useState } from 'react';



const Textbio = () => {

    const [text, settext] = useState([
        { text: 'My name is mehdi who are soo willing now reactreact junior intership', skill: 'React junior internship' }
    ])

    const change = () => {
        settext([{ text: "what r u looking at ??", skill: "yoooooooooo" }])
        settext([...text,{text:"u dont need more to knoe ", skill:"the ennd"}])
    }



    return (
        <div>
            {text.map(texts => <h2>{texts.text}</h2>)}
            <button onClick={change}>change hook</button>
        </div>
    );
}

export default Textbio;
