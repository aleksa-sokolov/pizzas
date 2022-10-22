import React from 'react';
import {setCategoryId, setCurrentPage} from "../redux/slices/filterSlice";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import {useEffect, useState} from "react";
import Pagination from "../components/Pagination";
import {useDispatch, useSelector} from "react-redux";
import {setItems} from "../redux/slices/pizzasSlice";

const Home = ({searchValue}) => {
    const dispatch = useDispatch();
    const categoryId = useSelector((state) => state.filter.categoryId);
    const currentPage = useSelector((state) => state.filter.currentPage);
    const items = useSelector((state) => state.pizza.items);
    const sortType = useSelector((state) => state.filter.sort.sortProperty);
    const [isLoading, setIsLoading] = useState(true);


    const onChangeCategory = (id) => {
        dispatch(setCategoryId(id));
    };

    const onChangePage = (number) => {
        dispatch(setCurrentPage(number));
    }

    useEffect(() => {
        const search = searchValue ? `&search=${searchValue}` : ``;
        const fetchData = async () => {
            try {
                let response = await fetch(`https://633d60367e19b178290d1687.mockapi.io/items?page=${currentPage}&limit=4&${categoryId > 0 ? `category=${categoryId}` : ''}&sortBy=${sortType}&order=desc${search}`);
                if (response.status === 200) {
                    let data = await response.json();
                    dispatch(setItems(data));
                } else {
                    alert("Не удалось загрузить пиццы :(");
                    setIsLoading(false);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
        window.scrollTo(0, 0);
    }, [categoryId, sortType, searchValue, currentPage]);

    const pizzas = items.map((obj) => (<PizzaBlock key={obj.id}  {...obj}/>));
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index}/>);


    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? skeletons : pizzas}
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    );
};

export default Home;
