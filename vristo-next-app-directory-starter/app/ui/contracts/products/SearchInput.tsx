'use client';

interface SearchInputProps {
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = 'Search...', value, onChange }) => {

    return (
        <input 
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="mt-4 mb-4 block w-full rounded-md border border-gray-200 py-2 pl-3 text-sm text-gray-900 placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
            />
    );
};

export default SearchInput;
