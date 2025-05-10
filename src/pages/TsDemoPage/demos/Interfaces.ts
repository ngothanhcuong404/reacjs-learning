// 1. Interface cơ bản
export interface User {
  id: number;
  name: string;
  email: string;
}

// 2. Interface với thuộc tính tùy chọn
export interface Product {
  name: string;
  price: number;
  description?: string;
}

// 3. Interface mở rộng (extends)
export interface Admin extends User {
  role: "admin" | "superadmin";
}

// 4. Interface function
export interface MathFunc {
  (a: number, b: number): number;
}

// 5. Interface cho object với key động
export interface Dictionary {
  [key: string]: string;
}

// Demo functions sử dụng interface
export const interfaceDemo = () => {
  const user: User = {
    id: 1,
    name: "Cuong",
    email: "cuong@example.com",
  };

  const product: Product = {
    name: "Keyboard",
    price: 100,
  };

  const admin: Admin = {
    id: 2,
    name: "Admin User",
    email: "admin@example.com",
    role: "admin",
  };

  const add: MathFunc = (a, b) => a + b;

  const dict: Dictionary = {
    hello: "xin chào",
    bye: "tạm biệt",
  };

  console.log("User:", user);
  console.log("Product:", product);
  console.log("Admin:", admin);
  console.log("Add(2, 3):", add(2, 3));
  console.log("Dictionary:", dict);
};
