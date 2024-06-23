import React, { useState }  from "react";
import { useNavigate } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';
import { Modal, Button, Box, Typography } from '@mui/material';


const CartModals = () => {
    const [openCartModal, setOpenCartModal] = useState(false);
    
    return (
        <div className="flex justify-center space-x-2">
            <div>
                <Button onClick={() => setOpenCartModal(true)}>
                    <FiShoppingCart size={24} />
                </Button>
                <Modal open={openCartModal} onClose={() => setOpenCartModal(false)} >
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

                        <Typography className='relative m-h-[1000px] h-full w-full overflow-y-scroll top-10'>
                            <p>
                                LLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nulla debitis officiis consectetur impedit blanditiis nihil voluptatem labore assumenda voluptatibus. Magni earum aperiam error ipsum, dicta architecto corporis sit dolore?
                            </p>

                        </Typography>
                    </Box>
                </Modal>
            </div>
            </div>

            )
}
            export default CartModals;