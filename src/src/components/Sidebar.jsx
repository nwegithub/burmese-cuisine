import { Stack } from "@mui/material";
import { categories } from "../utils/contants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        flexDirection: { md: "column" },
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
      }}
    >
      {categories.map((category) => (
        <button
          key={Math.random() * 100}
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            backgroundColor:
              category.name === selectedCategory ? "#FC1503" : "#fff",
          }}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            <category.icon />
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.7",
              color: category.name === selectedCategory && "white",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
