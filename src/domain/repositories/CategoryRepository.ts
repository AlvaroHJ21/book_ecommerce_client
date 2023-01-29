import Category from './../models/Category';

export default abstract class CategoryRepository {
    abstract getCategories(): Promise<Category[]>;

    abstract getCategory(id: number): Promise<Category>;
}
