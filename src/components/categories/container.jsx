import React from 'react';

const Categories = ({categoriesData}) => (
    <React.Fragment>
        {categoriesData &&
            <div className="categories">
                <h1 className="categories__header">
                    <b>Browse</b> Our Most Popular Categories
                </h1>
                <div className="categories__list">
                    {categoriesData && categoriesData.map((category) => (
                        <div className="category-item" key={category.id} >
                            <div className="category-item__image">
                                <img src={category.image} alt={category.title} width={40} height={40} />
                            </div>
                            <div>
                                <h3 className="category-item__title">
                                    {category.title}
                                </h3>
                                <span>
                                    {category.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        }
    </React.Fragment>
);

export default Categories;