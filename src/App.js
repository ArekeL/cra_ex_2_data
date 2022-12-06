import React, { Component } from "react";
import "./App.css";

// pseudo rosnąca baza danych
const data = [
	{ id: 1, title: "Wyświetl wiadomość 1", body: "Treść wiadomości numer 1" },
	{ id: 2, title: "Wyświetl wiadomość 2", body: "Treść wiadomości numer 2" },
];

setInterval(() => {
	const index = data.length + 1;
	data.push({
		id: index,
		title: `Wyświetl wiadomość ${index}`,
		body: `Treść wiadomości numer ${index}`,
	});
}, 5000);

class App extends Component {
	state = {
		comments: [...data],
	};

	getData = () => {
		if (this.state.comments.length !== data.length) {
			this.setState({
				comments: [...data],
			});
		}
	};

	componentDidMount() {
		this.idIndex = setInterval(this.getData, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.idIndex);
	}
	render() {
		const comments = this.state.comments.map((comments) => (
			<div key={comments.id}>
				<h4>{comments.title}</h4>
				<p>{comments.body}</p>
			</div>
		));
		return <div>{comments.reverse()}</div>;
	}
}

export default App;
