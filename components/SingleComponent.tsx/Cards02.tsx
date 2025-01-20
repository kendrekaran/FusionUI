"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Sun, Moon, Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  salePrice?: number;
}


const products: Product[] = [
    {
      id: 1,
      name: "Jungle Mac Slip-on", 
      price: 300,
      rating: 5,
      image:
        "https://images.stockx.com/images/Nike-Dunk-Low-Retro-White-Black-2021-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1633027409",
    },
    {
      id: 2,
      name: "Jungle Moc Slip-on",
      price: 350,
      rating: 4,
      image:
        "https://images.stockx.com/images/adidas-Samba-OG-Cloud-White-Core-Black-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1687243797",
    },
    {
      id: 3,
      name: "Cloudfoam Race",
      price: 270,
      rating: 5,
      image:
        "https://images.stockx.com/images/Air-Jordan-1-Retro-Low-OG-Mocha-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1724418456",
    },
    {
      id: 4,
      name: "Low waterproof",
      price: 400,
      rating: 4,
      image:
        "https://images.stockx.com/images/Air-Jordan-1-Retro-Low-OG-SP-Travis-Scott-Canary-Womens-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1714996334",
    },
    {
      id: 5,
      name: "Garren Cap Toe",
      price: 280,
      rating: 5,
      image:
        "https://images.stockx.com/images/adidas-Yeezy-350-V2-Carbon-Beluga-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1686036389",
    },
    {
      id: 6,
      name: "Dunham Lexington",
      price: 450,
      salePrice: 380,
      rating: 5,
      image:
        "https://images.stockx.com/images/adidas-Handball-Spezial-Earth-Strata-Gum-Womens-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1710450571",
    },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={`${i < rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-400 text-gray-400"}`}
        />
      ))}
    </div>
  );
}

function ProductCard({ product, isDark }: { product: Product; isDark: boolean }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`group relative overflow-hidden rounded-lg p-4 transition-all shadow-2xl border ${
        isDark ? "bg-black border-gray-600 text-white" : "bg-white border-gray-300 text-black"
      }`}
    >
      <div className="relative mb-2 aspect-square overflow-hidden rounded-lg h-28 p-2 w-full bg-white">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <h3 className="mb-2 text-sm font-semibold">{product.name}</h3>
      <div className="mb-2 flex items-center gap-2">
        {product.salePrice ? (
          <>
            <span className="text-sm font-bold text-green-500">${product.salePrice}</span>
            <span className="text-sm text-gray-500 line-through">${product.price}</span>
          </>
        ) : (
          <span className="text-sm font-bold text-blue-500">${product.price}</span>
        )}
      </div>
      <StarRating rating={product.rating} />
    </motion.div>
  );
}

export default function Cards02() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 px-8 ${
        isDark ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold">Our Collections</h1>
          <p className="mx-auto px-20 max-w-2xl text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        <div className="mb-8 flex items-center justify-end">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setIsDark(!isDark)}>
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Select defaultValue="default">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Default Sorting" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default Sorting</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name: A to Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} isDark={isDark} />
          ))}
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Button variant="outline" size="lg" className={`min-w-[200px] ${isDark ? "bg-black text-white" : "bg-gray-100 text-black"}`}>
              View All Products
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
