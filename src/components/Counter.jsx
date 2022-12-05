import '../App.css';
import React, {useState, useEffect} from 'react';

export function Counter() {
    const [text, setText] = useState('');
    const [count, setCount] = useState(text.length);
    const [noNewlineCount, setNoNewlineCount] = useState(text.length);
    const [simpleCount, setSimpleCount] = useState(text.length);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    useEffect(() => {
        setCount(text.length);
        setNoNewlineCount(text.replace(/\r?\n/g, '').length);
        setSimpleCount(text.replace(/\r?\n/g, '').replace(/\s/g, '')
            .replace(/[　、。！？「」『』（）；： ,.!?\[\]{}/();:]/g, '').length);
    }, [text]);

    return (
        <div>
            <div className="display">
                <p>現在の文字数 : {count}</p>
                <p>改行を除いた文字数 : {noNewlineCount}</p>
                <p>改行・記号・空白を除いた文字数 : {simpleCount}</p>
            </div>
            <textarea
                rows="20" cols="80" value={text}
                onChange={handleTextChange}
            />
        </div>
    );
}
