import React from "react";

const App = () => {

    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};  
const Header = (props) => {
	return (
		<div>
			<h1>{props.course.name}</h1>
		</div>
	)
};

const Content = (props) => {
	const list = props.course.parts.map(function(part) {
		return (
			<div>
				<p> {part.name}: {part.exercises}</p>
			</div>
		)
	})
	
	return list
};

const Total = (props) => {
	var score = 0
	
	const list = props.course.parts.map(function(item) {
		
		score = score + item.exercises 
		
	})
	
	return (
		<div>
			<p>Total exercises: {score} </p>
		</div>
	)
};


export default App;
