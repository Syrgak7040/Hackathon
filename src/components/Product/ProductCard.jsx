import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContextProvider";
import { useCart } from "../../contexts/CartContextProvider";
import { useProduct } from "../../contexts/ProductContextProvider";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ProductCard = ({ item }) => {
  const { deleteProduct } = useProduct();
  const { addProductToCart, checkProductInCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        width="200"
        image={item.img}
        alt={item.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {item.type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price}
        </Typography>
      </CardContent>
      {user.email === "admin@admin.com" ? (
        <CardActions>
          <Button size="small" onClick={() => deleteProduct(item.id)}>
            Delete
          </Button>
          <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
            Edit
          </Button>
        </CardActions>
      ) : (
        <IconButton onClick={() => addProductToCart(item)}>
          <ShoppingCartIcon
            color={checkProductInCart(item.id) ? "primary" : ""}
          />
        </IconButton>
      )}
    </Card>
  );
};

export default ProductCard;
