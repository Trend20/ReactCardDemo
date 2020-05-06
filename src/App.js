import React from 'react';
import Card from './Card';
import image1 from './img/image1.jpg';


function App(props) {
  return (
    <div className="App">
      <div className="row">
        <div className="col-sm-4">
        <Card 
        cardImage={image1}
        title="How to Become a Master in Javascript"
        description="This is the beginners guide to becoming super in Javascript Programming"
        link="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=6&cad=rja&uact=8&ved=2ahUKEwjqmerek5_pAhVEVhoKHWZXAcYQFjAFegQICxAG&url=https%3A%2F%2Fitnext.io%2Fwhat-is-props-
        and-how-to-use-it-in-react-da307f500da0&usg=AOvVaw2094RlAHeiQq7UW8X0bnwd"
      />
      </div>
        <div className="col-sm-4">
        <Card 
        cardImage={image1}
        title="How to Become a Master in Javascript"
        description="This is the beginners guide to becoming super in Javascript Programming"
        link="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=6&cad=rja&uact=8&ved=2ahUKEwjqmerek5_pAhVEVhoKHWZXAcYQFjAFegQICxAG&url=https%3A%2F%2Fitnext.io%2Fwhat-is-props-
        and-how-to-use-it-in-react-da307f500da0&usg=AOvVaw2094RlAHeiQq7UW8X0bnwd"
      />
      </div>
        <div className="col-sm-4">
        <Card 
        cardImage={image1}
        title="What are props in React?"
        description="This is the beginners guide to becoming super in Javascript Programming"
        link="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=6&cad=rja&uact=8&ved=2ahUKEwjqmerek5_pAhVEVhoKHWZXAcYQFjAFegQICxAG&url=https%3A%2F%2Fitnext.io%2Fwhat-is-props-
        and-how-to-use-it-in-react-da307f500da0&usg=AOvVaw2094RlAHeiQq7UW8X0bnwd"
      />
      </div>
      </div>
    </div>
  );
}

export default App;
