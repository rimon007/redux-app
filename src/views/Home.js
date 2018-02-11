import React, { Component } from 'react'
import { connect } from 'react-redux'
//import { fetchCategories, setSorting, setCommentSorting } from '../actions'
//import { Link } from 'react-router-dom'

class Home extends Component {
	render() {
		return [
			<div>
				<h1 key='1'>Home</h1>
				<p key='2'>This is home page</p>
			</div>
		]
	}
}

const mapStateToProps = state => ({
	posts: state.getPosts
})

export default connect(mapStateToProps)(Home)