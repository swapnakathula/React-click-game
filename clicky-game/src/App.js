
import React, { Component } from 'react';
import './App.css';
import birds from './birds.json'
import Wrapper from './components/Wrapper'
import Nav from './components/Nav'
import Title from './components/Title'
import BirdCard from './components/BirdCard'

class App extends Component {
    state = {
        message: "Click an image to begin!",
        topScore: 0,
        curScore: 0,
        birds: birds,
        unselectedBirds: birds
    }

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectBird = name => {
        const findBird = this.state.unselectedBirds.find(item => item.name === name);

        if(findBird === undefined) {
            // failure to select a new bird
            this.setState({ 
                message: "You guessed incorrectly!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                birds: birds,
                unselectedBirds: birds
            });
        }
        else {
            // success to select a new bird
            const newBirds = this.state.unselectedBirds.filter(item => item.name !== name);
            
            this.setState({ 
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                birds: birds,
                unselectedBirds: newBirds
            });
        }

        this.shuffleArray(birds);
    };

    render() {
        return (
            <Wrapper>
                <Nav
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                <Title />
                {
                    this.state.birds.map(bird => (
                        <BirdCard
                            name={bird.name}
                            image={bird.image}
                            selectBird={this.selectBird} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>
        );
    }
}

export default App;


