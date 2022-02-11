import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import './style.css';

//component file
function MyForm() {
	var [name, setName] = useState("");

    const func = (e) => {
		e.preventDefault();
		var rdm = Math.floor(Math.random() * (11 - 100)) + 100;		
		var vfir = Math.trunc(rdm / 10);
		var csec = rdm % 10;
		var encryptedtext = [];
		for(let i=0; i<name.length; i++)
		{
			if (name.charAt(i) == " ")
			{
				encryptedtext[i] = " ";
			}
			else if (name.charAt(i).match(/[aeiou]/g))
			{
				encryptedtext[i] = String.fromCharCode((((name.charCodeAt(i) + vfir - 97) % 26) + 97));
			}
			else if (name.charAt(i).match(/[AEIOU]/g))
			{
				encryptedtext[i] = String.fromCharCode((((name.charCodeAt(i) + vfir - 65) % 26) + 65));
			}
			else if (name.charAt(i).match(/[a-z]/g))
			{
				encryptedtext[i] = String.fromCharCode((((name.charCodeAt(i) + csec - 97) % 26) + 97));
			}
			else if (name.charAt(i).match(/[A-Z]/g))
			{
				encryptedtext[i] = String.fromCharCode((((name.charCodeAt(i) + csec - 65) % 26) + 65));
			}
		}
		encryptedtext = encryptedtext.join('');
		document.getElementById('rdmk').innerHTML = rdm;
		document.getElementById('ori').innerHTML = name;
		document.getElementById('res').innerHTML = encryptedtext;
    }

    return (
		<div>
			<form onSubmit={func}>
				<input id="text" type="text" placeholder="Enter text..." onChange={(e) => setName(e.target.value)}/>
				<button>Encrypt</button>
			</form>
			<div>
				<p>Random key:</p><span id="rdmk"></span>
			</div>
			<div>
				<p>Original text:</p><span id="ori"></span>
			</div>
			<div>
				<p>Encrypted text:</p><span id="res"></span>
			</div>
		</div>
    )
}

ReactDOM.render(<MyForm />, document.getElementById('root'));