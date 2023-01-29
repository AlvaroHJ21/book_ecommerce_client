import Category from '../../domain/models/Category';
import CategoryRepository from '../../domain/repositories/CategoryRepository';


export default class LocalCategoryRepository implements CategoryRepository{

    private categories: Category[] = [
        {
            id: 1,
            title: 'Adventure',
        },
    
        {
            id: 2,
            title: 'Biography',
        },
        {
            id: 3,
            title: 'Classic',
        },
        {
            id: 4,
            title: 'Random Selection',
        },
        {
            id: 5,
            title: 'Harvard Classics',
        },
        {
            id: 6,
            title: 'Designing Book',
        },
        {
            id: 7,
            title: 'Philosophy',
        },
        {
            id: 8,
            title: 'Science Fiction',
        },
        {
            id: 9,
            title: 'Short Store Collection',
        },
        {
            id: 10,
            title: 'Thriller',
        },
        {
            id: 11,
            title: 'Travel',
        },
        {
            id: 12,
            title: 'Westerm',
        },
        {
            id: 13,
            title: 'History',
        },
    ];

    getCategories(): Promise<Category[]> {
        return new Promise((resolve, reject) => resolve(this.categories));
    }
    getCategory(id: number): Promise<Category> {
        throw new Error('Method not implemented.');
    }

}