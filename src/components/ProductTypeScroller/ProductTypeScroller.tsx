import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from "react";
import type { SolarProduct } from "../../data";

type ProductTypeScrollerProps = {
  products: SolarProduct[];
  activeProductCode?: string;
  onProductChange?: (product: SolarProduct) => void;
};

const moveProductToFront = (products: SolarProduct[], productCode: string) => {
  const productIndex = products.findIndex((product) => product.code === productCode);

  if (productIndex <= 0) {
    return products;
  }

  return [...products.slice(productIndex), ...products.slice(0, productIndex)];
};

const rotateProducts = (products: SolarProduct[], direction: "previous" | "next") => {
  if (products.length < 2) {
    return products;
  }

  if (direction === "next") {
    return [...products.slice(1), products[0]];
  }

  return [products[products.length - 1], ...products.slice(0, -1)];
};

const ProductTypeScroller: React.FC<ProductTypeScrollerProps> = ({
  products,
  activeProductCode,
  onProductChange,
}) => {
  const selectedCode = activeProductCode ?? products[0]?.code ?? "";
  const trackRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const [animationDirection, setAnimationDirection] = useState<"previous" | "next" | null>(
    null,
  );
  const [orderedProducts, setOrderedProducts] = useState(() =>
    moveProductToFront(products, selectedCode),
  );

  const updateOrder = useCallback((nextProducts: SolarProduct[]) => {
    setOrderedProducts(nextProducts);
    if (nextProducts[0]) {
      onProductChange?.(nextProducts[0]);
    }
  }, [onProductChange]);

  const moveProducts = (direction: "previous" | "next") => {
    if (isAnimatingRef.current || orderedProducts.length < 2) {
      return;
    }

    const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (shouldReduceMotion) {
      updateOrder(rotateProducts(orderedProducts, direction));
      return;
    }

    isAnimatingRef.current = true;
    setAnimationDirection(direction);
  };

  const selectProduct = (product: SolarProduct) => {
    updateOrder(moveProductToFront(orderedProducts, product.code));
  };

  useLayoutEffect(() => {
    if (animationDirection) {
      return;
    }

    setOrderedProducts(moveProductToFront(products, selectedCode));
  }, [animationDirection, products, selectedCode]);

  const renderedProducts = useMemo(() => {
    if (orderedProducts.length < 2 || !animationDirection) {
      return orderedProducts.map((product) => ({ product, clonePosition: "none" }));
    }

    if (animationDirection === "next") {
      return [
        ...orderedProducts.map((product) => ({ product, clonePosition: "none" })),
        { product: orderedProducts[0], clonePosition: "end" },
      ];
    }

    return [
      { product: orderedProducts[orderedProducts.length - 1], clonePosition: "start" },
      ...orderedProducts.map((product) => ({ product, clonePosition: "none" })),
    ];
  }, [animationDirection, orderedProducts]);

  useLayoutEffect(() => {
    const track = trackRef.current;

    if (!track || !animationDirection) {
      return;
    }

    const items = Array.from(track.querySelectorAll("button"));

    if (items.length < 2) {
      isAnimatingRef.current = false;
      setAnimationDirection(null);
      return;
    }

    const stepDistance = items[1].offsetLeft - items[0].offsetLeft;
    const nextProducts = rotateProducts(orderedProducts, animationDirection);
    const animation =
      animationDirection === "next"
        ? track.animate(
            [
              { transform: "translateX(0)" },
              { transform: `translateX(${-stepDistance}px)` },
            ],
            {
              duration: 520,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            },
          )
        : track.animate(
            [
              { transform: `translateX(${-stepDistance}px)` },
              { transform: "translateX(0)" },
            ],
            {
              duration: 520,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            },
          );

    animation.onfinish = () => {
      animation.oncancel = null;
      updateOrder(nextProducts);
      setAnimationDirection(null);
      isAnimatingRef.current = false;
    };

    animation.oncancel = () => {
      setAnimationDirection(null);
      isAnimatingRef.current = false;
    };

    return () => {
      animation.oncancel = null;
      animation.cancel();
    };
  }, [animationDirection, orderedProducts, updateOrder]);

  return (
    <div className="product-panel-header">
      <p>Panel types</p>
      <div className="product-panel-strip" aria-label="Panel types">
        <div className="product-panel-track" ref={trackRef}>
          {renderedProducts.map(({ product, clonePosition }, index) => (
            <button
              type="button"
              className={
                product.code === orderedProducts[0]?.code && clonePosition === "none"
                  ? "is-active"
                  : undefined
              }
              key={`${product.code}-${clonePosition}`}
              aria-current={
                product.code === orderedProducts[0]?.code && clonePosition === "none"
                  ? "true"
                  : undefined
              }
              tabIndex={clonePosition === "none" ? undefined : -1}
              aria-hidden={clonePosition === "none" ? undefined : true}
              onClick={() => selectProduct(product)}
            >
              {product.code}
            </button>
          ))}
        </div>
      </div>

      <div className="product-arrows" aria-label="Scroll panel types">
        <button
          type="button"
          aria-label="Previous panel type"
          disabled={orderedProducts.length < 2}
          onClick={() => moveProducts("previous")}
        >
          &larr;
        </button>
        <button
          type="button"
          aria-label="Next panel type"
          disabled={orderedProducts.length < 2}
          onClick={() => moveProducts("next")}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default ProductTypeScroller;
