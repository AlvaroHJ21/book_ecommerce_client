import { useState, useEffect } from 'react';

import Category from '../../domain/models/Category';
import CategoryRepository from '../../domain/repositories/CategoryRepository';

export const useCategories = (repository: CategoryRepository) => {

    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        getCategories();
    }, []);

    async function getCategories (){
        setCategories(await repository.getCategories());
    }

    return { categories };
};
