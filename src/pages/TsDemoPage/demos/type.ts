// 1. Type alias đơn giản
export type ID = string | number;

// 2. Object type alias
export type User = {
  id: ID;
  name: string;
  isActive: boolean;
};

// 3. Union type
export type Status = "pending" | "approved" | "rejected";

// 4. Intersection type
export type Address = {
  city: string;
  country: string;
};

export type UserWithAddress = User & Address;

// 5. Function type alias
export type MathFunc = (a: number, b: number) => number;

// 6. Optional & readonly
export type Product = {
  readonly id: ID;
  name: string;
  price: number;
  description?: string;
};

// Demo sử dụng các type trên
export const typeDemo = () => {
  const user: User = {
    id: "u001",
    name: "Cuong",
    isActive: true,
  };

  const status: Status = "approved";

  const userWithAddress: UserWithAddress = {
    id: 1,
    name: "Cuong",
    isActive: true,
    city: "Hanoi",
    country: "Vietnam",
  };

  const subtract: MathFunc = (a, b) => a - b;

  const product: Product = {
    id: "p001",
    name: "Mouse",
    price: 50,
  };

  console.log("User:", user);
  console.log("Status:", status);
  console.log("User with address:", userWithAddress);
  console.log("Subtract(10, 5):", subtract(10, 5));
  console.log("Product:", product);
};
