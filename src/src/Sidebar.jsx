import { Stack } from "@mui/material";
// import { categories } from "../utils/contants";
import { categories } from "./constants";
import './style.css'


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
              category.name === selectedCategory ? "#e48f0f" : "#fff",
          }}
        >
          {/* <span
            style={{
              color: category.name === selectedCategory ? "white" : "#e48f0f",
              marginRight: "15px",
            }}
          >
            <category.icon />
          </span> */}
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
