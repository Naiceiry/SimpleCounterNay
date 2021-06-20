import React from "react";
import ReactDOM from "react-dom";
import "bootstrap";
import "../styles/index.scss";
function SCounter(props) {
	return (
		<div className="Bcounter">
			<div className="Calendario">
				<i className="far fa-clock"></i>
			</div>
			<div className="cuatro">{props.cuatro % 10}</div>
			<div className="tres">{props.tres % 10} </div>
			<div className="dos">{props.dos % 10} </div>
			<div className="uno">{props.uno % 10} </div>
		</div>
	);
}
let counter = 0;
setInterval(function() {
	const cuatro = Math.floor(counter / 1000);
	const tres = Math.floor(counter / 1000);
	const dos = Math.floor(counter / 10);
	const uno = Math.floor(counter / 1);
	ReactDOM.render(
		<SCounter uno={uno} dos={dos} tres={tres} cuatro={cuatro} />,
		document.querySelector("#app")
	);
	counter++;
}, 1000);
