import React from "react"
import { Outlet, Link } from "react-router-dom";
import greenbutton from "../Media/DeactivateMotionSensor.png";

class Hack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: false,
            value: "",
            correctSpace: 0,
            wrongSpace: 0
        }
        this.submitString = this.submitString.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.navigateToWin = this.navigateToWin.bind(this);

        this.TAsHint = this.TAsHint.bind(this);
    }


    submitString(event) {
        event.preventDefault();
        let submission = this.state.value;
        console.log(submission);
        let length = submission.length;
        if (length !== 6) {
            this.setState({ correctSpace: 0 });
            this.setState({ wrongSpace: 0 });
            // this.state.correctSpace = 0;
            // this.state.wrongSpace = 0;
            return;
        }

        let wS = 0;
        let cS = 0;
        const answer = "#'cX%0";
        // const answer = "asdfas";

        for (let i = 0; i < 6; ++i) {
            if (answer.charAt(i) === submission.charAt(i)) {
                ++cS;
            }
            else if (submission.search(answer.charAt(i)) !== -1) {
                ++wS;
            }
        }

        this.setState({ correctSpace: cS });
        this.setState({ wrongSpace: wS });

        if (cS === 6 && this.state.success === false) {
            this.setState({ success: true });
        }

        return;
    }

    navigateToWin() {
        console.log("go to win page");
        // navigate("Win.js");

    }

    handleChange(event) {
        // console.log("you are handling a change");

        this.setState({ value: event.target.value });

        this.setState((prevState) => ({ value: event.target.value }))
    }
    
    TAsHint() {
        alert("The correct answer is: #'cX%0");
    }

    render() {
        let button;
        if (this.state.success) {
            // button = <button onClick={this.navigateToWin}>Button</button>
            button = <Link to="/Win"><img src={greenbutton}/></Link>
        } else {
            button = <div/>
        }

        return (
            <div>
            <form onSubmit={this.submitString}>
                <label>Input a 6-character string:
                    <input type="text" onChange={this.handleChange} value={this.state.value}/><br/>
                </label>
                <input type="submit" id="button" value="Submit"/>
            </form>
            <button type="button" onClick={this.TAsHint}> Hint for the TAs</button>
            <table>
                <tr>
                    <th>Number of correct characters in the correct space</th>
                    <th> | </th>
                    <th>Number of correct characters in the wrong space</th>
                </tr>
                <tr>
                    <td>{this.state.correctSpace}</td>
                    <td> | </td>
                    <td>{this.state.wrongSpace}</td>
                </tr>
                {button}
            </table>
        </div>
        );
    }

}




export default Hack;
