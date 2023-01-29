import Category from '../../../../../domain/models/Category';
interface Props {
    category: Category;
    onClick: () => void;
}

export const CategoryTag = ({ category, onClick }: Props) => (
    <div
        onClick={onClick}
        className="border-primary text-primary px-2 rounded-full border-[1px] w-fit text-[12px] flex items-center space-x-1 cursor-pointer"
    >
        <p>{category.title}</p>
    </div>
);