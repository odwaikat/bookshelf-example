import React from 'react';
import Book from 'components/book/container'

const mobileVisibleItems = 1;
const tabletVisibleItems = 3;
const desktopVisibleItems = 5;
class Carousel extends React.Component {
    constructor() {
        super();
        this.resize = this.resize.bind(this);
        this.state = {
            numberOfVisibleItems: mobileVisibleItems,
            currentIndex: 0
        }
    }
    componentDidMount() {
        window.addEventListener("resize", this.resize);
        this.resize();
    }

    resize() {
        const width = window.innerWidth;
        let numberOfVisibleItems = mobileVisibleItems;
        if (width >= 768 && width < 1024) {
            numberOfVisibleItems = tabletVisibleItems
        } else if (width >= 1024) {
            numberOfVisibleItems = desktopVisibleItems
        }
        this.setState({numberOfVisibleItems: numberOfVisibleItems});
    }

    render() {
        let carouselData = this.props.carouselData;
        const currentIndex = this.state.currentIndex;
        const numberOfVisibleItems = this.state.numberOfVisibleItems;
        if (carouselData) {
            carouselData = carouselData.slice(currentIndex, currentIndex + numberOfVisibleItems);
        }

        return (
            <React.Fragment>
                {carouselData &&
                    <div className="carousel-wrapper" >
                        <div className="carousel">
                            <h2 className="carousel__header">
                                <b>Nonfiction</b>
                            </h2>
                            <div className="carousel__list">
                                {carouselData && carouselData.map((el) => (
                                    <div key={el.id} className="carousel__item">
                                        <Book book={el} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default Carousel;