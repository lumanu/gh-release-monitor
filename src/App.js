import { Octokit } from "@octokit/core";
import React from 'react';
import logo from './logo.svg';
import './App.css';

const octokit = new Octokit();

octokit.request('GET /repos/{owner}/{repo}/releases', {
  owner: 'microsoft',
  repo: 'vscode'
}).then(
  (response) => {
    console.log(response);
  }
);

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
