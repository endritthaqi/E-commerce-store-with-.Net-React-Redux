import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
  CardHeader,
} from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <>
      <Card key={product.id}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "secondary.main" }}>
              {product.name.charAt(0).toUpperCase()}
            </Avatar>
          }
          title={product.name}
          titleTypographyProps={{
            sx: { fontWeight: "bold", color: "primary.main" },
          }}
        />
        <CardActionArea>
          <CardMedia
            sx={{
              height: 140,
              backgroundSize: "contain",
              bgcolor: "primary.light",
            }}
            image={product.pictureUrl}
            title={product.name}
          />
          <CardContent>
            <Typography
              gutterBottom
              color="secondary"
              variant="h5"
              component="h2"
            >
              ${(product.price / 100).toFixed(2)}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.brand} / {product.type}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Add to cart
          </Button>
          <Button size="small" color="primary">
            View
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
