console.log('App.js is running!');

const app = {
	title: 'Indecision App',
	subtitle: 'Put your life in the hands of a computer',
	options: []
};

const onFormSubmit = (event) => {
	event.preventDefault();

	const option = event.target.elements.option.value;
	if (option) {
		app.options.push(option);
		event.target.elements.option.value = '';
		render();
	}
};

const onRemoveAll = () => {
	app.options = [];
	render();
};

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const render = () => {
	const template = (
		<div>
			<h1>{ app.title }</h1>
			{ app.subtitle && <p>{ app.subtitle }</p> }
			<p>{ app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
			<button disabled={ app.options.length === 0 } onClick={ onMakeDecision }>
				What should I do?
			</button>
			<button onClick={ onRemoveAll }>Remove All</button>
			<ol>
				{ app.options.map((option) => <li key={ option }>{ option }</li>) }
			</ol>
			<form onSubmit={ onFormSubmit }>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div>
	);

	ReactDOM.render(template, appRoot);
};

render();

// let count = 0;

// const addOne = () => {
//     count++;
//     renderCounterApp();
// }

// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }

// const resetButton = () => {
//     count = 0;
//     renderCounterApp();
// }

// const templateTwo = (
//     <div>
//         <h1>Count: { count }</h1>
//         <button onClick={ addOne }>+1</button>
//         <button onClick={ minusOne }>-1</button>
//         <button onClick={ resetButton }>Reset</button>
//     </div>
// );

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: { count }</h1>
//             <button onClick={ addOne }>+1</button>
//             <button onClick={ minusOne }>-1</button>
//             <button onClick={ resetButton }>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };
