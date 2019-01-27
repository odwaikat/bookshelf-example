import React from 'react';
import Book from 'components/book/container'

class Carousel extends React.Component {
    render() {
        let carouselData = this.props.carouselData;
        // booksData = booksData.slice(0, 5);

        return (
            <React.Fragment>
                {carouselData &&
                    <div className="carousel">
                        <h4 className="carousel__header">
                            <b>Nonfiction</b>
                        </h4>
                        <div className="carousel__list">
                            {carouselData && carouselData.map((el) => (
                                <Book book={el} key={el.id}/>
                            ))}
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default Carousel;