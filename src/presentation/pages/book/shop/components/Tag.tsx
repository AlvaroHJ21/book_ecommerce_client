import { Category } from '../../../../../domain/models/Category';
interface Props {
    category: Category;
    onDelete: () => void;
}

export const Tag = ({ category, onDelete }: Props) => (
    <div className="border-primary text-primary px-2 rounded-full border-[1px] w-fit text-[12px] flex items-center space-x-1">
        <p>{category.title}</p>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 cursor-pointer"
            onClick={() => onDelete()}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    </div>
);