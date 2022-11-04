import React from 'react';
import { Link } from 'react-router-dom'

export default function Buttons() {
    return(
        <section>
            <a href='https://twitter.com/BimbolaDgreat?t=dbmTRlVMNF8FHWp6HTGWxw&s=35' id='twitter'>Twitter Link</a>
            <a href='' id='slack'>BimbolaA</a>
            <a href='https://training.zuri.team/' id='btn__zuri'>Zuri Training</a>
            <a href='http://books.zuri.team' id='books'>Design & Coding Books</a>
            <a href='https://books.zuri.team/python-for-beginners?ref_id=BimbolaA' id='book__python'>Buy Books That Teach Python</a>
            <a href='https://background.zuri.team' id='pitch'>Get Value for Money</a>
            <a href='https://books.zuri.team/design-rules' id='book__design'>Learn More Pay Nothing</a>
            <a href="./Contact" id='contact'>Contact</a>
        </section>
    );
}