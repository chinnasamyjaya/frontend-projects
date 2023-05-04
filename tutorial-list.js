import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import TutorialStatus from "./tutorial-status";

export default class TutorialsList extends Component {
  constructor(props) {
    super(props);
    this.retrieveTutorials = this.retrieveTutorials.bind(this);
    this.editTutorial = this.editTutorial.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.deleteTutorial = this.deleteTutorial.bind(this);
    this.deleterecord = this.deleterecord.bind(this);
    this.state = {
      submitted: false,
      tutorials: [],
      currentTutorial: null,
      currentIndex: -1,
      searchTitle: "",
      title: "",
      description: "",
      published: false,
      id: null,
    };
  }
  saveTutorial() {
    var data = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      published: this.state.published,
    };

    TutorialDataService.update(this.state.id, data)
      .then((response) => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          description: response.data.description,
          published: response.data.published,

          submitted: true,
        });
        this.retrieveTutorials();
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  editTutorial(tutorial) {
    this.setState({ submitted: false });

    this.setState({ id: tutorial.id });
    this.setState({ title: tutorial.title });
    this.setState({ description: tutorial.description });
    this.setState({ published: tutorial.published });
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  componentDidMount() {
    this.retrieveTutorials();
  }

  retrieveTutorials() {
    TutorialDataService.getAll()
      .then((response) => {
        this.setState({
          tutorials: response.data,
        });
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  deleteTutorial(tutorial){
    this.setState({id:tutorial.id})


}
deleterecord(tutorial){
  TutorialDataService.delete(this.state.id);
  this.retrieveTutorials();

}

    
  

  render() {
    return (
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Published</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tutorials.map((obj) => (
              <tr>
                <td>{obj.id}</td>
                <td>{obj.title}</td>
                <td>{obj.description}</td>
                <td>{obj.published}
                <TutorialStatus status={obj.published}></TutorialStatus>
                </td>
                <td>
                  <a
                    className="btn btn-primary"
                    href="#"
                    data-toggle="modal"
                    data-target="#editTutorialModal"
                    onClick={() => this.editTutorial(obj)}
                  >
                    Edit
                  </a>
                </td>
                <td>
                  <a className="btn btn-primary" href="#"data-toggle="modal"
                     
                    data-target="#deleteTutorialModal"
                    onClick={() => this.deleteTutorial(obj)}>
                    Delete
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          class="modal fade"
          id="editTutorialModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >

          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Edit Tutorial
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div className="submit-form">
                  {this.state.submitted ? (
                    <div>
                    <h4>You submitted successfully!</h4>
                    <button
                      className="btn btn-success"
                      onClick={this.newTutorial}
                    >
                      Add
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        required
                        value={this.state.title}
                        onChange={this.onChangeTitle}
                        name="title"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <input
                        type="text"
                        className="form-control"
                        id="description"
                        required
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                        name="description"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={this.saveTutorial}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="deleteTutorialModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Delete Tutorial
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Do you want to delete this record?
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={this.deleterecord}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}