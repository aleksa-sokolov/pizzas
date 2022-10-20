import React, {useState} from 'react';

const Categories = ({value,onChangeCategory}) => {
    const [activeIndex, setActiveIndex] = useState();
    const categories = ["Все","Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];

    function getActiveItem(index) {
      setActiveIndex(index);
    }

    return (
        <div className="categories">
            <ul>
                {categories.map((categoryName,index) => {
                    return (<li key={categoryName}
                                className={index === value ? "active" : ""}
                                onClick={() => onChangeCategory(index)}>{categoryName}
                    </li>)
                })}
            </ul>
        </div>
    );
};

export default Categories;
