import React from 'react';
import { connect } from 'react-redux';
import {
    loadCategoriesData,
    loadBooksCarouselData
} from './actions'

// import Categories from 'components/categories/categories'
// import Books from 'components/books/books'

class Home extends React.Component {
    // constructor() {
    //     super();
    //     // this.state = {
    //     //     categoriesdata: {},
    //     //     nonfictionData: {}
    //     // }
    // }
    componentDidMount() {
        this.props.loadCategoriesData()
        this.props.loadBooksCarouselData()
    }
    render() {
        return (
            <div/>
        );
    }
}

const mapStateToProps = state => ({
    home: state.home || {}
})
const mapDispatchToProps = dispatch => ({
    loadCategoriesData: () => dispatch(loadCategoriesData()),
    loadBooksCarouselData: () => dispatch(loadBooksCarouselData()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);