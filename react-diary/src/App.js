import React from "react";
import axios from "axios";
import './App.css';
import Header from "./Component/Header";
import Footer from "./Component/Footer";


class App extends React.Component {
	
	state = {
		details: [],
		user: "",
		exp: "",
	};
	

	componentDidMount() {
		let data;

		axios
			.get("http://localhost:1000/visitor_page/")
			.then((res) => {
				data = res.data;
				this.setState({
					details: data,
				});
			})
			.catch((err) => {});
	}

	renderSwitch = (x) => {
		switch (x + 1) {
			case 1:
				return "primary ";
			case 2:
				return "info";
			case 3:
				return "success";
			case 4:
				return "danger";
			case 5:
				return "warning";
			case 6:
				return "secondary";
			default:
				return "yellow";
		}
	};

	handleInput = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		axios
			.post("http://localhost:1000/visitor_page/", {
				name: this.state.user,
				experience: this.state.exp,
			})
			.then((res) => {
				this.setState({
					user: "",
					exp: "",
				});
			})
			.catch((err) => {});
	};
	/*function do(){
		alert("Thanks");
	}*/
	render() {
		return (
		
      <>
	  	
	  <Header/>
      <br></br>
	  <br></br>
			<div className="container jumbotron ">
				
				<form onSubmit={this.handleSubmit}>
					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text"
								id="basic-addon1">
								{" "}
								Visitor Name{" "}
							</span>
						</div>
						<input type="text" className="form-control"
							placeholder="Name of the visitor"
							aria-label="Username"
							aria-describedby="basic-addon1"
							value={this.state.user} name="user"
							onChange={this.handleInput} />
					</div>

					<div className="input-group mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text">
							Your Experience
							</span>
						</div>
						<textarea className="form-control "
								aria-label="With textarea"
								placeholder="Tell us what you think after visiting here!!"
								value={this.state.exp} name="exp"
								onChange={this.handleInput}>
						</textarea>
					</div>

					<button type="submit" className="btn btn-primary mb-5" onClick="msg()">
						Submit
					</button>
				</form>

				

				{this.state.details.map((detail, id) => (
					<div key={id}>
						<div className="card shadow-lg">
							<div className={"bg-" + this.renderSwitch(id % 6) +
										" card-header"}>Visitor's Experience {id + 1}</div>
							<div className="card-body">
								<blockquote className={"text-" + this.renderSwitch(id % 6) +
												" blockquote mb-0"}>
									<h1> {detail.experience} </h1>
									<footer className="blockquote-footer">
										{" "}
										<cite title="Source Title">{detail.name}</cite>
									</footer>
								</blockquote>
							</div>
						</div>
						<span className="border border-primary "></span>
					</div>
				))}
			</div>
			<Footer/>
      </>
		);
	}
}
export default App;
