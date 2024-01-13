// import { useState } from 'react'
import Picturecard from './components/pictureCard'
import './App.css'


function App() {
    
  return (
    
    <div>
    <header id="home-header">
        <h1 id="home">Welcome to the Plant Database</h1>
        <section id="nav-bar">
            <section id="nav-elements">
                <a style={{textDecoration:"none"}} href="/index.html">Home</a>
                <a id="Evergreen2">Evergreens</a>
                <a id="Deciduous2">Deciduous</a>
                <a id="Flower2">Flowers</a>
                <a id="Houseplant2">Houseplants</a>
            </section>
        </section>
    </header>
        <section id="sidebar">
            <form id="search">
                <h4>Choose One:</h4>
                <input className="searchfield" id="species" autoComplete="off" placeholder="Genus and species:"/>
                <br/>
                <input className="searchfield" id="common" autoComplete="off" placeholder="Common Name:"/>
                <br/>
                <div className="familySearch">
                    <label htmlFor="drop-down">Choose a Family:</label>
                    <select className="searchfield" id="drop-down" defaultValue=""></select>
                </div>
                <button>Search</button>
            </form>
            <form id="add">
                <h4>Please complete all fields to add a new picture</h4>
                <input className="searchfield" id="speciesAdd" autoComplete="off" placeholder="Genus and species:" required/><br/>
                <input className="searchfield" id="commonAdd" autoComplete="off" placeholder="Common Name:" required/><br/>
                <input className="searchfield" id="imageAdd" autoComplete="off" placeholder="Image URL:" required/><br/>
                <select className="typeSelect" id="decid" required>
                    <option defaultValue={1}>Deciduous</option>
                    <option defaultValue={2}>Evergreen</option>
                    <option defaultValue={3}>Flower</option>
                    <option defaultValue={4}>Houseplant</option>
                </select><br/>
                <label htmlFor="familyAdd">Choose a Family or Add New:</label>
                <section id="addFamSection">
                    <select className="searchfield" id="familyAdd" required></select>
                    <input className="greyed" id="newFam" autoComplete="off" placeholder="Add New"/>
                </section>
                {/* <button>Add Plant</button> */}
                <h5>--This submit button has temporarily been removed--</h5>
            </form>
        </section>
        <section id="searchRes">
            <a><section className="navbox left top-left">
                <Picturecard id="Evergreen" name="Evergreens" />
            {/* <img id="Evergreen" className="navimg" alt="evergreen pic" src=""/>
                <h3>Evergreens</h3> */}
            </section></a><br/>
            <a><section className="navbox right top-right">
                <Picturecard id="Deciduous" name="Deciduous" />
                {/* <img id='Deciduous' className="navimg" alt="deciduous pic" src=""/>
                <h3>Deciduous</h3>             */}
            </section></a><br/>
            <a><section className="navbox left bottom-left">
                <Picturecard id="Flower" name="Flowers" />
                {/* <img id='Flower' className="navimg" alt="flower pic" src="/flower.jpg"/>
                <h3>Flowers</h3> */}
            </section></a><br/>
            <a><section className="navbox right bottom-right">
                <Picturecard id="Houseplant" name="Houseplants" />
                {/* <img id='Houseplant' className="navimg" alt="houseplant pic" src="/houseplant.jpg"/>
                <h3>Houseplants</h3> */}
            </section></a>
        </section>
    <footer>
        <a style={{textDecoration :"none"}} href="https://www.linkedin.com/in/john-brooksby-fullstackdeveloper/" target="_blank"><p id="foot">Copyright 2023 John Brooksby</p></a>
        <p>Background Photo by <a style={{color: "#ffe8c2"}} href="https://unsplash.com/fr/@xteemu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Teemu Paananen</a> on <a style={{color: "#ffe8c2"}} href="https://unsplash.com/photos/OOE4xAnBhKo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </p>
    </footer>
    </div>
    )
}

export default App
