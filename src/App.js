import React from 'react';
import './App.css';
import DogImage from './Components/DogImage';
import BreedSelector from './Components/BreedSelector';

let currentBreed = 'random';


class App extends React.Component{

    state = {
        breed: currentBreed,
    };

    changeBreed = (e) => {
        currentBreed = e.target.value;
    }

    getDog = async(e) => {

        //Transforms the breed's name to upper case
        function breedToUpperCase(breed){
            breed = breed.charAt(0).toUpperCase() + breed.slice(1);
            if (breed.includes('-')){
                let i = breed.indexOf('-');
                let secondName = breed.substring(i+1);
                secondName = secondName.charAt(0).toUpperCase() + secondName.slice(1);
                breed = breed.substring(0, i) + ' ' + secondName;
            }
            return breed;
        }
        e.preventDefault();
        this.setState({breed: currentBreed});
        this.refs.dogButton.disabled = true;
        
        const API_URL = currentBreed === 'random' ? 'https://dog.ceo/api/breeds/image/random' : `https://dog.ceo/api/breed/${currentBreed}/images/random`;
        const data = await fetch(API_URL);
        const obj = await data.json();
        if (obj.status === 'success'){
            let msg = obj.message;
            let b = msg.substring(msg.indexOf('breeds/') + 7, msg.lastIndexOf('/'));
            this.setState({img: msg, displayBreed: breedToUpperCase(b)});
        }

        else{
            this.setState({img: 'https://cdn-images-1.medium.com/max/1200/1*wUOrpv-selJOytCkslSIhg.png'});
        }
        this.refs.dogButton.disabled = false;
    }

    render(){

        document.addEventListener('keydown', e => {
            
            if (e.which === 13 || e.which === 32){
                this.refs.dogButton.click();
            }
        });

        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className="display-2 text-center">Fetch!</h1>
                    </div>
                </div>
                <div className="row">

                    {/* Options Column */}
                    <form className="col-3" action="submit">
                        <BreedSelector changeBreed={this.changeBreed}></BreedSelector>
                        <button ref="dogButton" className="btn btn-primary p-5 mb-5" onClick={this.getDog}>Click To Dog</button>
                        <div className="d-flex justify-content-center">
                            <h2 className="mb-4 mt-5 text-center justify-center mr-5">{this.state.displayBreed}</h2>
                        </div>
                    </form>

                    {/* Image Column */}
                    <div className="col-9 d-flex justify-content-center overflow-hidden">
                        <DogImage image={this.state.img} screenHeight={window.innerHeight}></DogImage>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;