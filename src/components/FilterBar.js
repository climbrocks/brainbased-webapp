// SCSS Imports
import "./FilterBar.scss";

// React Imports

// Component Imports

// Image Imports

// Font Awesome Icons

const FilterBar = ({ filters, selectedFilters, onFilterSelect }) => {
    const handleFilterSelect = (filter) => {
        if (selectedFilters.includes(filter)) {
            onFilterSelect(
                selectedFilters.filter(
                    (selectedFilter) => selectedFilter !== filter
                )
            );
        } else {
            onFilterSelect([...selectedFilters, filter]);
        }
    };

    return (
        <div className="filter-bar-container">
            <div className="filter-bar">
                {filters.map((filter, index) => (
                    <div
                        key={index}
                        className={`filter-item ${
                            selectedFilters.includes(filter) ? "active" : ""
                        }`}
                        onClick={() => handleFilterSelect(filter)}
                    >
                        {filter}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FilterBar;
