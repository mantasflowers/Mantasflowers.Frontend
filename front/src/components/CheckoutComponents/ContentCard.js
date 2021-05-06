import {
  Grid,
  Card,
  CardHeader,
  IconButton,
  CardContent,
  Modal,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";
import { useState } from "react";

const ContentCard = ({ cardHeader, cardContent, modalBody, handleDelete }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => setIsHover(true);

  const handleMouseLeave = () => setIsHover(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = () => setIsOpen(true);

  const handleModalClose = () => setIsOpen(false);

  return (
    <>
      <Card onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <CardHeader
          title={
            <Grid container justify="space-between">
              <Grid item>{cardHeader}</Grid>
              {isHover && (
                <Grid item>
                  <IconButton
                    onClick={handleModalOpen}
                    style={{
                      maxWidth: "14px",
                      maxHeight: "14px",
                      background: "Green",
                      color: "White",
                      padding: "10px",
                    }}
                  >
                    <Edit style={{ fontSize: "14px" }}></Edit>
                  </IconButton>
                  <IconButton
                    onClick={handleDelete}
                    style={{
                      maxWidth: "14px",
                      maxHeight: "14px",
                      background: "Red",
                      color: "white",
                      padding: "10px",
                    }}
                  >
                    <Delete style={{ fontSize: "14px" }}></Delete>
                  </IconButton>
                </Grid>
              )}
            </Grid>
          }
        />
        <CardContent>{cardContent}</CardContent>
      </Card>
      <Modal open={isOpen} onClose={handleModalClose}>
        {modalBody}
      </Modal>
    </>
  );
};

export default ContentCard;
