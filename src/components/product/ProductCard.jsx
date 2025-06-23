// src/components/ProductCard.jsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProductCard = ({ product }) => {
  return (
    <Card className="w-full max-w-sm shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <div className="text-sm text-muted-foreground">{product.category}</div>
      </CardHeader>
      <CardContent>
        <div className="h-40 bg-gray-200 rounded mb-4 flex items-center justify-center text-sm text-muted-foreground">
          Image Placeholder
        </div>
        <p className="text-sm mb-2">{product.description}</p>
        <div className="text-primary font-bold">{product.price} MAD</div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
