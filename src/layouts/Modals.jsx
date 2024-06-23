import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button, Box, Typography } from '@mui/material';
import { FaXmark } from 'react-icons/fa6';

const Modals = () => {
    const [openIngredientModal, setOpenIngredientModal] = useState(false);
    const [openRecipeModal, setOpenRecipeModal] = useState(false);
    const navigate = useNavigate();

    const goToShop = () => {
        navigate('/shop');
    };
    return (
        <div className="flex justify-center space-x-2">
            <div>
                <Button onClick={() => setOpenIngredientModal(true)}
                >
                    <p>Ingredients</p>
                </Button>
                <Modal open={openIngredientModal} onClose={() => setOpenIngredientModal(false)} >
                    <Box sx={{
                        position: "absolute",
                        top: "10%",
                        bottom: "0%",
                        left: "5%",
                        right: "5%",
                        justifyContent: "center",
                        alignItem: "center",
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 2
                    }} >

                        <div className="absolute top-0 right-0 m-2">
                            <Button onClick={() => {
                                setOpenIngredientModal(false)
                            }}>
                                <FaXmark size={20} />
                            </Button>
                        </div>
                        <Typography className='relative m-h-[1000px] h-full w-full overflow-y-scroll top-10'>
                            <p>
                                LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nulla debitis officiis consectetur impedit blanditiis nihil voluptatem labore assumenda voluptatibus. Magni earum aperiam error ipsum, dicta architecto corporis sit dolore?
                            </p>
                            <div className="flex justify-center space-x-2 ">
                                <Button
                                    onClick={goToShop}
                                    className='relative h-32 w-32 overflow-y-scroll '>Go To Shop
                                </Button>
                                <Button
                                    onClick={() => {
                                        setOpenIngredientModal(false)
                                    }}
                                    className='relative h-32 w-32 overflow-y-scroll'>Cancel</Button>
                            </div>
                        </Typography>
                    </Box>
                </Modal>
            </div>
            <div>
                <Button onClick={() => setOpenRecipeModal(true)} >Recipe</Button>
                <Modal open={openRecipeModal} onClose={() => setOpenRecipeModal(false)} >
                    <Box sx={{
                        position: "absolute",
                        top: "10%",
                        bottom: "0%",
                        left: "5%",
                        right: "5%",
                        justifyContent: "center",
                        alignItem: "center",
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 2
                    }} >

                        <div className="absolute top-0 right-0 m-2">
                            <Button onClick={() => {
                                setOpenRecipeModal(false)
                            }}>
                                <FaXmark size={20} />
                            </Button>
                        </div>

                        <Typography className='relative m-h-[1000px] h-full w-full overflow-y-scroll top-10'>
                            <p>
                                LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nulla debitis officiis consectetur impedit blanditiis nihil voluptatem labore assumenda voluptatibus. Magni earum aperiam error ipsum, dicta architecto corporis sit dolore?LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nulla debitis officiis consectetur impedit blanditiis nihil voluptatem labore assumenda voluptatibus. Magni earum aperiam error ipsum, dicta architecto corporis sit
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nulla debitis officiis consectetur impedit blanditiis nihil voluptatem labore assumenda voluptatibus. Magni earum aperiam error ipsum, dicta architecto corporis sit dolore?LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nulla debitis officiis consectetur impedit blanditiis nihil voluptatem labore assumenda voluptatibus. Magni earum aperiam error ipsum, dicta architecto corporis sitLorem ipsum dolor sit amet consectetur adipisicing elit. Hic nulla debitis officiis consectetur impedit blanditiis nihil voluptatem labore assumenda voluptatibus. Magni earum aperiam error ipsum, dicta architecto corporis sit dolore?LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <div className="flex justify-center space-x-2">
                                <Button
                                    onClick={goToShop}
                                    className='relative h-32 w-32 overflow-y-scroll'>Go TO Shop</Button>
                                <Button
                                    onClick={() => {
                                        setOpenRecipeModal(false)
                                    }}
                                    className='relative h-32 w-32 overflow-y-scroll'>Cancel</Button>
                            </div>
                        </Typography>
                    </Box>
                </Modal>
            </div>

        </div>

    )
}

export default Modals;