import { useState } from 'react';

import Category from '../../../../domain/models/Category';
import LocalBookRepository from '../../../../data/local/LocalBookRepository';
import LocalCategoryRepository from '../../../../data/local/LocalCategoryRepository';

import { useBooks } from '../../../hooks/useBooks';
import { useCategories } from '../../../hooks/useCategories';

import { BookItem } from './components/BookItem';
import { Tag } from './components/Tag';


function ShopView() {

    const { categories } = useCategories(new LocalCategoryRepository());

    const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

    const { books } = useBooks(new LocalBookRepository());
    
    function handleClickCategory(category: Category) {
        if (selectedCategories.find((c) => c.id === category.id)) return; 
        setSelectedCategories([...selectedCategories, category]);
    }

    function handleDeleteCategory(category: Category) {
        setSelectedCategories([...selectedCategories.filter((b) => b.id !== category.id)]);
    }

    return (
        <div className="container m-auto flex flex-1 justify-center">
            <div className="w-1/6 border-r-secondary border-r-2 p-8 hidden md:block">
                <ul className="flex flex-col gap-4">
                    {categories.map((category, index) => (
                        <li
                            key={category.id}
                            className="hover:text-primary cursor-pointer"
                            onClick={() => handleClickCategory(category)}
                        >
                            {category.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-5/6">
                {/* APP BAR */}
                <div className="px-8">
                    <div className="border-b-secondary border-b-2 h-12 flex justify-between items-center">
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="p-2 outline-none"
                            />
                        </div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                            />
                        </svg>
                    </div>
                    <div className="flex py-2 gap-1 flex-wrap">
                        {selectedCategories.map((category, index) => (
                            <Tag
                                key={index}
                                category={category}
                                onDelete={() => handleDeleteCategory(category)}
                            />
                        ))}
                    </div>
                </div>

                {/* FIN APP BAR */}

                <ul className="flex flex-wrap justify-center gap-8 py-8 px-0">
                    {books.map((book) => (
                        <BookItem key={book.id} book={book} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ShopView;
