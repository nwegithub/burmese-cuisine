import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Box, Typography } from "@mui/material";
import { FaXmark } from "react-icons/fa6";
import { MdLocalGroceryStore, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import DishCard from "./DishCard";
import data from "../../recipie.json";

const Modals = ({
  openIngredientModal,
  setOpenIngredientModal,
  openRecipeModal,
  setOpenRecipeModal,
  props
}) => {
  const navigate = useNavigate();

  const goToShop = () => {
    navigate("/shop");
  };

  return (
    <div className="flex justify-center space-x-2 slideTop">
      <div>
        <Modal
          open={openIngredientModal}
          onClose={() => setOpenIngredientModal(false)}
          style={{
            backdropFilter: "blur(5px)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "20%",
              bottom: "20%",
              left: "20%",
              right: "20%",
              justifyContent: "center",
              alignItem: "center",
              bgcolor: "rgba(255, 255, 255, 0.5)", // Adjust the alpha value as needed
              border: "2px  #000",
              boxShadow: 24,
              p: 2,
              backgroundColor: "#caf2f4",
            }}
          >
            <div className="absolute top-0 right-0 m-2">
              <Button
                onClick={() => {
                  setOpenIngredientModal(false);
                }}
              >
                <FaXmark size={12} />
              </Button>
            </div>
            <Typography className="relative m-h-[1000px] h-full w-full overflow-y-scroll top-8">
             
{props.ingredents}

              
              <div
                className="flex justify-center space-x-2  overflow-y-scroll"
                style={{
                  height: "200px",
                  flexDirection: "row",
                  marginTop: "20px",
                }}
              >
                <Button
                  onClick={() => {
                    setOpenIngredientModal(false);
                  }}
                  className="relative h-10 w-32 "
                  style={{ color: "black" }}
                >
                  <MdKeyboardDoubleArrowLeft
                    size={12}
                    style={{ marginRight: "5px" }}
                  />
                  Cancel
                </Button>

                <Button
                  onClick={goToShop}
                  className="relative h-10 w-32  "
                  style={{ color: "black" }}
                >
                  <MdLocalGroceryStore
                    size={12}
                    style={{ marginRight: "8px" }}
                  />
                  Shop
                </Button>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>

      <div>
        <Modal
          open={openRecipeModal}
          onClose={() => setOpenRecipeModal(false)}
          style={{
            backdropFilter: "blur(5px)",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: "20%",
              bottom: "20%",
              left: "20%",
              right: "20%",
              justifyContent: "center",
              alignItem: "center",
              bgcolor: "rgba(255, 255, 255, 0.5)", // Adjust the alpha value as needed
              border: "2px  #000",
              boxShadow: 24,
              p: 2,
              backgroundColor: "#caf2f4",
            }}
          >
            <div className="absolute top-0 right-0 m-2">
              <Button
                onClick={() => {
                  setOpenRecipeModal(false);
                }}
              >
                <FaXmark size={12} />
              </Button>
            </div>

            <Typography className="relative m-h-[1000px] h-full w-full overflow-y-scroll top-10">
              <p>
                LLorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's . It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently remaining
                essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Hic nulla debitis
                officiis consectetur impedit blanditiis nihil voluptatem labore
                assumenda voluptatibus. Magni earum aperiam error ipsum, dicta
                architecto corporis sit dolore?LLorem Ipsum is simply dummy text
                of the printing and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries, but
                also the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets
              </p>
              <div
                className="flex justify-center space-x-2  overflow-y-scroll"
                style={{
                  height: "200px",
                  flexDirection: "row",
                  marginTop: "20px",
                }}
              >
                <Button
                  onClick={() => {
                    setOpenRecipeModal(false);
                  }}
                  className="relative h-10 w-32"
                  style={{ color: "black" }}
                >
                  <MdKeyboardDoubleArrowLeft
                    size={12}
                    style={{ marginRight: "5px" }}
                  />
                  Cancel
                </Button>

                <Button
                  onClick={goToShop}
                  className="relative h-10 w-32 "
                  style={{ color: "black" }}
                >
                  <MdLocalGroceryStore
                    size={12}
                    style={{ marginRight: "8px" }}
                  />
                  Shop
                </Button>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Modals;