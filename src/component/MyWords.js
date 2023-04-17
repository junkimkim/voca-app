import { useState } from 'react';
import { useSelector } from "react-redux";
import WordDelete from './WordDelete';

function MyWords() {

    let word = useSelector((state) => { return state.words })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>영단어</th>
                        <th>우리말 뜻(누르면 예문)</th>
                        <th>뜻 확인</th>
                        <th>단어삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {word.map((word) => (
                        <WordDelete word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MyWords;