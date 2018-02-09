const app = {
  title: 'Indecision App',
  subtitle: 'Anything',
  options: ['One', 'Two']
}

const renderOptions = (options) => {
  if(options.length > 0) {
    return (
      <div>
        <p>Here are your options</p>
        <ol>
          {options.map(option => <li>{option}</li>)}
        </ol>
      </div>
    );
  } else {
    return <p>No options</p>
  }
}

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}

    {renderOptions(app.options)}
  </div> 
);

ReactDOM.render(template, document.getElementById('app'));