import React from 'react';
import Book from 'components/book/container'

const mobileVisibleItems = 1;
const tabletVisibleItems = 3;
const desktopVisibleItems = 5;
class Carousel extends React.Component {
    constructor() {
        super();
        this.resize = this.resize.bind(this);
        this.slideBack = this.slideBack.bind(this);
        this.slideNext = this.slideNext.bind(this);
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

    slideBack() {
        const currentIndex = this.state.currentIndex;
        this.setState({currentIndex: currentIndex - 1})
    }
    slideNext() {
        const currentIndex = this.state.currentIndex;
        this.setState({currentIndex: currentIndex + 1})
    }

    render() {
        let carouselData = this.props.carouselData;
        const carouselItemsCount = carouselData && Object.keys(carouselData).length
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
                            <button className="carousel__back-button"
                                disabled={currentIndex === 0}
                                onClick={() => this.slideBack()}
                            >
                            </button>
                            <div className="carousel__list">
                                {carouselData && carouselData.map((el) => (
                                    <div key={el.id} className="carousel__item">
                                        <Book book={el} />
                                    </div>
                                ))}
                            </div>
                            <button className="carousel__next-button"
                                disabled={carouselItemsCount <= currentIndex + numberOfVisibleItems}
                                onClick={() => this.slideNext()}
                            >
                            </button>
                        </div>
                    </div>
                }
            </React.Fragment>
        );
    }
}

export default Carousel;