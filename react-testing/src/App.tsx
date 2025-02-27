import Button from "./components/Button";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import NameForm from "./components/NameForm";

function App() {
	return (<>
		<NameForm/>
		<Button text="clique"/>
		<Greeting name='Thayná'/>
		<Counter/>
		</>
	);
}

export default App;
