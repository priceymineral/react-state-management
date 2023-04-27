import { RecoilRoot } from 'recoil';
import { CounterButton } from './CounterButton';
import './App.css';
import { DisplayCount } from './DisplayCount';

const App = () => {
	return (
		<>
			<RecoilRoot>
				<h1>State Management Example</h1>
				<DisplayCount />
				<CounterButton />
				<CounterButton />
			</RecoilRoot>
		</>
	);
}

export default App;
