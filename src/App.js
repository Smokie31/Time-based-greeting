import './App.css';

function App(props) {
  var date = new Date();
  var hours = date.getHours();
  let greeting= "hello";
  let timing= "day";
  if (hours>=0 && hours<=6){
    greeting = "Working Late";
    timing= "night";
  }
  else if (hours>=7 && hours<=11){
    greeting = "Good Morning";
  }
  else if (hours>=12 && hours<=15){
    greeting = "Good Afternoon";
  }
  else if (hours>=16 && hours<=20){
    greeting = "Good Evening";
    timing= "night";
  }
  else if (hours>=21 && hours<=23){
    greeting = "Good Night";
    timing= "night";
  }
  console.log(greeting);
  console.log(timing);

  return (
    <div className={`container ${timing}`}>
      <h1>Hello {props.name}, {greeting}</h1>
    </div>
  );
}

export default App;
