import React, { Component } from 'react'

class NnhEventFrom4 extends Component {

    constructor(props){
        super(props);
        this.state = {
            nnhSelectCheckBox:["Applee"],
        }
    }
    // Hàm xử lý khi chọn checkbox
    nnhHandleCheckboxChange = (event)=>{
        const { value, checked } = event.target;
        // console.log(value, checked);
        let selected = [...this.state.nnhSelectCheckBox];
        const selectedOptions = checked ? [...selected, value]: selected.filter(option => option !== value);

        console.log("selected:",selected,"selectedOptions:",selectedOptions);
        
        this.setState({
            nnhSelectCheckBox:selectedOptions
        });
    }

    // Submit form
    nnhHandleSubmit = (ev)=>{
        ev.preventDefault();
        alert("Select:" + this.state.nnhSelectCheckBox);
    }


  render() {
    return (
        <div className="alert alert-success">
        <h2> Form input - checkbox</h2>
        <form>
          <h3>Select your favorite fruits</h3>
          <div>
            <input
              type="checkbox"
              id="applee"
              value="Applee"
              checked={this.state.nnhSelectCheckBox.includes("Apple")}
              onChange={this.nnhHandleCheckboxChange}
            />
            <label htmlFor="applee">Applee</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="banana"
              value="Banana"
              checked={this.state.nnhSelectCheckBox.includes("Banana")}
              onChange={this.nnhHandleCheckboxChange}
            />
            <label htmlFor="banana">Banana</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="orange"
              value="Orange"
              checked={this.state.nnhSelectCheckBox.includes("Orange")}
              onChange={this.nnhHandleCheckboxChange}
            />
            <label htmlFor="orange">Orange</label>
          </div>
          <button type="submit" onClick={this.nnhHandleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default  NnhEventFrom4;
