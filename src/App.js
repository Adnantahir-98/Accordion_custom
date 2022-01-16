import React, {useState} from 'react'
import './App.css'
import data from './data';
import SingleQuestion from './Question'

function App() {

  const [questions, setQuestions] = useState(data);

  return (
    <div className="App">
      <div className="container">
        <h2>FAQ's Accordions</h2>
        <section className='info'>
          {questions.map((question ) => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
