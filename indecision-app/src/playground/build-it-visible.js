let visibility = false;

const buttonOn = 'Show details';
const buttonOff = 'Hide details';

const toggleVisibility = () => {
    visibility = !visibility;
    render(); 
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={ toggleVisibility }>{ visibility ? buttonOff : buttonOn }</button>
            {visibility && (
                <p>Hey. These are some details you can now see!</p>
            )}
        </div>
    );  

    ReactDOM.render(template, document.getElementById('app'));
};

render();