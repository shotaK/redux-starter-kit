import React, {PropTypes, Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as articleActionCreators from '../../redux/article/article.actions';

function mapStateToProps(state) {
  return {articles: state.articles};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(articleActionCreators, dispatch)};
}

@connect(mapStateToProps, mapDispatchToProps)
export default class ArticleForm extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.actions.addArticle(this.state.text);
  };

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  render() {
    return (
      <div>
        {!this.props.articles.wasAdded && <p>Article Not added</p>}
        {this.props.articles.wasAdded && <p>Article Text: {this.props.articles.text}</p>}
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.text} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

ArticleForm.propTypes = {
  articles: PropTypes.object,
  actions: PropTypes.object,
};

